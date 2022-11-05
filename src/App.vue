<template>
    <div class="wrapper">
        <Header />
        <main class="main">
            <div class="container">
                <div class="main__content">
                    <section class="jumbotron">
                        <div class="jumbotron__info">
                            <h1 class="jumbotron__title">Книги от А до Я</h1>
                            <p class="jumbotron__subtitle">
                                В нашем магазине можно найти книгу на любой
                                вкус. Большой ассортимент. Приятные цены.
                                Интересные сюжеты.
                            </p>
                            <a href="#catalog" class="jumbotron__button"
                                >Перейти в каталог</a
                            >
                        </div>
                        <img
                            src="@/assets/img/jumbotron.png"
                            alt="Новые книги"
                            class="jumbotron__img"
                        />
                    </section>
                    <section class="hot">
                        <div class="hot__header">
                            <h2 class="hot__title">Горячие поступления</h2>
                            <ul class="hot__filters">
                                <li class="hot__filter">
                                    <button class="hot__filter-button">
                                        Фантастика
                                    </button>
                                </li>
                                <li class="hot__filter">
                                    <button class="hot__filter-button">
                                        Саморазвитие
                                    </button>
                                </li>
                                <li class="hot__filter">
                                    <button class="hot__filter-button">
                                        Детективы
                                    </button>
                                </li>
                                <li class="hot__filter">
                                    <button class="hot__filter-button">
                                        Детские
                                    </button>
                                </li>
                                <li class="hot__filter">
                                    <button class="hot__filter-button">
                                        Аудиокниги
                                    </button>
                                </li>
                                <li class="hot__filter">
                                    <button class="hot__filter-button">
                                        Другие
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="slider__wrapper">
                            <div class="hot__slider slider">
                                <ul class="slider__track hot__slider-track">
                                    <Card
                                        v-for="card in hot"
                                        :key="card.title"
                                        :card="card"
                                    />
                                </ul>
                                <div
                                    class="slider__arrows"
                                    :class="
                                        this.hot.length < 6 ? 'hideSlider' : ''
                                    "
                                >
                                    <button
                                        class="slider__arrow-prev"
                                        @click="sliderPrev()"
                                        :class="
                                            this.activeDot == 0
                                                ? 'hideArrow'
                                                : ''
                                        "
                                    >
                                        <img
                                            src="@/assets/img/slider-arrow.svg"
                                            alt="Влево"
                                        />
                                    </button>
                                    <button
                                        class="slider__arrow-next"
                                        @click="sliderNext()"
                                        :class="
                                            this.activeDot ==
                                            this.hot.length - 5
                                                ? 'hideArrow'
                                                : ''
                                        "
                                    >
                                        <img
                                            src="@/assets/img/slider-arrow.svg"
                                            alt="Вправо"
                                        />
                                    </button>
                                </div>
                                <div
                                    class="slider__dots"
                                    :class="
                                        this.hot.length < 6 ? 'hideSlider' : ''
                                    "
                                ></div>
                            </div>
                        </div>
                    </section>
                    <section class="catalog" id="catalog">
                        <h2 class="catalog__title center-title">Каталог</h2>
                        <ul class="catalog__list">
                            <li class="catalog__item">
                                <a href="#" class="catalog__link">Книги</a>
                            </li>
                            <li class="catalog__item">
                                <a href="#" class="catalog__link"
                                    >Электронные книги</a
                                >
                            </li>
                            <li class="catalog__item">
                                <a href="#" class="catalog__link">Аудиокниги</a>
                            </li>
                            <li class="catalog__item">
                                <a href="#" class="catalog__link"
                                    >Игрушки, творчество</a
                                >
                            </li>
                            <li class="catalog__item">
                                <a href="#" class="catalog__link"
                                    >Книжные аксессуары</a
                                >
                            </li>
                            <li class="catalog__item">
                                <a href="#" class="catalog__link">Блокноты</a>
                            </li>
                            <li class="catalog__item">
                                <a href="#" class="catalog__link"
                                    >Настольные игры</a
                                >
                            </li>
                            <li class="catalog__item">
                                <a href="#" class="catalog__link">Подарки</a>
                            </li>
                            <li class="catalog__item">
                                <a href="#" class="catalog__link">Акции</a>
                            </li>
                        </ul>
                    </section>
                    <section class="about">
                        <h2 class="center-title">О магазине</h2>
                        <ul class="about__list">
                            <li class="about__item">
                                <span class="about__num">35</span>
                                <span class="about__text"
                                    >Филиалов по всей стране</span
                                >
                            </li>
                            <li class="about__item">
                                <span class="about__num">898</span>
                                <span class="about__text"
                                    >Товаров в каталоге</span
                                >
                            </li>
                            <li class="about__item">
                                <span class="about__num">8659</span>
                                <span class="about__text">Покупателей</span>
                            </li>
                            <li class="about__item">
                                <span class="about__num">72</span>
                                <span class="about__text"
                                    >Часоа доставка по городам</span
                                >
                            </li>
                        </ul>
                    </section>
                    <section class="delivery">
                        <h2 class="center-title">Доставка</h2>
                        <p class="delivery__text">
                            Работаем без праздников и выходных! Жители Киева
                            могут получить заказ уже в день его оформления.
                            Клиенты из других городов Украины могут получить
                            заказ в течение 1-5 дней в зависимости от
                            местонахождения населенного пункта и выбранного
                            способа доставки. Заказы на сумму свыше 1000 грн
                            доставляются бесплатно*. Доступные способы, точные
                            сроки и стоимость доставки Вы можете увидеть во
                            время оформления заказа в корзине заказа, после
                            выбора города доставки.
                        </p>
                        <a href="" class="delivery__more">Подробнее</a>
                    </section>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "App",
    components: {
        Header,
        Card,
        Footer,
    },
    data() {
        return {
            hot: [
                {
                    img: "card.png",
                    price: 19000,
                    title: "Кальницкая топ",
                    author: "Пастушков",
                },
                {
                    img: "card2.png",
                    price: 225,
                    title: "Порядок в Хаосе",
                    author: "Константин Коптелов",
                },
                {
                    img: "card3.png",
                    price: 86,
                    title: "Смарагдова книга",
                    author: "Константин Гир",
                },
                
                {
                    img: "card4.png",
                    price: 214,
                    title: "Зося з вулиці Котячої",
                    author: "Агнешка Тишка",
                },
                {
                    img: "card2.png",
                    price: 225,
                    title: "Порядок в Хаосе",
                    author: "Константин Коптелов",
                },
                {
                    img: "card3.png",
                    price: 86,
                    title: "Смарагдова книга",
                    author: "Константин Гир",
                },
                
                {
                    img: "card4.png",
                    price: 214,
                    title: "Зося з вулиці Котячої",
                    author: "Агнешка Тишка",
                },
            ],
            position: 0,
            activeDot: 0,
        };
    },
    methods: {
        sliderNext() {
            const hot_slider_dots = document.querySelectorAll(".slider__dot");
            const hot_track = document.querySelectorAll(
                ".hot__slider .hot__slider-track"
            )[0];

            hot_slider_dots[this.activeDot].classList.remove(
                "slider__dot_active"
            );

            hot_slider_dots[this.activeDot + 1].classList.add(
                "slider__dot_active"
            );

            this.activeDot++;
            this.position -= 245;

            hot_track.style.transform = "translateX(" + this.position + "px)";

            this.checkBtn();
        },
        sliderPrev() {
            const hot_slider_dots = document.querySelectorAll(".slider__dot");
            const hot_track = document.querySelectorAll(
                ".hot__slider .hot__slider-track"
            )[0];

            hot_slider_dots[this.activeDot].classList.remove(
                "slider__dot_active"
            );

            hot_slider_dots[this.activeDot - 1].classList.add(
                "slider__dot_active"
            );

            this.activeDot--;
            this.position += 245;

            hot_track.style.transform = "translateX(" + this.position + "px)";

            this.checkBtn();
        },
        checkBtn() {
            if (this.activeDot == 0) {
                this.hideLeftArrow = true;
            } else if (this.activeDot == this.hot.length - 4) {
                this.hideRightArrow = true;
            } else {
                this.hideLeftArrow = false;
                this.hideRightArrow = false;
            }
        },
    },
    mounted() {
        const hot_slider_dots_wrapper =
            document.querySelectorAll(".slider__dots")[0];

        for (let index = 0; index < this.hot.length - 4; index++) {
            hot_slider_dots_wrapper.insertAdjacentHTML(
                "beforeend",
                `<div class="slider__dot"></div>`
            );
        }

        const hot_slider_dots = document.querySelectorAll(".slider__dot");

        hot_slider_dots[this.activeDot].classList.add("slider__dot_active");
        this.checkBtn();
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
// @import url("@/assets/css/var.scss");
$black: #241400;
$orange: #e16a00;
$white: #fff;
$background: #fffaf5;
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.4s;
}

