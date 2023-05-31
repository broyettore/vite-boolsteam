<script>

export default {
    name: "main",
    data() {
        return {
            imageUrl: "http://127.0.0.1:8000/storage/",
        }
    },
    props: {
        project: Object,
    },

}
</script>

<template>
    <main>
        <div class="container py-4">
            <div>
                <div class="card ms-card" style="width: 18rem;">
                    <img v-if="project.image" :src="project.image_url" class="card-img-top" :alt="project.title">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h4 class="card-title mb-2 text-bold">Project Name: {{ project.name }}</h4>
                        <h5 class="card-subtitle mb-3 text-muted">Description: {{ project.description.substring(0, 150) }}</h5>

                        <router-link :to="{ name: 'project', params: { slug: project.slug } }" class="btn btn-primary">
                            More Info...
                        </router-link>
                        
                    </div>
            </div>
        </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;

img {
    height: 200px;
}
</style>