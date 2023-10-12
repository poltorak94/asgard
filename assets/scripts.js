$(document).ready(function () {
    //header поиск
    $(".header__search-form-link").on("click", function (e) {
        e.preventDefault();
        $(".header").addClass("header--search");
    });

    $(document).mouseup(function (e) {
        let headerForm = $(".header__search-form");
        if (!headerForm.is(e.target) && headerForm.has(e.target).length === 0) {
            $(".header").removeClass("header--search");
        }
    });

    $("body .header__search-form-pseudosubmit").on("click", function (e) {
        e.preventDefault();
        $(this)
            .closest(".header")
            .find(".header__search-form-submit")
            .trigger("click");
    });

    //главный слайдер
    const mainSlider = $(".main-slider");
    if (mainSlider) {
        let heroSlider = new Swiper(".main-slider__container", {
            loop: true,
            pagination: {
                el: ".main-slider__pagination",
                clickable: true,
            },

            navigation: {
                nextEl: ".main-slider__arrow--right",
                prevEl: ".main-slider__arrow--left",
            },
        });
    }

    //табы
    const tabs = $(".tabs");
    if (tabs.length) {
        let firstSrc = $(".tabs__nav-item:first").attr("data-src");
        $(".tabs__item:first")
            .find(".tabs__item-group-video-iframe")
            .attr("src", firstSrc);

        $(".tabs__nav-item").on("click", function (e) {
            e.preventDefault();
            let navId = $(this).attr("data-id");
            let videoSrc = $(this).attr("data-src");

            $(".tabs__nav-item").removeClass("tabs__nav-item--active");
            $(this).addClass("tabs__nav-item--active");

            $(".tabs__item-group-video-holder").removeClass(
                "tabs__item-group-video-holder--hidden"
            );

            $(".tabs__item").each(function () {
                $(this).hide();
                $(this).find(".tabs__item-group-video-iframe").attr("src", "");
                let tabId = $(this).attr("data-id");

                let iframe = $(this).find(".tabs__item-group-video-iframe");

                if (tabId == navId) {
                    $(this).show();
                    iframe.attr("src", videoSrc);
                }
            });
        });

        $(".tabs__item-group-video-play").on("click", function (e) {
            e.preventDefault();
            let container = $(this).closest(".tabs__item-group-video-holder");
            container.addClass("tabs__item-group-video-holder--hidden");
        });
    }

    //слайдер оборудования
    const device = $(".device");
    if (device.length) {
        let deviceSlider = new Swiper(".device__slider", {
            loop: true,
            autoHeight: true,

            pagination: {
                el: ".device__controls-pagination",
                clickable: true,
            },

            navigation: {
                nextEl: ".device__controls-right",
                prevEl: ".device__controls-left",
            },
        });
    }

    //слайдер результатов
    const results = $(".results");
    if (results.length) {
        let resultsSlider = new Swiper(".results__slider", {
            autoHeight: true,
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: ".results__arrows-item--right",
                prevEl: ".results__arrows-item--left",
            },
        });
    }
});
