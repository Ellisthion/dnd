# World Map

::: info
This map is not exhaustive. All the major factions are roughly correct, but many smaller towns and kingdoms exist. The terrain is approximately correct but the edges of the map aren't fully fleshed out and shouldn't be treated as accurate.
:::

<div class="image-box">
   <div class="image-box-inner">
      <img :src="$withBase('/images/World v1.2 Optimised Cropped.webp')" alt="World Map" />
   </div>
</div>

<style lang="scss" scoped>
$color-border: #b78846;
$color-fill: #dbc3a2;
$corner-size: 14px;
$outer-border: 5px;
$inner-border: 2px;

.image-box,
.image-box *,
.image-box::before,
.image-box::after,
.image-box *::before,
.image-box *::after {
   box-sizing: border-box;
}

.image-box {
   position: relative;
   background-color: $color-fill;
   width: 100%;
   padding: $outer-border;
   border: $inner-border solid $color-border;
  
   &::before,
   &::after {
      content: '•';
      position: absolute;

      width: $corner-size;
      height: $corner-size;
      font-size: $corner-size;
      color: $color-border;
      border: $inner-border solid $color-border;
      line-height: calc($corner-size - $inner-border);
      top: $outer-border;
      text-align: center;

      pointer-events: none;
   }

  &::before {
      left: $outer-border;
  }

  &::after {
      right: $outer-border;
  }

  .image-box-inner {
      border: $inner-border solid $color-border;

      &::before,
      &::after {
         content: '•';
         position: absolute;
         width: $corner-size;
         height: $corner-size;
         font-size: $corner-size;
         color: $color-border;
         border: $inner-border solid $color-border;
         line-height: calc($corner-size - $inner-border);
         bottom: $outer-border;
         text-align: center;
         pointer-events: none;
      }

      &::before {
         left: $outer-border;
      }

      &::after {
         right: $outer-border;
      }
   }
}
</style>
