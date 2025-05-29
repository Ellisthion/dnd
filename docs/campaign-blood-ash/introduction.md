---
title: Blood & Ash Campaign

actions:
  - text: Your Character
    icon: Character Blood and Ash.jpg
    link: ./your-character

  - text: Character Creation
    icon: Character Creation Blood and Ash.jpg
    link: ./character-creation

  - text: The World
    icon: World.jpg
    link: ../world/world-overview

  - text: Rules Changes
    icon: Rules.jpg
    link: ../rules/rules-changes
---

<CampaignIntro>
  <CampaignLogo :campaign="'blood-and-ash'" :size="'large'" />

  Blood flows through the streets of Ember. A violent revolution has upended the city, and sent shockwaves through neighbouring kingdoms. Valengard and Bronston Forge struggle to stabilise a fragile peace. Will you rise from the ashes, or stoke the flames?
</CampaignIntro>

<CampaignLinks :actions="$page.frontmatter.actions" />