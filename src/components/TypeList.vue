<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'TypeList',
    data() {
        return {
            store,
            currentType: '',
            types: []
        }
    },
    methods: {
        getTypes() {
            axios.get(`${this.store.apiBaseUrl}/types`)
                .then((response) => {
                    console.log(response);
                    this.types = response.data.results;

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        changePage(){
            this.$router.push({name: 'type', params:{slug: this.currentType}});
        }
    },
    created(){
        this.getTypes();
    }
}
</script>

<template>
    <select class="form-select ms-select" v-if="types.length > 0" @change="changePage" v-model="currentType">

        <option :value="type.slug" v-for="type in types" selected> {{ type.name }} </option>
        
    </select>
</template>

<style lang="scss" scoped>

.ms-select {
    background-color: #022d30;
    color: #a2ce4c;
    border-color: #a2ce4c;
    width: 150px;

    &:focus {
        outline: none;
        box-shadow: none;
    }
}
</style>