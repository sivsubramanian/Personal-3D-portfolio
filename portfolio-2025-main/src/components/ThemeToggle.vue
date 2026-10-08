<script setup lang="ts">
import { useTheme } from "../composables/useTheme";
import ButtonRound from "./ButtonRound.vue";
import SunMoon from "./icons/SunMoon.vue";
import { t } from "../i18n/utils/translate";

const props = defineProps<{
  isDarkTheme?: boolean;
}>();

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <ButtonRound
    variant="theme"
    :class="{ 'theme-toggle': true, 'theme-toggle-header-dark': props.isDarkTheme, 'children-unclickable': true }"
    @click="toggleTheme"
    :aria-label="isDark ? t('toggle-light-theme') : t('toggle-dark-theme')"
    :title="isDark ? t('toggle-light-theme') : t('toggle-dark-theme')"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    <SunMoon :isDark="isDark" />
  </ButtonRound>

</template>

<style scoped lang="scss">
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.06);
  }

  &-header-dark {
    background-color: var(--color-dark-blue-500);
    color: var(--color-white-400);
    --icon-color: var(--color-white-400);
  }
}
</style>
