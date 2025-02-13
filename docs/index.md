---
actions:
  - text: Characters
    link: ./player/characters
    type: primary

  - text: World
    link: ./player/world
    type: primary

  - text: Rules
    link: ./player/rules
    type: primary
---


# Welcome to the D&D Campaign Reference!

::: warning
The Campaign Reference is still incomplete, and subject to change.
:::

Learn about the campaign world, character creation, and campaign-specific rules.

<div class="home-nav-links">
  <VPAutoLink
    v-for="action in $page.frontmatter.actions"
    :key="action.text"
    class="vp-hero-action-button button"
    :class="[action.type]"
    :config="action"
  />
</div>

<script setup lang="ts">
import VPAutoLink from '@theme/VPAutoLink.vue'
</script>

<style lang="scss" scoped>
.home-nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .button {
    min-width: 10rem;
  }
}
</style>