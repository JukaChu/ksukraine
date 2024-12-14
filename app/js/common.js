var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('lazyloaded')
        })

    })
}

allLozadImg();

let n = document;
const classes1 = {
    hidden: "is-hidden",
    expanded: "is-expanded",
    active: "is-active",
    selected: "is-selected",
    offset: "has-offset",
    icon: "icon",
    iconBurger: "icon-burger",
    iconChevron: "icon-chevron-right",
    iconClose: "icon-close",
    listItem: "subnav__list-item",
    listItemLabel: "subnav__list-item__label",
    navTemplate: "subnav__level subnav__level--deep",
    overview: "subnav__list-item--overview"
};
let header = document.querySelector('.header-wrapper');
let backdrop = document.querySelector('.header-wrapper .backdrop');
let subnav = document.querySelector('.subnav');

const func = [
    {
        key: "toggleSubNav",
        value: function (t) {
            console.log()

            if (this.tab === n || i) {
                this.hideNav();
                y.hide(this.backdrop);
            } else {
                this.header.classList.add(classes1.expanded);
                if (this.tab < 0) {
                    y.show(this.backdrop);
                }
                y.show(this.subNav);
                this.tab = n;
            }
        }
    },
    {
        key: "getDuration",
        value: function (t) {
            var e = 0;
            return window.getComputedStyle(t).transitionDuration.split(", ").forEach((function (t) {
                    t = 1e3 * +t.replace("s", ""),
                        e = t > e ? t : e
                }
            )),
                e
        }
    },
    {
        key: "hide",
        value: function t(e) {
            setTimeout((
                () => {
                    return window.getComputedStyle(t).transitionDuration.split(", ").forEach((function (t) {
                            t = 1e3 * +t.replace("s", ""),
                                e = t > e ? t : e
                        }
                    ))
                }
            ), 200);
            var n, i = arguments;
            return f.a.wrap(function (t) {
                for (; ;)
                    switch (t.prev = t.next) {
                        case 0:
                            n = i.length > 1 && void 0 !== i[1] && i[1],
                                e.classList.remove("animate-show"),
                                e.classList.add("animate-hide"),
                                t.next = 5,
                                this.delay(func.getDuration(e), function () {
                                    if (!n) {
                                        e.style.display = "none";
                                    }
                                    e.setAttribute("aria-hidden", "true");
                                });
                        case 5:
                        case "end":
                            t.stop();
                            break;
                    }
            }, t, this);
        }
    }
];


function callFunctionByKey(key, args) {
    const funcObj = func.find(fn => fn.key === key);
    if (funcObj && funcObj.value) {
        funcObj.value.apply(this, args); // Викликаємо функцію, прив'язуючи контекст до `n`
    }
}

let navOpened = 0;

function hideNav(el) {

    header.classList.remove(classes1.expanded);
    hide(subnav, 0);
}
function showNav(el) {

    header.classList.add(classes1.expanded);
    show(subnav, 0);
}

function hide(el, cs) {
    switch (cs) {
        case 0:

            el.classList.remove("animate-show"),
                el.classList.add("animate-hide"),
                cs.next = 5,
                setTimeout((function () {
                        el.setAttribute("aria-hidden", "true")
                        el.style.display = 'none';
                    }
                ), 300)

        case 5:
        case "end":
    }
}

function show(el, cs) {
    switch (cs) {
        case 0:
            el.classList.remove("animate-hide"),
                el.setAttribute("aria-hidden", "false"),
                el.style.display = 'block',
                cs.next = 5,
                setTimeout((function () {
                        el.classList.add("animate-show")
                    }
                ), 300)

        case 5:
        case "end":
    }
}

let activeNav = '';
// Ваш незмінений код
[...document.querySelectorAll("[data-nav]")].forEach(function (t, e) {
    t.setAttribute("data-index", e.toString());
    t.addEventListener("click", function (event) {
        // Викликаємо функцію з масиву за її ключем

        if (t.classList.contains('is-selected')) {
            hideNav(t);
            hide(backdrop, 0);
            activeNav = t;
            t.classList.remove('is-selected');
        } else {
            if (backdrop.classList.contains('animate-show')) {
                activeNav.classList.remove('is-selected');

                t.classList.add('is-selected');
                show(t, 0);
                activeNav = t;
            } else {
                t.classList.add('is-selected');
                showNav(t);
                show(backdrop, 0);
                activeNav = t;
            }
        }

    });
});


let heroSlider = [...document.querySelectorAll('.hero')];

function startHeroSlider() {
    if (heroSlider.length) {
        heroSlider.forEach((sld) => {


            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('[data-swiper-button="next"]');
            let sldPrev = sld.querySelector('[data-swiper-button="prev"]');
            let pagin = sld.querySelector('.dots');
            let scrBar = sld.querySelector('[data-swiper-scrollbar]');
            if ([...sld.querySelectorAll('.swiper-slide')].length > 1) {
                sldNext.classList.remove('is-hidden');
                sldPrev.classList.remove('is-hidden');
                scrBar.classList.remove('is-hidden');
            }

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                grabCursor: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 800,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,
                resistance: true,
                // resistanceRatio: 0.3,
                cssMode: false,

                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                centeredSlides: false,
                autoplay: {
                    delay: 5000
                },
                spaceBetween: 0,
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 0,
                },
                scrollbar: {
                    el: scrBar,
                    hide: false,
                },



            });


        })
    }
}

startHeroSlider();
