---
actions:
  - text: Your Character
    link: ./characters/characters
    type: primary

  - text: Character Creation
    link: ./characters/character-rules
    type: primary

  - text: The World
    link: ./world/world-overview
    type: primary

  - text: Rules Changes
    link: ./rules/rules-changes
    type: primary
---


# Welcome to the D&D Campaign Reference!

::: warning
The Campaign Reference is still incomplete, and subject to change.
:::

Welcome to your one-stop reference for everything about <span class="redacted" style="width: 5rem"><!-- When I said redacted I meant it --></span> and <span class="redacted" style="width: 6.4rem"><!-- No secrets for you! --></span>, twin campaigns  taking place at the same time in the same world.

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
  display: grid;
  grid-template-columns: repeat(2, min-content);
  gap: 1rem;

  .button {
    min-width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.redacted {
  display: inline-block;
  background-color: black;
  height: 1em;
}
</style>