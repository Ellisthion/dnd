<template>
  <div class="campaign-logo-component" :campaign-logo-size="size">
    <img v-if="campaign === 'open-skies'" :src="`../images/Logo Open Skies.webp`" alt="Open Skies Campaign" />
    <img v-else-if="campaign === 'blood-and-ash'" :src="`../images/Logo Blood and Ash.webp`" alt="Blood & Ash Campaign" />
    <span v-else>Unknown campaign {{ campaign }}</span>
  </div>
</template>

<script setup lang="ts">
import { CampaignKey } from '../utils/constants';

defineProps<{
  campaign: CampaignKey,
  size: 'small' | 'large'
}>();
</script>

<style lang="scss" scoped>
.campaign-logo-component {

  &[campaign-logo-size='small'] {
    width: 4rem;
  }

  &[campaign-logo-size='large'] {
    width: 8rem;
    flex: 0 0 auto;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;

    pointer-events: none;
  }
}
</style>