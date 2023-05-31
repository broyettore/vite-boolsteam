<script>
import axios from 'axios';
import AppMain from '../components/AppMain.vue';
export default {
    name: "portfolio",
    components: {
        AppMain
    },
    data() {
        return {
            currentPage: 1,
            showButton: true,
            projects: [],
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
        }
    },
    methods: {
        getProjects() {

            axios.get(this.apiBaseUrl + this.apiUrls.projects, {
                params: {
                    page: this.currentPage,
                }
            })
                .then((response) => {
                    console.log(response);

                    const results =  response.data.results.data ?? response.data.results;
                    const moreProjects = response.data.results.next_page_url ?? null;

                    this.projects = [...this.projects, ...results];

                    if(!moreProjects) {
                        this.showButton = false;
                    }

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        nextPage() {
            this.currentPage += 1;
            this.getProjects();
        }
    },
    created() {
        this.getProjects();
    }
}
</script>


<template>
      <section>
        <div class="container">
        <h1 class="mt-5 mb-3 fs-3 text-center">My portfolio</h1>
      </div>
        <main>
            <div class="container">
                <div class="row row-cols-4">
                    <div v-for="project in projects" class="col">
                        <AppMain :project="project" />
                    </div>
                </div>
                <div class="text-center my-5"  v-if="showButton" >
                    <button class="btn btn-primary" @click.prevent="nextPage">
                        Show more...
                    </button>
                </div>
            </div>
        </main>
    </section>
</template>


<style scoped></style>