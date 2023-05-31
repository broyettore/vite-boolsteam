<script>
import axios from 'axios';
import store from '../store';
import AppMain from '../components/AppMain.vue';
export default {
    name: "TechnologyPage",
    components: {
        AppMain
    },
    data() {
        return {
            store,
            technology: null
        }
    },
    methods: {
        getTechnology() {
            axios.get(`${this.store.apiBaseUrl}/technologies/${this.$route.params.slug}`)
                .then((response) => {
                    console.log(response);
                    this.technology = response.data.result;
                })
        }
    },
    created() {
        this.getTechnology();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log({toParams})
                console.log({previousParams})
                this.getTechnology();
            }
        )
    }
}
</script>


<template>
    <section v-if="technology">
        <div class="container">
            <h1 class="mt-5 mb-3 fs-3">technology: {{ technology.name }}</h1>

            <div class="row row-cols-4 my-4 gy-4">
                <div class="col" v-for="project in technology.projects">
                    <AppMain :project="project" />
                </div>
            </div>


        </div>
    </section>
</template>


<style scoped></style>