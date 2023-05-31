<script>
export default {
    name: 'jumboSearchBar'
}
</script>

<template>
    <div class="ms_searchBar mb-5">
        <nav class="d-flex justify-content-between">
            <ul class="d-flex gap-5 m-2 fw-bolder">
                <li><a class="text-decoration-none" href="#">Il tuo Negozio</a></li>
                <li><a class="text-decoration-none" href="#">Novità e tendenze</a></li>
                <li><a class="text-decoration-none" href="#">Categorie</a></li>
                <li><a class="text-decoration-none" href="#">Negozio dei punti</a></li>
                <li><a class="text-decoration-none" href="#">Notizie</a></li>
                <li><a class="text-decoration-none" href="#">Laboratori</a></li>
            </ul>
            <div class="d-flex align-items-center">
                <div>
                    <input type="text" placeholder="cerca">
                </div>
                <font-awesome-icon class="ms_glass p-2" icon="fa-solid fa-magnifying-glass" />
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables.scss' as *;

.ms_searchBar {
    background-color: $jumbo-nav;

    ul {
        li {
            a {
                color: $text-color;
            }
        }
    }
}

.ms_glass {
    background-color: #8aa9d1;
    color: $jumbo-nav;
}

input {
    background-color: $bg-main-bottom;
    border: 0;
    border-radius: 2px;
    padding: 3px 9px;
}

nav {
    box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.98);
}
</style>