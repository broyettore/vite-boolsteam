<script>
import axios from 'axios';
import store from '../store';
export default {
    name: "ProjectPage",
    data() {
        return {
            store,
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: null,
            isError: false,
            errorMessage: null,
            formInfo: {
                name: "",
                email: "",
                content: ""
            }
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.result;
                })
                .catch((error) => {
                    console.log(error);

                    if (error.response.status === 404) {
                        console.log('redirect')
                        this.$router.push({ name: 'page-not-found' });
                    }

                    this.isError = true;
                    this.errorMessage = error.message;
                })
        },

        // change date format
        leadDate(date) {
            const leaddate = new Date(date);
            return leaddate.toLocaleString();
        },

        // send form data to backend
        sendLead() {
            console.log(this.formInfo.name);
            console.log(this.formInfo.email);
            console.log(this.formInfo.content);
            console.log(this.project.id);

            const data = {
                name: this.formInfo.name,
                email: this.formInfo.email,
                content: this.formInfo.content,
                project_id: this.project.id
            }

            axios.post(`${store.apiBaseUrl}/leads`, data)
            .then((response) => {
                console.log(response);

                if(response.status === 201) {
                    this.project.leads.push(response.data);
                    this.formInfo.name = "";
                    this.formInfo.email = "";
                    this.formInfo.content = "";
                }
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },
    created() {
        this.getProject();
    }
}
</script>


<template>
    <section v-if="project">
        <div class="container">
            <h1 class="mt-5 mb-3">Name: {{ project.name }}</h1>
            <p>Description: {{ project.description }}</p>
            <p v-if="project.type">Type: {{ project.type.name }}</p>
            <div v-if="project.technologies.length > 0">
                <hr>
                <h2 class="fs-4 mb-3">Technologies</h2>
                <ul class="ps-0 d-flex">
                    <li v-for="technology in project.technologies" class="mx-1">
                        <span class="badge bg-success">{{ technology.name }}</span>
                    </li>
                </ul>
            </div>
            <hr>
            <h3>Leads</h3>
            <ul class="ps-0" v-if="project.leads.length">
                <li v-for="lead in project.leads" class="mb-3">
                    <h4>{{ lead.name }}</h4>
                    <h5>{{ lead.email }}</h5>
                    <p>{{ lead.content }}</p>
                    <small>{{ leadDate(lead.created_at) }}</small>
                </li>
                <hr>
            </ul>
            <div class="my-2">
                <form @submit.prevent="sendLead">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" v-model="formInfo.name">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" v-model="formInfo.email">
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">Message</label>
                            <textarea class="form-control" id="content" rows="3" v-model="formInfo.content"></textarea>
                        </div>
                        <button class="btn btn-primary">Submit</button>
                    </form>
            </div>
        </div>
    </section>
    <section v-if="isError">
        <div class="container">
            <p>{{ errorMessage }}</p>
        </div>
    </section>
</template>


<style scoped></style>