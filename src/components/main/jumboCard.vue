<script>
import store from '../../store';
import axios from 'axios';

export default {
    name: "jumboCard",
    data() {
    return {
      store,
      games: "",
    }
  },
  methods: {
    getData() {

      axios.get(this.store.apiBaseUrl + this.store.apiUrls.top3)
      .then((response) => {
        console.log(response.data.results);
        this.games = response.data.results;
      })
      .catch((error) => {
        console.log(error)
      })
    },
  },

  created() {
    this.getData()
  }
}
</script>

<template>
    <div>
        <!-- Cards -->
        <div class="text-start text-light mt-5 mb-1 fs-5">OFFERTE SPECIALI</div>
        <div class="d-flex  gap-3">
            <div class="d-flex flex-column" v-for="game in games">
                <img :src="this.store.storage + game.image" :alt="game.title">
                <div class="text-start d-flex">
                    <span class="ms_discount fs-3 fw-semibold">-{{ game.discount }}%</span>
                    <span class="ms_price d-flex flex-column">
                        <span class="ms_text_old_price cross">{{ game.price }}€</span>
                        <span class="ms_text_price">{{ store.showDiscount(game.price, game.discount) }}€</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables.scss' as *;

img {
    width: 380px;
    height: 400px;
}
.ms_discount{
    background-color: $discount-bg;
    color: $discount-text;
    padding: 0 10px;
}
.ms_price{
    background-color: $bg-main-bottom;
    padding: 0 10px;
}
.ms_text_old_price{
    font-size: 13px;
    color: $text-alt;
    text-align: center;
}
.ms_text_price{
    font-size: 17px;
    color: $discount-text;
}

.cross {
        position: relative;
        display: inline-block;
    }
    .cross::before {
        content: '';
        width: 100%;
        position: absolute;
        right: 0;
        top: 50%;
        border-bottom: 2px solid $bg-main-bottom;
        -webkit-transform: skewY(-10deg);
        transform: skewY(-10deg);
    }
</style>