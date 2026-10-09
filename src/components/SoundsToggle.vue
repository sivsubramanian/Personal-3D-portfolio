<script setup lang="ts">
import { soundsEnabled, unlockHowlerAudio } from "../features/sounds/composables/useHowler";
import ButtonRound from "./ButtonRound.vue";
import Volume from "./icons/Volume.vue";
import { t } from "../i18n/utils/translate";
import { useAgent } from "../composables/useAgent";

const { isTouch } = useAgent();

const props = defineProps<{
  isDarkTheme: boolean;
}>();

const toggleSounds = () => {
  unlockHowlerAudio();
  soundsEnabled.value = !soundsEnabled.value;
};
</script>

<template>
  <ButtonRound
    v-if="!isTouch"
    variant="theme"
    :class="{ 'music-toggle': true, 'music-toggle-dark': props.isDarkTheme, 'children-unclickable': true }"
    @click="toggleSounds"
    :aria-label="soundsEnabled ? t('disable-sounds') : t('enable-sounds')"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    <Volume :active="soundsEnabled" />
  </ButtonRound>
</template>

<style scoped lang="scss">
.music-toggle {
  &-dark {
    background-color: var(--color-dark-blue-500);
    color: var(--color-white-400);
    --icon-color: var(--color-white-400);
  }
}
</style>
