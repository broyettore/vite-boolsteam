<script>
import mainTop from './mainTop.vue';
import mainBottom from './mainBottom.vue';
export default {
    name: 'AppMain',
    components: {
        mainTop,
        mainBottom
    },
}
</script>

<template>
    <section>
        <mainTop></mainTop>
        <mainBottom />
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables.scss' as *;

</style>