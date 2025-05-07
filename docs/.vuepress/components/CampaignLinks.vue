<template>
  <div class="home-nav-links">
    <RouteLink
      v-for="action in actions"
      :to="action.link"
      class="button"
    >
      <div class="button-image">
        <img :src="withBase(`/images/${action.icon}`)" alt="" />
      </div>
      <div class="button-content">
        {{ action.text }}
      </div>
    </RouteLink>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vuepress/client'

const props = defineProps<{
  actions: Array<{
    text: string,
    icon: string,
    link: string
  }>
}>()
</script>

<style lang="scss" scoped>
@use '../styles/breakpoints';

.home-nav-links {
  padding-top: 1rem;
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @include breakpoints.mobile {
    grid-template-columns: 1fr;
  }
}

.button {
  display: grid;
  overflow: hidden;
  
  > * {
    grid-area: 1 / 1;
    overflow: hidden;
  }
}

.button-content {
  z-index: 1;
  align-self: end;

  padding: 0.5rem;
  color: var(--vp-c-accent-text);

  font-size: 1.5rem;

  text-shadow: 0 0 0.25em black, 0 0 0.5em black, 0 0 1em black;

  will-change: scale;
  transition: transform 0.3s;

  .button:hover & {
    transform: scale(1.2) translateY(-0.25em);
  }
}

.button-image {
  position: relative;
  pointer-events: none;

  will-change: scale;
  transition: transform 0.3s, filter 0.3s, transform 0.3s; 

  .button:hover & {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;

    box-shadow: 0 0 4rem rgba(black, 0.5) inset;
  }
}
</style>
