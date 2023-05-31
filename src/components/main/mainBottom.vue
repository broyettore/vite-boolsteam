<script>
import cardBottom from './cardBottom.vue';

export default {
  components: {
    cardBottom,
  }
}
</script>

<template>
  <section class="main-bottom">
    <div class="container ms-ctn py-3">
        <h3 class="mb-4 fs-4">I GIOCHI</h3>
        <cardBottom />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables.scss' as *;

.main-bottom {
    background-color: $bg-main-bottom;
    color: $text-alt;

    .ms-ctn {
        
        h3 {
            color: $text-color;
        }
    }
}

</style>