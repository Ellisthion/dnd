---
title: Open Skies Campaign

actions:
  - text: Your Character
    icon: Character Open Skies.jpg
    link: ./your-character

  - text: Character Creation
    icon: Character Creation Open Skies.jpg
    link: ./character-creation

  - text: The World
    icon: World.jpg
    link: ../world/world-overview

  - text: Rules Changes
    icon: Rules.jpg
    link: ../rules/rules-changes
---

<CampaignIntro>
  <CampaignLogo :campaign="'open-skies'" :size="'large'" />

  It is the calm before the storm. Rochekell and Ravena are on the brink of war, while Valengard and Bronston Forge watch on, struggling with their own fragile peace. The skies shatter and the planes shake. Will you delve into ancient secrets, or soar into the open skies?
</CampaignIntro>

<CampaignLinks :actions="$page.frontmatter.actions" />