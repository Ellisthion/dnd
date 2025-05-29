<template>
  <div class="campaign-intro-component">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/breakpoints';

.campaign-intro-component {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;

  @include breakpoints.mobile {
    flex-direction: column;
    margin-top: 1rem;
    gap: 0;
  }
}
</style>