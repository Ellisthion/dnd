---
actions:
  - text: Your Character
    icon: Character
    link: ./characters/characters

  - text: Character Creation
    icon: Character Creation
    link: ./characters/character-rules

  - text: The World
    icon: World
    link: ./world/world-overview

  - text: Rules Changes
    icon: Rules
    link: ./rules/rules-changes
---


# Welcome to the D&D Campaign Reference!

::: warning
The Campaign Reference is still incomplete, and subject to change.
:::

Welcome to your one-stop reference for everything about <span class="redacted" style="width: 5rem"><!-- When I said redacted I meant it --></span> and <span class="redacted" style="width: 6.4rem"><!-- No secrets for you! --></span>, twin campaigns  taking place at the same time in the same world.

Learn about the campaign world, character creation, and campaign-specific rules.

<div class="home-nav-links">
  <RouteLink
    v-for="action in $page.frontmatter.actions"
    :to="action.link"
    class="button"
  >
    <div class="button-image">
      <img :src="`images/${action.icon}.png`" alt="" />
    </div>
    <div class="button-content">
      {{ action.text }}
    </div>
  </RouteLink>
</div>

<style lang="scss" scoped>
.home-nav-links {
  display: grid;
  grid-template-columns: repeat(2, min-content);
  gap: 1rem;

  .button {
    min-width: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 2px solid var(--vp-c-accent-bg);
    border-radius: 8px;
    overflow: hidden;

    &:hover {
      border-color: var(--vp-c-accent-hover);

      .button-content {
        background-color: var(--vp-c-accent-hover);
      }
    }
  }

  .button-image {
    width: 100%;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;

      pointer-events: none;
    }
  }

  .button-content {
    padding: 0.5rem 2rem;

    background-color: var(--vp-c-accent-bg);
    color: var(--vp-c-accent-text);
  }
}

.redacted {
  display: inline-block;
  background-color: black;
  height: 1em;
}
</style>