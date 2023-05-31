import { reactive } from "vue";

const store = reactive({
    
    apiBaseUrl: "http://127.0.0.1:8000/api",
    apiUrls: {
        games: "/games",
        relevant: "/relevant",
        top3: "/top3",
    }
})

export default store;