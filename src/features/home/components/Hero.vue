<script setup>
import Button from "../../../components/Button.vue";
import Banner from "../../../components/Banner.vue";
import { preloaderVisible } from "../../../composables/usePreloader";
import { t } from "../../../i18n/utils/translate";
import AppearingText from "../../../components/AppearingText.vue";
</script>

<template>
  <div class="hero">
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
          <h1 class="hero-title">Siva<br /><span class="hero-title-nowrap">Subramanian M</span></h1>
          <Banner class="hero-banner" :copy="t('job-title')" v-if="!preloaderVisible" animated />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  max-height: calc(var(--lvh) * 100);
  height: calc(var(--lvh) * 100);
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  &-content {
    align-items: center;
    justify-content: center;
    height: 46%;

    @include mixins.landscape {
      height: 100%;

      @include mixins.mq("md") {
        padding-bottom: 30%;
      }

      @include mixins.mq("lg") {
        padding-bottom: 5%;
      }
    }

    &-inner {
      transform-origin: center center;
      grid-column: 1 / 13;
      gap: var(--space-xxl);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: fit-content;
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      @include mixins.landscape {
        left: 0;
        transform: translateX(0);
        grid-column: 2 / 7;
        width: fit-content;
        max-width: min(540px, 42vw);
      }
    }

    &-copys {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      position: relative;

      @include mixins.mq("md") {
        gap: var(--space-md);
      }
    }

    &-button {
      width: fit-content;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: clamp(26px, 6.8vw, 34px);
    line-height: 1.08;

    &-nowrap {
      white-space: nowrap;
    }

    @include mixins.mq("sm") {
      font-size: clamp(32px, 7vw, var(--font-size-title-lg));
      line-height: 1.05;
    }

    @include mixins.landscape {
      font-size: clamp(30px, 3.8vw, 54px);
    }

    @include mixins.landscape-large {
      @include mixins.mq("sm") {
        font-size: clamp(36px, 4vw, 64px);
      }

      @include mixins.mq("xl") {
        font-size: clamp(40px, 4.2vw, 76px);
      }
    }
  }

  &-banner {
    position: absolute;
    bottom: -6px;
    right: 0;
    z-index: 10;
    transform: rotate(-4deg) translate(0, 100%);

    @include mixins.mq("sm") {
      bottom: 0;
      right: -16px;
      transform: rotate(-5deg) translate(0, 70%);
    }

    @include mixins.mq("lg") {
      right: -24px;
      transform: rotate(-5deg) translate(0, 80%);
    }
  }
}
</style>
