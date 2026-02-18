<template>
  <VTooltip class="info-icon-component">
    <span class="info-icon-button">ⓘ</span>

    <template #popper>
      <div class="info-icon-tooltip-content">
        <slot />
      </div>
    </template>
  </VTooltip>
</template>

<style lang="scss" scoped>
.info-icon-component {
  display: inline;
  cursor: default;
}

.info-icon {
  opacity: 0.6;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
}

.info-icon-tooltip-content {
  max-width: 400px;
}
</style>