window.onload = function () {
    const hot_track = document.querySelectorAll(
        ".hot__slider .hot__slider-track"
    )[0];
    const hot_slider_arrows = document.querySelectorAll(
        ".hot__slider .slider__arrows"
    )[0];
    const hot_slider_dots_wrapper =
        document.querySelectorAll(".slider__dots")[0];
    const hot_arrow_prev = document.querySelectorAll(".slider__arrow-prev")[0];
    const hot_arrow_next = document.querySelectorAll(".slider__arrow-next")[0];

    const hot = [
        {
            img: "card.png",
            price: 300,
            title: "Порядок в Хаосе",
            author: "Константин Коптелов",
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
            img: "card5.png",
            price: 778,
            title: "Без маски",
            author: "Михаил Бурняшев",
        },
        {
            img: "card.png",
            price: 300,
            title: "Порядок в Хаосе",
            author: "Константин Коптелов",
        },
        {
            img: "card2.png",
            price: 225,
            title: "Порядок в Хаосе",
            author: "Константин Коптелов",
        },
        {
            img: "card5.png",
            price: 778,
            title: "Без маски",
            author: "Михаил Бурняшев",
        },
        {
            img: "card3.png",
            price: 86,
            title: "Смарагдова книга",
            author: "Константин Гир",
        },
    ];

    hot.forEach((item) => {
        hot_track.insertAdjacentHTML(
            "beforeend",
            `
        <li class="slider__item">
        <div class="card">
            <img src="img/cards/${item.img}" alt="${item.title}" class="card__img">
            <p class="card__price">${item.price} руб.</p>
            <div class="card__book book">
                <p class="book__title" title="${item.title}">${item.title}</p>
                <p class="book__author" title="${item.author}">${item.author}</p>
            </div>
            <button class="card__button">В корзину</button>
        </div>
    </li>
        `
        );
    });

    for (let index = 0; index < hot.length-4; index++) {
        if (hot.length < 6) {
            hot_slider_arrows.style.display = "none";
        } else {
            hot_slider_dots_wrapper.insertAdjacentHTML(
                "beforeend",
                `<div class="slider__dot"></div>`
            );
        }
    }

    const hot_slider_dots = document.querySelectorAll(".slider__dot");

    let position = 0;
    let activeDot = 0;

    hot_slider_dots[activeDot].classList.add("slider__dot_active");
    checkBtn();

    hot_arrow_next.onclick = function () {
        hot_slider_dots[activeDot].classList.remove("slider__dot_active");
        hot_slider_dots[activeDot + 1].classList.add("slider__dot_active");
        activeDot++;
        checkBtn();
        position -= 245;
        hot_track.style.transform = 'translateX(' + position + 'px)';
    };
    
    hot_arrow_prev.onclick = function () {
        hot_slider_dots[activeDot].classList.remove("slider__dot_active");
        hot_slider_dots[activeDot - 1].classList.add("slider__dot_active");
        activeDot--;
        checkBtn();
        position += 245;
        hot_track.style.transform = 'translateX(' + position + 'px)';
    };

    function checkBtn() {
        if (activeDot == 0) {
            hot_arrow_prev.style.opacity = "0";
            hot_arrow_prev.disabled = true;
        } else {
            hot_arrow_prev.disabled = false;
            hot_arrow_prev.style.opacity = "1";
        }
        if (activeDot == hot_slider_dots.length - 1) {
            hot_arrow_next.style.opacity = "0";
            hot_arrow_next.disabled = true;
        } else {
            hot_arrow_next.disabled = false;
            hot_arrow_next.style.opacity = "1";
        }
    }
};
