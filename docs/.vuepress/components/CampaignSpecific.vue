<template>
  <div class="campaign-specific-component">
    <div class="hint-container note">
      <div class="hint-container-content">
        <div>
          <CampaignLogo :campaign="campaign" :size="'small'" />
        </div>

        <p>
          This page is for the
          <strong>{{ campaignNames[campaign] }} Campaign.</strong>

          <span class="mobile-only">&nbsp;</span>
          <br class="desktop-only" />

          <RouteLink :to="other">Click here</RouteLink>
          for <strong>{{ campaignNames[otherCampaign] }}.</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CampaignKey, campaignNames, otherCampaigns } from '../utils/constants';
import CampaignLogo from './CampaignLogo.vue';

const props = defineProps<{
  campaign: CampaignKey,
  other: string
}>();

const otherCampaign = computed(() => otherCampaigns[props.campaign]);
</script>

<style lang="scss" scoped>
.hint-container-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-style: italic;
}
</style>