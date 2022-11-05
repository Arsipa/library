<template>
    <li class="slider__card">
        <div class="card">
            <img
                :src="imgPreUrl(card.img)"
                class="card__image"
                :alt="card.title"
            >
            <img src="public/static/card.png" alt="">
            <p class="card__price">{{ card.price }} руб.</p>
            <div class="card__book book">
                <p class="book__title" :title="card.title">
                    {{ card.title }}
                </p>
                <p class="book__author" :title="card.author">
                    {{ card.author }}
                </p>
            </div>
            <button class="card__button">В корзину</button>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        }
    },
    methods: {
        imgPreUrl: function (img) {
            return "static/" + img;
        },
    },
};
</script>

<style lang="scss">
$black: #241400;
$orange: #e16a00;
$white: #fff;
$background: #fffaf5;
.card {
    width: 185px;
    min-height: 370px;
    padding: 25px;
    background: $white;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    &__img {
        margin-bottom: 10px;
        width: 135px;
        height: 190px;
    }
    &__price {
        font-weight: bold;
        font-size: 18px;
        color: $black;
        margin-bottom: 18px;
    }
    &__button {
        font-weight: 900;
        font-size: 12px;
        padding: 10px 12px;
        background: $orange;
        color: $white;
        cursor: pointer;
    }
}

.book {
    margin-bottom: 18px;
    &__title {
        font-weight: bold;
        font-size: 12px;
        color: $black;
        margin-bottom: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    &__author {
        font-size: 12px;
        color: $black;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
}
</style>
