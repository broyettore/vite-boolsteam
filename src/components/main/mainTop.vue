<script>
import jumboSearchBar from './jumboSearchBar.vue';
import relevantGame from './relevantGame.vue';
import jumboCard from './jumboCard.vue';
export default {
    name: 'mainTop',
    components: {
        jumboSearchBar,
        relevantGame,
        jumboCard
    }
}
</script>

<template>
    <!-- Main Top -->
    <section class="container ms-container pb-5">
        <div class="text-center">
            <div class="pt-5 pb-3 ms_bg">
                <div>
                    <!-- Search bar -->
                    <div class="px-3">
                        <jumboSearchBar></jumboSearchBar>
                    </div>
                    <!-- Gioco in rilievo -->
                    <div class="px-3">
                        <h2 class="text-start text-light fw-bolder fs-1">GIOCHI</h2>
                        <relevantGame></relevantGame>
                    </div>
                </div>
            </div>
            <!-- Offerte speciali -->
            <div>
                <jumboCard></jumboCard>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.ms_bg {
    background-image: url(../../assets/images/cod.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 12%;
}

.ms-container {
    width: 60%;
}
</style>