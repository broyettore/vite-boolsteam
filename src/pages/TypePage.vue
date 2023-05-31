<script>
import axios from 'axios';
import store from '../store';
import AppMain from '../components/AppMain.vue';
export default {
    name: "TypePage",
    components: {
        AppMain
    },
    data() {
        return {
            store,
            type: null
        }
    },
    methods: {
        getType() {
            axios.get(`${this.store.apiBaseUrl}/types/${this.$route.params.slug}`)
                .then((response) => {
                    console.log(response);
                    this.type = response.data.result;
                })
        }
    },
    created() {
        this.getType();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log({toParams})
                console.log({previousParams})
                this.getType();
            }
        )
    }
}
</script>


<template>
    <section v-if="type">
        <div class="container">
            <h1 class="mt-5 mb-3 fs-3">Type: {{ type.name }}</h1>

            <div class="row row-cols-4 my-4 gy-4">
                <div class="col" v-for="project in type.projects">
                    <AppMain :project="project" />
                </div>
            </div>


        </div>
    </section>
</template>


<style scoped></style>