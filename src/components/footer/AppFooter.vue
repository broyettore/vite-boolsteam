<script>
    export default {
        name: 'AppFooter'
    }
</script>

<template>
    <section>
        <div class="container w-50 pt-5 pb-2">
            <div class="border-top border-bottom">
                <div class="d-flex justify-content-between mt-3">
                    <div id="valve" class="mb-1 d-flex text-uppercase px-2 align-items-center">
                        <h3 class="fw-bold">Valv</h3>
                        <h4 class="fw-bold ">e</h4>
                    </div>
                    <div class="d-flex">
                        <font-awesome-icon icon="fa-brands fa-steam-symbol" id="footer_steam_logo" />
                        <h6 class="text-uppercase"> Steam</h6>
                    </div>
                </div>
                <div class="d-flex">
                    <p id="footer_p" class="px-3">© 2023 Valve Corporation. Tutti i diritti riservati. Tutti i marchi appartengono ai rispettivi proprietari negli Sati Uniti e negli altri paesi. IVA inclusa nel prezzo (ove applicabile). <a href="#">Informativa sulla privacy | </a><a href="#">Informazioni legali | </a><a href="#">Contratto di sottoscrizione a Steam | </a><a href="#">Rimborsi | </a><a href="#">Cookie</a></p>
                </div>
            </div>
        <div>
            <ul class="d-flex gap-2 p-3">
                <li>Informazioni su Valve |</li>
                <li>Impieghi |</li>
                <li>Steamworks |</li>
                <li>Distribuzione su Steam |</li>
                <li>Assistenza |</li>
                <li>Buoni regalo |</li>
                <li><font-awesome-icon icon="fa-brands fa-square-facebook" class="text-primary"/> Steam |</li>
                <li><font-awesome-icon icon="fa-brands fa-square-tumblr" class="text-success" /> @steam</li>
            </ul>
        </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables.scss' as *;

    section{
        background-color: $bg-footer;
        color: $text-alt;
        a{
            text-decoration: none;
            color: $text-color;
        }
        #valve{
            background-color: #969caa;
            color: #000;
        }
        #footer_p{
            font-size: .8125rem;
            a{
                font-weight: 700;
            }
        }
        li{
            cursor: pointer;
        }
        #footer_steam_logo{
            font-size: 2.5rem;
        }
        #footer_steam_logo, #footer_p{
            color: #969caa;
        }
    }
</style>