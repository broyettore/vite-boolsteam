<script>
export default {
    name: 'relevantGame'
}
</script>

<template>
    <div class="d-flex mt-4 ms_bg_blur">
        <div class="position-relative">
            <img class="m-2" src="../../assets/images/cod.jpg">
            <div class="position-absolute top-0 end-0">
                <font-awesome-icon class="fs-3 ms_star p-1 rounded" :icon="['fas', 'star']" />
            </div>
            <div class="position-absolute bottom-0 end-0 d-flex">
                <span class="ms_discount fs-3 fw-semibold">-67%</span>
                <span class="ms_price d-flex flex-column">
                    <span class="ms_text_old_price">59.99</span>
                    <span class="ms_text_price">19.00</span>
                </span>
            </div>
        </div>
        <div class="m-3 text-start text-light">
            <h3 class="mb-2 fw-bolder">Call of duty: black ops III</h3>
            <span>Data di rilascio: 6 nov 2015</span>
            <ul class="d-flex gap-1 flex-wrap list-unstyled mt-3">
                <li>Multigiocatore</li>
                <li>Sparatutto in prima persona</li>
                <li>Zombi</li>
                <li>Sparatutto</li>
                <li>Azione</li>
                <li>Prima persona</li>
                <li>Sparatutto in prima persona</li>
                <li>Zombi</li>
                <li>Sparatutto</li>
                <li>Azione</li>
                <li>Prima persona</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables.scss' as *;

div.ms_bg_blur {
    background-color: rgba(0, 0, 0, 50%);
    padding: 30px;
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.98);

    .ms_star{
        background-color: #1c3879;
    }

}

.ms_discount {
    background-color: $discount-bg;
    color: $discount-text;
    padding: 0 10px;
}

.ms_price {
    background-color: $bg-main-bottom;
    padding: 0 10px;
}

.ms_text_old_price {
    font-size: 14px;
    color: $text-alt;
}

.ms_text_price {
    font-size: 18px;
    color: $discount-text;
}

img {
    height: 300px;
}

li {
    background-color: rgba(240, 248, 255, 30%);
    border-radius: 5px;
    padding: 1px 8px;
}
</style>


