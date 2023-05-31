<script>
    export default {
        name: 'AppHeader'
    }
</script>

<template>
    <section>
        <div class="container w-50 d-flex justify-content-between">
            <div class="d-flex p-5">
                <div class="d-flex gap-2">
                    <div id="logo"><font-awesome-icon icon="fa-brands fa-steam" class="fs-5" id="steam_icon"/></div>
                    <div id="logo_name" class="text-uppercase me-3">Steam</div>
                </div>
                <div>
                    <ul class="d-flex text-uppercase gap-3">
                        <li>Negozio</li>
                        <li>Comunità</li>
                        <li>Informazioni</li>
                        <li>Assistenza</li>
                    </ul>
                </div>
            </div>
            
            <div id="header_link" class="d-flex gap-2 me-3">
                <div>
                    <span class="bg-success p-2"><font-awesome-icon icon="fa-solid fa-download" /> Installa Steam</span>
                </div>
                <div><span>Accedi</span></div>
                <div><span>| Lingua <font-awesome-icon icon="fa-solid fa-caret-down"/></span></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section{
        background-color: #171a21;
        color: #acb2b8;

        #steam_icon{
            height: 1.875rem;
            width: 1.875rem;
        }
        #logo{
            cursor: pointer;
        }
        #logo_name{
            font-weight: 600;
        }
        li, #header_link {
            cursor:pointer
        }
    }
</style>