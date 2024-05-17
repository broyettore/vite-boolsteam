import { reactive } from "vue";

const store = reactive({
    
    // base link
    apiBaseUrl: "http://127.0.0.1:8000/api",

    // link routes
    apiUrls: {
        games: "/games",
        relevant: "/relevant",
        top3: "/top3",
    },

    // storage for images links
    storage: "http://127.0.0.1:8000/storage/",

    // apply discount to a price
    showDiscount(price, discount) {
        const newPrice = (price * discount) / 100;
        const finalPrice = price - newPrice;
        return finalPrice.toFixed(2);
    },
})

export default store;