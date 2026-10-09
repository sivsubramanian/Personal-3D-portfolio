import { onMounted, onUnmounted, watch } from "vue";
import gsap from "gsap";
import { BASE_VOLUMES, musicTracks } from "../definitions/music";
import { sizes } from "../../../utils/sizes";
import { howlerUnlocked, soundsEnabled, unlockHowlerAudio } from "./useHowler";
import { isFeatureEnabled } from "../../../utils/features";
import { useAgent } from "../../../composables/useAgent";

export const useMusic = () => {
  const { isTouch } = useAgent();

  const tickVolumes = () => {
    musicTracks.luci.volume(BASE_VOLUMES.luci);
  };

  const tick = () => {
    if (!sizes.visible) return;
    if (!soundsEnabled.value || !howlerUnlocked.value || isTouch.value) return;
    tickVolumes();
  };

  const play = () => {
    if (!isFeatureEnabled("sounds") || isTouch.value) return;
    const track = musicTracks.luci;
    if (!track) return;
    track.volume(BASE_VOLUMES.luci);
    if (!track.playing()) {
      track.play();
    }
  };

  const stop = () => {
    const track = musicTracks.luci;
    if (track && track.playing()) {
      track.pause();
    }
  };

  // Watch sound enablement state
  watch(soundsEnabled, (enabled) => {
    if (enabled && !isTouch.value) {
      unlockHowlerAudio();
      play();
    } else {
      stop();
    }
  });

  // Watch unlock state
  watch(howlerUnlocked, (unlocked) => {
    if (unlocked && soundsEnabled.value && !isTouch.value) {
      play();
    }
  });

  const onFirstInteraction = () => {
    unlockHowlerAudio();
    if (soundsEnabled.value && !isTouch.value) {
      play();
    }
  };

  onMounted(() => {
    if (!isFeatureEnabled("sounds") || isTouch.value) return;
    gsap.ticker.add(tick);

    // Attempt autoplay immediately
    play();

    // Listen for any user interactions to start immediately on the very first touch/click/scroll/hover
    window.addEventListener("pointerdown", onFirstInteraction, { passive: true });
    window.addEventListener("pointermove", onFirstInteraction, { once: true, passive: true });
    window.addEventListener("click", onFirstInteraction, { passive: true });
    window.addEventListener("keydown", onFirstInteraction, { passive: true });
    window.addEventListener("scroll", onFirstInteraction, { passive: true });
    window.addEventListener("wheel", onFirstInteraction, { passive: true });
    window.addEventListener("touchstart", onFirstInteraction, { passive: true });
  });

  onUnmounted(() => {
    gsap.ticker.remove(tick);
    window.removeEventListener("pointerdown", onFirstInteraction);
    window.removeEventListener("pointermove", onFirstInteraction);
    window.removeEventListener("click", onFirstInteraction);
    window.removeEventListener("keydown", onFirstInteraction);
    window.removeEventListener("scroll", onFirstInteraction);
    window.removeEventListener("wheel", onFirstInteraction);
    window.removeEventListener("touchstart", onFirstInteraction);
    musicTracks.luci.stop();
  });
};
