<script>
import store from '../../store';
import axios from 'axios';

export default {
    name: "cardBottom",
    data() {
    return {
      store,
      games: "",
    }
  },
  methods: {
    getData() {

      axios.get(this.store.apiBaseUrl + this.store.apiUrls.games)
      .then((response) => {
        console.log(response.data.results);
        this.games = response.data.results;
      })
      .catch((error) => {
        console.log(error)
      })
    },
    
    gameDate(date) {

            const releaseDate = new Date(date);
            const yyyy = releaseDate.getFullYear();
            let mm = releaseDate.getMonth() + 1; // starts from 0 , so +1 necessary
            let dd = releaseDate.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            switch (mm) {

                case "01":
                    return dd + " " + "JAN" + " " + yyyy;
                    break;
                case "02":
                    return dd + " " + "FEB" + " " + yyyy;
                    break;
                case "03":
                    return dd + " " + "MAR" + " " + yyyy;
                    break;
                case "04":
                    return dd + " " + "APR" + " " + yyyy;
                    break;
                case "05":
                    return dd + " " + "MAY" + " " + yyyy;
                    break;
                case "06":
                    return dd + " " + "JUN" + " " + yyyy;
                    break;
                case "07":
                    return dd + " " + "JUL" + " " + yyyy;
                    break;
                case "08":
                    return dd + " " + "AUG" + " " + yyyy;
                    break;
                case "09":
                    return dd + " " + "SET" + " " + yyyy;
                    break;
                case 10:
                    return dd + " " + "OCT" + " " + yyyy;
                    break;
                case 11:
                    return dd + " " + "NOV" + " " + yyyy;
                    break;
                case 12:
                    return dd + " " + "DEC" + " " + yyyy;
                    break;
        
            };

            const formattedDate = dd + " " + mm + " " + yyyy;

            return formattedDate;
        },
  },

  created() {
    this.getData()
  }
}
</script>

<template>
    <div class="games-list">
        <div class="game d-flex" v-for="game in games">
            <div class="left">
                <img :src="store.storage + game.image" alt="game-controller">
            </div>
            <div class="right d-flex">
                <div class="info ps-4 pt-2">
                    <h4 class="mb-2">{{ game.title }}</h4>
                    <div class="tags mb-2">
                        <span class="badge bg-secondary ms-badge me-1" v-for="genre in game.genres">{{ genre.title }}</span>
                    </div>
                    <div class="extra d-flex">
                        <span class="me-3">{{ gameDate(game.release) }}</span>
                        <div class="platform">
                            <font-awesome-icon icon="fa-brands fa-windows"  class="fs-5 me-2"/>
                            <font-awesome-icon icon="fa-brands fa-apple" class="fs-5 me-2" />
                            <font-awesome-icon icon="fa-brands fa-steam" class="fs-5 me-2"/>
                        </div>
                    </div>
                </div>
                <div class="price d-flex justify-content-end p-3 align-items-end">
                    <div v-if="game.price > 0">
                        <div class="discount d-flex">
                            <span class="ms-badge  d-flex justify-content-center align-items-center fs-4">-{{ game.discount }}%</span>
                            <span class="ms-badge text-end">
                                <div><small class="cross">{{ game.price }}</small></div>
                                <div>{{ store.showDiscount(game.price, game.discount) }}€</div>
                            </span>
                        </div>
                    </div>
                    <div v-else="game.price === 0">
                        <span class="ms-badge  d-flex justify-content-center align-items-center fs-5 py-3">Free To Play</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables.scss' as *;

.games-list {

    .game {
        box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.82);
        height: 150px;
        margin-bottom: 2px;
        .left {
            width: 30%;
            height: 100%;
            background-color: gray;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: 0% 10%;
            }
        }

        .right {
            width: 70%;
            height: 100%;
            background-color: darken($color: $bg-main-bottom, $amount: 2%);

            .info {
                width: 80%;

                .ms-badge  {
                    background-color: $bg-main-bottom;
                    color: lighten($color: $text-alt, $amount: 10%);
                    border-radius: 0;
                }
            }
            .price {
                width: 20%;

                .ms-badge {
                    background-color: darken($color: $bg-main-bottom, $amount: 8%);
                    font-weight: bold;
                    padding: 6px 14px;
                }

                .discount {

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

                    .ms-badge {
                        padding: 2px 10px;
                        
                    }
                    .ms-badge:first-child {
                        background-color: $discount-bg;
                        color: $discount-text;
                    }
                    .ms-badge:last-child {
                                            
                        &>div:nth-of-type(2) {
                            color: $discount-text;
                        }
                    }
                }

            }

        }
    }
}

</style>