html {
    height: 100%;
    font-family: "Montserrat", sans-serif;
    scroll-behavior: smooth;
}

body {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1 1 auto;
}

a {
    text-decoration: none;
    transition: all 0.3s;
}

ul {
    list-style: none;
}

button,
input {
    border: none;
    outline: none;
    background-color: transparent;
}

img {
    object-fit: cover;
    display: block;
}

.container {
    max-width: 1170px;
    margin: 0 auto;
}

::-webkit-scrollbar {
    width: 8px;
    &-track {
        background-color: $background;
    }
    &-thumb {
        background: $orange;
        border-radius: 100px;
    }
}

body {
    background: $background;
}

section {
    margin-bottom: 75px;
}

.jumbotron {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__title {
        font-weight: 900;
        font-size: 36px;
        color: $black;
    }
    &__subtitle {
        font-size: 13px;
        color: $black;
        max-width: 370px;
        padding: 16px 0;
    }
    &__button {
        display: inline-block;
        padding: 10px 24px;
        background: $orange;
        font-weight: 900;
        font-size: 15px;
        color: $white;
    }
}

h2 {
    font-weight: 900;
    font-size: 25px;
    color: $black;
}

h2.center-title {
    text-align: center;
    margin-bottom: 50px;
}

.catalog {
    &__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 36px;
        width: 798px;
        margin: 0 auto;
    }
    &__item {
        background: #ffffff;
        box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 242px;
        height: 76px;
        position: relative;
    }
    &__link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
        color: $black;
    }
}

