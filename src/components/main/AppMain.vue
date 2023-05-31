<script>
import mainTop from './mainTop.vue';
import mainBottom from './mainBottom.vue';

export default {
  components: {
    mainTop,
    mainBottom
  }
}

</script>

<template>
    <mainTop />
    <mainBottom />
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables.scss' as *;

</style>