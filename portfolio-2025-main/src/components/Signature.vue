<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";

const svgRef = ref<SVGSVGElement | null>(null);
const path1Ref = ref<SVGPathElement | null>(null);
const path2Ref = ref<SVGPathElement | null>(null);
const path3Ref = ref<SVGPathElement | null>(null);

let timeline: gsap.core.Timeline | null = null;
let observer: IntersectionObserver | null = null;
let hasAnimated = false;

const initStrokes = () => {
  const paths = [path1Ref.value, path2Ref.value, path3Ref.value];
  paths.forEach((p) => {
    if (!p) return;
    const len = p.getTotalLength();
    p.style.strokeDasharray = `${len}`;
    p.style.strokeDashoffset = `${len}`;
  });
};

const playAnimation = () => {
  if (!path1Ref.value || !path2Ref.value || !path3Ref.value) return;

  const len1 = path1Ref.value.getTotalLength();
  const len2 = path2Ref.value.getTotalLength();
  const len3 = path3Ref.value.getTotalLength();

  timeline?.kill();
  timeline = gsap.timeline();

  // Reset initial state
  timeline.set([path1Ref.value, path2Ref.value, path3Ref.value], { opacity: 1 });
  timeline.set(path1Ref.value, { strokeDashoffset: len1 });
  timeline.set(path2Ref.value, { strokeDashoffset: len2 });
  timeline.set(path3Ref.value, { strokeDashoffset: len3 });

  // Main cursive body stroke
  timeline.to(
    path1Ref.value,
    {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power1.inOut",
    },
    0.1,
  );

  // Fast diagonal crossing slash
  timeline.to(
    path2Ref.value,
    {
      strokeDashoffset: 0,
      duration: 0.35,
      ease: "power2.out",
    },
    1.45,
  );

  // Bottom flourish tick
  timeline.to(
    path3Ref.value,
    {
      strokeDashoffset: 0,
      duration: 0.25,
      ease: "power2.out",
    },
    1.7,
  );
};

const handleReplay = () => {
  playAnimation();
};

onMounted(() => {
  initStrokes();

  if (svgRef.value) {
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              hasAnimated = true;
              playAnimation();
            }
          });
        },
        { threshold: 0.2 },
      );
      observer.observe(svgRef.value);
    } else {
      // Fallback
      setTimeout(playAnimation, 500);
    }
  }
});

onUnmounted(() => {
  timeline?.kill();
  observer?.disconnect();
});
</script>

<template>
  <div
    class="signature-wrapper"
    @click="handleReplay"
    title="Click to replay signature animation"
    data-cursor="circle-white"
    data-hoversound="hover"
  >
    <svg
      ref="svgRef"
      class="signature-svg"
      viewBox="0 42 300 218"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sivasubramanian M Signature"
    >
      <!-- Main Signature Cursive Loop -->
      <path
        ref="path1Ref"
        class="signature-stroke signature-stroke-main"
        d="M 72 165 C 88 140, 108 98, 122 82 C 108 68, 76 86, 66 122 C 55 160, 72 205, 96 218 C 118 228, 134 200, 131 155 C 128 115, 133 80, 132 75 C 130 98, 126 185, 122 238 C 124 195, 130 115, 138 92 C 143 78, 152 88, 149 116 C 145 142, 134 172, 136 195 C 139 210, 150 192, 147 160 C 145 140, 152 172, 156 185 C 160 195, 168 180, 164 155 C 162 140, 168 172, 174 185 C 178 195, 186 175, 182 150 C 180 135, 187 165, 194 182 C 196 148, 198 96, 199 76 C 201 65, 210 70, 213 84 C 216 102, 203 148, 199 180 C 197 192, 202 196, 206 188 C 209 178, 208 162, 206 150"
      />
      <!-- Fast Diagonal Crossing Slash -->
      <path
        ref="path2Ref"
        class="signature-stroke signature-stroke-slash"
        d="M 68 168 Q 160 135 248 90"
      />
      <!-- Bottom Right Accent Flourish -->
      <path
        ref="path3Ref"
        class="signature-stroke signature-stroke-accent"
        d="M 172 196 L 196 162"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.signature-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: calc(-1 * var(--space-xs));
  cursor: pointer;
  user-select: none;
  width: fit-content;
}


.signature-svg {
  width: 180px;
  height: auto;
  max-width: 100%;
  overflow: visible;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.06));

  @include mixins.mq("sm") {
    width: 210px;
  }

  @include mixins.mq("md") {
    width: 230px;
  }
}

.signature-stroke {
  fill: none;
  stroke: var(--color-text-400, #1a202c);
  stroke-width: 2.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 0.3s ease;

  &-main {
    stroke-width: 2.6;
  }

  &-slash {
    stroke-width: 2.4;
  }

  &-accent {
    stroke-width: 2.4;
  }
}

:global(html.dark) .signature-stroke {
  stroke: var(--color-text-400, #f8fafc);
}

:global(html.dark) .signature-svg {
  filter: drop-shadow(0 2px 10px rgba(255, 255, 255, 0.15));
}

.signature-wrapper:hover .signature-stroke {
  stroke: var(--color-accent-400, #ff8400) !important;
}
</style>

