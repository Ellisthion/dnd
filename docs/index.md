---
actions:
  - icon: Logo Open Skies Placeholder.png
    link: ./campaign-open-skies/introduction.md

  - icon: Logo Blood and Ash Placeholder.png
    link: ./campaign-blood-ash/introduction.md
---

<h3 :style="{ 'text-align': 'center' }">
  Select Your Campaign
</h3>

<div class="campaign-nav-links">
  <RouteLink
    v-for="action in $page.frontmatter.actions"
    :to="action.link"
    class="button"
  >
    <div class="button-image">
      <img :src="$withBase(`/images/${action.icon}`)" alt="" />
    </div>
  </RouteLink>
</div>

<style lang="scss" scoped>
.campaign-nav-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
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
}
</style>