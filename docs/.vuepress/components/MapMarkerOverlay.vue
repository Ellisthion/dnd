<template>
  <div ref="hostEl" class="map-marker-overlay-component" :style="{ '--map-w': mapConfig.width, '--map-h': mapConfig.height }">
    <template v-for="(marker, i) of markerViewModels" :key="`${marker.name}_${i}`">
      <div      
        class="marker"
        :class="[{ 
          'is-visible': marker.visible,
        },
          `animation-${marker.animation}`
        ]"
        :style="{
          '--x': marker.x,
          '--y': marker.y,
          '--w': marker.width,
          '--h': marker.height,
          '--tint': marker.tint,
          '--icon': marker.icon,
          '--animation': marker.animation
        }"
        :data-tooltip="`map-tooltip-${i}`"
        :aria-label="marker.alt"
      >
        <div class="marker-icon"></div>

      </div>

      <div style="display: none">
        <div :id="`map-tooltip-${i}`">
          <div>
            <strong>{{ marker.name }}</strong>
          </div>
          <div>
            {{ marker.description }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, useTemplateRef } from 'vue';
import { MapMarkerType, mapMarkers, mapMarkerTypes, mapConfig } from '../data/map-markers';
import { withBase } from 'vuepress/client'
import { delegate } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const props = defineProps<{
  activeMarkers: Record<MapMarkerType, boolean>
}>();

const hostEl = useTemplateRef('hostEl');

const markerViewModels = computed(() => mapMarkers.map(marker => {
  return {
    visible: props.activeMarkers[marker.type],

    x: marker.x,
    y: marker.y,
    width: marker.width ?? mapMarkerTypes[marker.type].defaultWidth,
    height: marker.height ?? mapMarkerTypes[marker.type].defaultHeight,

    tint: marker.tint ?? mapMarkerTypes[marker.type].defaultTint,
    icon: `url(${withBase(`/images/map-icons/${marker.icon ?? mapMarkerTypes[marker.type].defaultIcon}.svg`)})`,
    animation: marker.animation ?? mapMarkerTypes[marker.type].defaultAnimation,
    
    name: marker.name,
    description: marker.description,
    alt: mapMarkerTypes[marker.type].name + ' - ' + marker.name
  }
}));

onMounted(async () => {
  if (!hostEl.value) {
    throw new Error('Cannot find host element');
  }

  const tippyDelegates = delegate('body', {
    target: '.map-marker-overlay-component .marker',
    content: (reference) => {
      const tooltipId = (reference as HTMLElement)?.dataset?.tooltip;
      if (tooltipId) {
        const template = document.getElementById(tooltipId);
        return template ? template.innerHTML : '';
      }
      return '';
    },
    allowHTML: true,
    appendTo: (reference) => {
      return reference.closest('dialog') || document.body;
    },
    zIndex: 99999
  });

  onUnmounted(() => {
    for (const t of tippyDelegates) {
      t.destroy();
    }
  })
});
</script>

<style lang="scss" scoped>
.map-marker-overlay-component {
  position: relative;
  z-index: 10;

  container-type: size;
}

.marker {
  position: absolute;
  left: calc(var(--x) / var(--map-w) * 100cqw);
  top: calc(var(--y) / var(--map-h) * 100cqh);
  width: calc(var(--w) / var(--map-w) * 100cqw);
  height: calc(var(--h) / var(--map-h) * 100cqh);

  transform: translateX(-50%) translateY(-50%);

  filter: drop-shadow(0 0 2px white);

  &:not(.is-visible) {
    display: none;
  }

  .marker-icon {
    height: 100%;
    width: 100%;
    
    background-color: var(--tint);

    mask-image: var(--icon);
    mask-size: contain;
    mask-repeat: no-repeat;
  }
}

.animation-spin {
  .marker-icon {
    animation: spin 3s linear infinite;
  }
}

@keyframes spin {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

.animation-float {
  .marker-icon {
    animation: float 3s ease-in-out infinite;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>