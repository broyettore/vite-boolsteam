<script>
export default {
    name: 'jumboCard'
}
</script>

<template>
    <div>
        <!-- Cards -->
        <div class="text-start text-light mt-5 mb-1 fs-5">OFFERTE SPECIALI</div>
        <div class="d-flex justify-content-between">
            <div class="d-flex flex-column">
                <img src="../../assets/images/cod.jpg" alt="">
                <div class="text-start d-flex">
                    <span class="ms_discount fs-3 fw-semibold">-67%</span>
                    <span class="ms_price d-flex flex-column">
                        <span class="ms_text_old_price">59.99</span>
                        <span class="ms_text_price">19.00</span>
                    </span>
                </div>
            </div>
            <div class="d-flex flex-column">
                <img src="../../assets/images/cod.jpg" alt="">
                <div class="text-start d-flex">
                    <span class="ms_discount fs-3 fw-semibold">-67%</span>
                    <span class="ms_price d-flex flex-column">
                        <span class="ms_text_old_price">59.99</span>
                        <span class="ms_text_price">19.00</span>
                    </span>
                </div>
            </div>
            <div class="d-flex flex-column">
                <img src="../../assets/images/cod.jpg" alt="">
                <div class="text-start d-flex">
                    <span class="ms_discount fs-3 fw-semibold">-67%</span>
                    <span class="ms_price d-flex flex-column">
                        <span class="ms_text_old_price">59.99</span>
                        <span class="ms_text_price">19.00</span>
                    </span>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables.scss' as *;

img {
    width: 400px;
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
</style>