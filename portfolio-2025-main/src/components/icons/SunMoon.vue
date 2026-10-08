<script setup lang="ts">
defineProps<{
  isDark: boolean;
}>();
</script>

<template>
  <svg
    class="theme-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <!-- Moon (shown when in Light Mode) -->
    <path
      v-if="!isDark"
      class="icon-moon"
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
      fill="currentColor"
    />

    <!-- Sun (shown when in Dark Mode) -->
    <g v-else class="icon-sun">
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </g>
  </svg>
</template>

<style scoped lang="scss">
.theme-icon {
  width: 20px;
  height: 20px;
  color: var(--icon-color, currentColor);
  display: block;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.icon-moon {
  transform-origin: center;
  animation: rotateIn 0.3s ease;
}

.icon-sun {
  transform-origin: center;
  animation: scaleIn 0.3s ease;
}

@keyframes rotateIn {
  from {
    transform: rotate(-30deg) scale(0.8);
    opacity: 0;
  }
  to {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.7) rotate(45deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}
</style>