.hot {
    &__header {
        display: flex;
        align-items: center;
        gap: 100px;
        margin-bottom: 50px;
    }
    &__filters {
        display: flex;
        align-items: center;
        gap: 40px;
    }
    &__filter {
        &-button {
            font-size: 14px;
            color: $black;
            cursor: pointer;
        }
    }
    &__slider-track {
        padding-bottom: 60px;
    }
}

.slider {
    & .hideSlider {
        display: none !important;
        pointer-events: none;
    }
    &__wrapper {
        position: relative;
    }
    overflow: hidden;
    &__track {
        display: flex;
        align-items: center;
        gap: 60px;
    }
    &__arrows {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        width: 110%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__arrows button {
        cursor: pointer;
        padding: 20px;
        &.hideArrow {
            opacity: 0 !important;
            pointer-events: none;
        }
    }
    &__arrow-next {
        transform: rotate(180deg);
    }
    &__dots {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 16px;
    }
    &__dot {
        width: 35px;
        height: 10px;
        background: #d7d7d7;
        &_active {
            width: 50px;
            height: 14px;
            background: $black;
        }
    }
}

.about {
    &__list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }
    &__item {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    &__num {
        font-weight: 900;
        font-size: 50px;
        color: $black;
    }
    &__text {
        font-size: 14px;
        color: $black;
    }
}

.delivery {
    text-align: center;
    font-size: 16px;
    &__text {
        color: $black;
        margin-bottom: 20px;
    }
    &__more {
        display: inline-block;
        font-weight: bold;
        background: $orange;
        padding: 10px 14px;
        color: $white;
        border-radius: 50px;
    }
}
</style>
