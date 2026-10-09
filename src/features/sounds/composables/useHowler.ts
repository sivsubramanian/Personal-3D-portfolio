import { onMounted, onUnmounted, ref, watch } from "vue";
import gsap from "gsap";
import { lerp } from "../../../utils/math";
import { Howler } from "howler";
import { isFeatureEnabled } from "../../../utils/features";
import { tick as contactTick } from "../core/contact";
import { useAgent } from "../../../composables/useAgent";
import { stopSnoreRepetition } from "../core/contact";
import { tick as roomTick } from "../core/room";
import { sounds } from "../definitions/sounds";
import { getSoundsHowl } from "../utils/sounds";

import type { SoundKey } from "../types";

const getInitialSoundsEnabled = (): boolean => {
  if (typeof window === "undefined") return true;
  return localStorage.getItem("portfolio-soundsEnabled") !== "false";
};

export const howlerUnlocked = ref(false);
export const soundsEnabled = ref(getInitialSoundsEnabled());

Howler.volume(getInitialSoundsEnabled() ? 1 : 0);

export const unlockHowlerAudio = () => {
  howlerUnlocked.value = true;
  if (Howler.ctx) {
    if (Howler.ctx.state === "suspended") {
      Howler.ctx.resume().then(() => {
        howlerUnlocked.value = true;
        Howler.volume(soundsEnabled.value ? 1 : 0);
      }).catch(() => {});
    } else if (Howler.ctx.state === "running") {
      Howler.volume(soundsEnabled.value ? 1 : 0);
    }
  } else {
    Howler.volume(soundsEnabled.value ? 1 : 0);
  }
};

export const useHowler = () => {
  const { isTouch } = useAgent();
  const enabledVolume = ref<number>(soundsEnabled.value ? 1 : 0);

  const handleUnlocked = () => {
    howlerUnlocked.value = true;

    // Disable sounds completely on touch devices
    if (isTouch.value) {
      soundsEnabled.value = false;
      return;
    }

    const storeItem = localStorage.getItem("portfolio-soundsEnabled");
    if (storeItem !== null) {
      soundsEnabled.value = storeItem === "true";
    } else {
      soundsEnabled.value = true;
      localStorage.setItem("portfolio-soundsEnabled", "true");
    }
    enabledVolume.value = soundsEnabled.value ? 1 : 0;
    Howler.volume(enabledVolume.value);
  };

  const tick = () => {
    if (!howlerUnlocked.value) {
      if (Howler.ctx && Howler.ctx.state === "running") {
        handleUnlocked();
      }
      return;
    } else if (!isTouch.value) {
      // Only process sounds on non-touch devices
      contactTick();
      roomTick();

      const currentVolume = Howler.volume();
      if (Math.abs(currentVolume - enabledVolume.value) < 0.01) {
        if (currentVolume !== enabledVolume.value) {
          Howler.volume(enabledVolume.value);
        }
        return;
      }
      const speed = 0.15;
      Howler.volume(lerp(currentVolume, enabledVolume.value, speed));
    }
  };

  const handleVisibilityChange = () => {
    Howler.mute(document.visibilityState === "hidden");
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.code === "KeyM" && !isTouch.value) {
      soundsEnabled.value = !soundsEnabled.value;
    }
  };

  watch(soundsEnabled, (newVal) => {
    if (!isFeatureEnabled("sounds") || isTouch.value) return;
    enabledVolume.value = newVal ? 1 : 0;
    localStorage.setItem("portfolio-soundsEnabled", newVal.toString());
  });

  const loadAllSounds = () => {
    for (const sound of Object.keys(sounds) as SoundKey[]) {
      const howl = getSoundsHowl(sound);
      if (howl) {
        howl.load();
      }
    }
  };

  const unlockOnGesture = () => {
    unlockHowlerAudio();
  };

  onMounted(() => {
    if (!isFeatureEnabled("sounds")) return;
    enabledVolume.value = soundsEnabled.value ? 1 : 0;
    Howler.volume(enabledVolume.value);

    unlockHowlerAudio();

    if (Howler.ctx && Howler.ctx.state === "running") {
      handleUnlocked();
    }

    gsap.ticker.add(tick);
    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("pointerdown", unlockOnGesture, { once: true, passive: true });
    window.addEventListener("pointermove", unlockOnGesture, { once: true, passive: true });
    window.addEventListener("scroll", unlockOnGesture, { once: true, passive: true });
    window.addEventListener("wheel", unlockOnGesture, { once: true, passive: true });
    window.addEventListener("click", unlockOnGesture, { once: true, passive: true });
    window.addEventListener("touchstart", unlockOnGesture, { once: true, passive: true });

    if (!isTouch.value) {
      loadAllSounds();
    }
  });

  onUnmounted(() => {
    if (!isFeatureEnabled("sounds")) return;
    gsap.ticker.remove(tick);
    window.removeEventListener("visibilitychange", handleVisibilityChange);
    window.removeEventListener("keydown", handleKeyPress);
    window.removeEventListener("pointerdown", unlockOnGesture);
    window.removeEventListener("pointermove", unlockOnGesture);
    window.removeEventListener("scroll", unlockOnGesture);
    window.removeEventListener("wheel", unlockOnGesture);
    window.removeEventListener("click", unlockOnGesture);
    window.removeEventListener("touchstart", unlockOnGesture);
    stopSnoreRepetition();
  });
};
