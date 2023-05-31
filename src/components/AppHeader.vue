<script>
import TypeList from './TypeList.vue';
import Technology from './Technology.vue';

export default {
    name: "header",

    components: {
        TypeList,
        Technology
    }
}
</script>

<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center py-3">
            <div class="logo fs-3">
                Portfolio
            </div>
            <nav>
                <ul class="d-flex align-items-center">
                        <li class="p-2 m-2">
                            <router-link :to="{ name: 'home' }" class="nav-link">
                                Home
                            </router-link>
                        </li>
                        <li class="p-2 m-2">
                            <router-link :to="{ name: 'about' }" class="nav-link">
                                About
                            </router-link>
                        </li>
                        <li class="p-2 m-2">
                                <TypeList />
                            </li>
                            <li class="p-2 m-2">
                                <Technology />
                        </li>
                        <li class="p-2 m-2 pe-0 me-0">
                            <router-link :to="{ name: 'portfolio' }" class="nav-link">
                                Projects
                            </router-link>
                        </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;

</style>