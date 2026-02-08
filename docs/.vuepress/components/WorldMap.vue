<template>
  <div id="mapLightboxContent" class="lightbox-content">
    <div class="map-container">
        <div class="map-controls">
          <div class="map-controls-inner">
              <div>
                <label>Layers:</label>
              </div>
              <div class="map-controls-options">
                <label>
                    <input type="checkbox" v-model="mapOptions.grid" />
                    <span>Grid</span>
                </label>
                <label v-for="markerKey of Object.keys(mapOptions.markers)" :key="markerKey">
                    <input type="checkbox" v-model="mapOptions.markers[markerKey as MapMarkerType]" />
                    <span>{{ mapMarkerTypes[markerKey as MapMarkerType].namePlural }}</span>
                </label>
              </div>
              <div>
                <button type="button" class="lightbox-button button-open-lightbox" @click="openLightbox()">
                    Full Screen
                </button>
                <button type="button" class="lightbox-button button-close-lightbox" @click="closeLightbox()">
                    Close
                </button>
              </div>
          </div>
        </div>
        <div class="image-box">
          <div class="image-box-inner">
              <img class="disable-medium-zoom map-image" :class="{ 'is-active': !mapOptions.grid }" :src="withBase('/images/World v1.3 Cropped.webp')" alt="World Map" />
              <img class="disable-medium-zoom map-image" :class="{ 'is-active': mapOptions.grid }" :src="withBase('/images/World v1.3 Grid Cropped.webp')" alt="World Map with Grid" />
              <MapMarkerOverlay :active-markers="mapOptions.markers" />
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vuepress/client'
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { ref, watch, reactive, onMounted, onUnmounted } from 'vue';
import { MapMarkerType, mapMarkerTypes } from '../data/map-markers';
import MapMarkerOverlay from './MapMarkerOverlay.vue';  

const defaultOptions = {
   grid: false,
   markers: { 
      'planar-breach': false
   } as Record<MapMarkerType, boolean>
};

const mapOptions = ref(reactive(defaultOptions));

onMounted(() => {
   const initialOptions = localStorage.getItem('map-options');

   mapOptions.value = reactive(initialOptions ? {...defaultOptions, ...JSON.parse(initialOptions)} : defaultOptions);
   
   watch(mapOptions, () => {
      localStorage.setItem('map-options', JSON.stringify(mapOptions.value));
   }, { deep: true });
});

onUnmounted(() => {
   Fancybox.close();
});

function openLightbox() {
   Fancybox.show([
   {
      src: "#mapLightboxContent",
      type: "inline",
   },
   ], {  
      Carousel: {
         gestures : (ref) => {
            return ref.getSlides().length > 1
         }
      },

      dragToClose: false,
      closeButton: false
   });
}

function closeLightbox() {
   Fancybox.close();
}
</script>

<style lang="scss" scoped>
$color-border: #b78846;
$color-fill: #dbc3a2;
$corner-size: 14px;
$outer-border: 5px;
$inner-border: 2px;

.lightbox-content {
   display: block !important;
   opacity: 1 !important;
}

.map-container *,
.map-container *::before,
.map-container *::after {
   box-sizing: border-box;
}

.map-container {
   background-color: $color-fill;
   padding: $outer-border;
   border: $inner-border solid $color-border;

   display: flex;
   flex-direction: column;
   align-items: stretch;
   gap: calc($outer-border + $inner-border);

   user-select: none;
}

.map-controls {
   border: $inner-border solid $color-border;

   &::before,
   &::after {
      content: unset !important;
   }

   .map-controls-inner {
      background: var(--vp-c-bg);
      display: flex;
      align-items: center;
      gap: 8px;
      padding: $outer-border;
      border-bottom: none;

      input[type="checkbox"] {
         position: absolute;
         clip: rect(0, 0, 0, 0);
         pointer-events: none;
      }

      label:has(input[type="checkbox"]),
      .lightbox-button {
         font-size: 1rem;

         background: transparent;
         border: 2px solid var(--vp-c-accent-bg);
         padding: 2px 4px 1px;
         border-radius: 4px;

         cursor: pointer;

         &:hover {
            background: var(--vp-c-accent-hover);
            color: var(--vp-c-accent-text);
         }
      }

      label:has(input[type="checkbox"]:checked) {
         background: var(--vp-c-accent);
         color: var(--vp-c-accent-text);
      }
   }
}

.image-box,
.map-controls {
   position: relative;
   width: 100%;
  
   &::before,
   &::after {
      content: '•';
      position: absolute;

      width: $corner-size;
      height: $corner-size;
      font-size: $corner-size;
      color: $color-border;
      border: $inner-border solid $color-border;
      line-height: calc($corner-size - $inner-border);
      top: $outer-border;
      text-align: center;

      pointer-events: none;
   }

  &::before {
      left: $outer-border;
  }

  &::after {
      right: $outer-border;
  }

  .image-box-inner {
      display: grid;
      overflow: hidden;

      border: $inner-border solid $color-border;

      > * {
         grid-area: 1 / 1;
         width: 100%;
         height: 100%;

         &.map-image:not(.is-active) {
            opacity: 0;
            pointer-events: none;
         }
      }

      &::before,
      &::after {
         content: '•';
         position: absolute;
         width: $corner-size;
         height: $corner-size;
         font-size: $corner-size;
         color: $color-border;
         border: $inner-border solid $color-border;
         line-height: calc($corner-size - $inner-border);
         bottom: $outer-border;
         text-align: center;
         pointer-events: none;
      }

      &::before {
         left: $outer-border;
      }

      &::after {
         right: $outer-border;
      }
   }
}

.map-controls-options {
   flex: 1 1 auto;
   display: flex;
   gap: 8px;
}
</style>

<style lang="scss">
.button-close-lightbox {
   display: none;
}

.fancybox__slide {
   --f-html-padding: 0;
   --f-html-color: currentColor;

   .lightbox-content {
      max-width: 100%;
      max-height: 100%;
   }

   .button-open-lightbox {
      display: none;
   }

   .button-close-lightbox {
      display: block;
   }
}
</style>