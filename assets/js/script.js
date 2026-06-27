//// loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    // Small smooth delay
    setTimeout(() => {
        loader.classList.add("hide");
        // Remove from DOM after animation
        setTimeout(() => {
            loader.remove();
        }, 600);
    }, 500);
});
/// END pre loader


//// nav scroll
// $(document).ready(function () {
//   var docEl      = $(document),
//       headerEl   = $('header'),
//       headerWrapEl = $('.main-header-in'),
//       navEl      = $('nav'),
//       subnavEl   = $('.subnav-wrap'),
//       linkScroll = $('.scroll');

//   docEl.on('scroll', function () {
//     if (docEl.scrollTop() > 60) {
//       headerEl.addClass('fixed-to-top');
//       headerWrapEl.addClass('fixed-to-top');
//       navEl.addClass('fixed-to-top');

//       // Push subnav down by the navbar height dynamically
//       var navHeight = $('header').outerHeight();
//       subnavEl.css('top', navHeight + 'px');

//     } else {
//       headerEl.removeClass('fixed-to-top');
//       headerWrapEl.removeClass('fixed-to-top');
//       navEl.removeClass('fixed-to-top');

//       // Reset subnav top when navbar is not fixed
//       subnavEl.css('top', '0px');
//     }
//   });

//   linkScroll.click(function (e) {
//     e.preventDefault();
//     $('body, html').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 500);
//   });
// });


$(document).ready(function () {

    var docEl = $(document),
        headerEl = $('header'),
        headerWrapEl = $('.main-header-in'),
        navEl = $('nav'),
        subnavEl = $('.subnav-wrap'),
        lastScrollTop = 0;

    $(window).on('scroll', function () {

        var scrollTop = $(this).scrollTop();

        if (scrollTop > 0) {

            headerEl.addClass('fixed-to-top');
            headerWrapEl.addClass('fixed-to-top');
            navEl.addClass('fixed-to-top');

            var navHeight = $('header').outerHeight();
            subnavEl.css('top', navHeight + 'px');

            // Hide on scroll down only after the header is already visible and user has scrolled enough
            if (scrollTop > lastScrollTop && scrollTop > 80) {
                headerEl.addClass('nav-hide');
            }
            // Show on scroll up
            else if (scrollTop < lastScrollTop) {
                headerEl.removeClass('nav-hide');
            }

        } else {

            headerEl.removeClass('fixed-to-top nav-hide');
            headerWrapEl.removeClass('fixed-to-top');
            navEl.removeClass('fixed-to-top');

            subnavEl.css('top', '0px');
        }

        lastScrollTop = scrollTop;
    });

});


// nav dropdown
// main dropdown
$('.dropdown-toggle').click(function (e) {
    e.preventDefault();
    let parent = $(this).parent();

    $('.dropdown').not(parent).removeClass('active hover-active');
    parent.removeClass('hover-active').toggleClass('active');
});

// dropdown hover should show hovered menu and replace any active menu
$('.right-nav-top .dropdown').hover(
    function () {
        $('.right-nav-top .dropdown').not(this).removeClass('active hover-active');
        $(this).removeClass('active').addClass('hover-active');
    },
    function () {
        $(this).removeClass('hover-active');
    }
);

// submenu click
$('.submenu-toggle').click(function (e) {
    e.preventDefault();
    let parent = $(this).parent();

    $('.submenu').not(parent).removeClass('active');
    parent.toggleClass('active');
});

// click outside close
$(document).click(function (e) {
    if (!$(e.target).closest('.dropdown').length) {
        $('.dropdown, .submenu').removeClass('active hover-active');
    }
});

// // nav mobile 
// var t1 = new TimelineMax({
//     paused: true
// });
// t1.to(".nav-container", 1, {
//     left: 0,
//     ease: Expo.easeInOut
// });
// t1.staggerFrom(
//     ".menu > div",
//     0.8, {
//         y: 100,
//         opacity: 0,
//         ease: Expo.easeOut
//     },
//     0.1,
//     "-=0.4"
// );
// // animate buttons
// t1.staggerFrom(
//     ".mob-btn",
//     0.8, {
//         y: 80,
//         opacity: 0,
//         ease: Expo.easeOut
//     },
//     0.2,
//     "-=0.4"
// );
// t1.reverse();
// $(".menu-toggle").click(function () {
//     $(this).toggleClass("active");

//     if (t1.reversed()) {
//         // Open Menu
//         $("body").css({
//             overflow: "hidden",
//             height: "100vh"
//         });
//     } else {
//         // Close Menu
//         $("body").css({
//             overflow: "",
//             height: ""
//         });
//     }

//     t1.reversed(!t1.reversed());

//     return false;
// });

var t1 = new TimelineMax({
    paused: true,
    reversed: true,

    onReverseComplete: function () {
        $("body").css({
            overflow: "",
            height: ""
        });
    }
});

t1.to(".nav-container", 0.4, {
    left: 0,
    ease: Power2.easeOut
})
.staggerFrom(
    ".menu > div",
    0.3,
    {
        y: 20,
        opacity: 0
    },
    0.03,
    "-=0.15"
);

// t1.staggerFrom(
//     ".menu > div",
//     0.8,
//     {
//         y: 100,
//         opacity: 0,
//         ease: Expo.easeOut
//     },
//     0.1,
//     "-=0.4"
// );

t1.staggerFrom(
    ".mob-btn",
    0.8,
    {
        y: 80,
        opacity: 0,
        ease: Expo.easeOut
    },
    0.2,
    "-=0.4"
);

$(".menu-toggle").click(function () {

    $(this).toggleClass("active");

    if (t1.reversed()) {
        $("body").css({
            overflow: "hidden",
            height: "100vh"
        });

        t1.play();
    } else {
        t1.reverse();
    }

    return false;
});




// tab button amooth moving
document.addEventListener('DOMContentLoaded', function () {
    function moveIndicator(activeBtn) {
        const indicator = document.querySelector('.tab-indicator');
        const tabs = document.querySelector('.all-works .tabs');

        if (!indicator || !tabs || !activeBtn) return;

        const tabsRect = tabs.getBoundingClientRect();
        const btnRect = activeBtn.getBoundingClientRect();

        indicator.style.width = btnRect.width + 'px';

        indicator.style.transform =
            'translateX(' + (btnRect.left - tabsRect.left) + 'px)';
    }

    // INIT
    const activeBtn = document.querySelector('.all-works .tab-btn.active');

    if (activeBtn) {
        moveIndicator(activeBtn);
    }

    // CLICK
    document.querySelectorAll('.all-works .tab-btn').forEach(function (btn) {

        btn.addEventListener('click', function () {

            document
                .querySelectorAll('.all-works .tab-btn')
                .forEach(b => b.classList.remove('active'));

            btn.classList.add('active');

            moveIndicator(btn);
        });

    });

    // ✅ RESPONSIVE FIX
    window.addEventListener('resize', function () {

        const activeBtn =
            document.querySelector('.all-works .tab-btn.active');

        moveIndicator(activeBtn);

    });

});


$(document).ready(function () {

    // CLIENT LIST 1 ENGLISH
    const isRTL = $('html').attr('dir') === 'rtl';

// Slider 1
$('.client-list1').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    rtl: isRTL,
    autoplayTimeout: 2000,
    smartSpeed: 2000,
    responsive: {
        0: { items: 2 },
        375: { items: 3 },
        600: { items: 4 },
        1000: { items: 5 },
        1200: { items: 6 }
    }
});

// Slider 2 (Opposite Direction)
$('.client-list2').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    rtl: !isRTL,
    autoplayTimeout: 2000,
    smartSpeed: 2000,
    responsive: {
        0: { items: 2 },
        375: { items: 3 },
        600: { items: 4 },
        1000: { items: 5 },
        1200: { items: 6 }
    }
});

    // CLIENT LIST 2 ARABIC
    $('.client-list2-ar').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        rtl: false,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 2
            },
            375: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

    // IMPORTANT FIX
    setTimeout(function () {

        $('.client-list1').trigger('refresh.owl.carousel');
        $('.client-list1-ar').trigger('refresh.owl.carousel');

        $('.client-list2').trigger('refresh.owl.carousel');
        $('.client-list2-ar').trigger('refresh.owl.carousel');

    }, 300);

});


// return scroll
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});




$(document).ready(function () {

    // ENGLISH
    const isRTL = $('html').attr('dir') === 'rtl';

    $('.core-offer-slider').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        rtl: isRTL,
        nav: false,
        dots: false,
        autoplayTimeout: 3000,
        smartSpeed: 2000,
        responsive: {
            0: { items: 1.1 },
            450: { items: 1.3 },
            600: { items: 1.5 },
            700: { items: 2 },
            900: { items: 2.5 },
            1200: { items: 3 },
            1400: { items: 3.5 },
            1600: { items: 3.9 }
        }
    });


    // NEXT BUTTON
    $('.core-next').click(function () {
        $('.core-offer-slider').trigger('next.owl.carousel');
    });

    // PREV BUTTON
    $('.core-prev').click(function () {
        $('.core-offer-slider').trigger('prev.owl.carousel');
    });


    // REFRESH FIX
    setTimeout(function () {

        $('.core-offer-slider').trigger('refresh.owl.carousel');

    }, 200);

});


$(document).ready(function () {
    const isRTL = $('html').attr('dir') === 'rtl';


    // =========================
    // NEWS EVENTS
    // =========================
    

    $('.news-events-slider').owlCarousel({
        loop: true,
        rtl: isRTL,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        margin: 15,
        responsive: {
            0: { items: 1.1 },
            500: { items: 1.5 },
            600: { items: 1 },
            768: { items: 1.2 },
            900: { items: 1.5 },
            1100: { items: 2 },
            1400: { items: 2.2 }
        }
    });

    


    // =========================
    // CASE STUDY
    // =========================



    $('.case-study-slider').owlCarousel({
        loop: true,
        margin: 15,
        rtl: isRTL,
        nav: false,
        dots: false,
        autoplay: false,
        smartSpeed: 700,
        responsive: {
            0: { items: 1.1 },
            450: { items: 1.5 },
            600: { items: 2 },
            768: { items: 2.5 },
            900: { items: 3 },
            1000: { items: 3.5 },
            1400: { items: 4 }
        }
    });




    // =========================
    // PROJECTS
    // =========================

    $('.projects-slider').owlCarousel({
        loop: true,
        margin: 15,
        rtl: isRTL,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 700,
        responsive: {
            0: { items: 1.1 },
            500: { items: 1.2 },
            700: { items: 1.5 },
            800: { items: 2 },
            950: { items: 2.3 },
            1200: { items: 2.5 },
            1400: { items: 3 }
        }
    });




    // =========================
    // TABS
    // =========================

    $('.tab-btn').click(function () {

        let tabId = $(this).data('tab');

        $('.tab-btn').removeClass('active');
        $(this).addClass('active');

        $('.tab-panel').removeClass('active');
        $('#' + tabId).addClass('active');

        setTimeout(function () {

            $('.case-study-slider').trigger('refresh.owl.carousel');
            $('.case-study-slider-ar').trigger('refresh.owl.carousel');

            $('.projects-slider').trigger('refresh.owl.carousel');
            $('.projects-slider-ar').trigger('refresh.owl.carousel');

        }, 100);

    });

});

/* ------------- AI Infrastructure ------------- */

// document.addEventListener('DOMContentLoaded', function () {
function activate(el) {
    if (el.classList.contains('active')) return;
    document.querySelectorAll('.infrastructure-wrapper__panel').forEach(p => p.classList.remove('active'));
    el.classList.add('active');

    // on mobile, scroll the clicked infrastructure-wrapper__panel into view smoothly
    if (window.innerWidth <= 700) {
        setTimeout(() => {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 50);
    }
}
// });

/* ------------- Section Nav Active ------------- */

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".inner-subnav-links a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
});
// Section Nav Active //


//// inner pages ////

// prof-services
$(document).ready(function () {
    var owl = $('.prof-services-slider');
    owl.owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 1.3
            },
            600: {
                items: 1.5
            },
            700: {
                items: 2
            },
            800: {
                items: 2.2
            },
            900: {
                items: 2.5
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3.5
            },
            1300: {
                items: 4
            },
            1500: {
                items: 4
            }
        }
    });
    $('.core-next').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.core-prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });
});

$(document).ready(function () {
    var owl = $('.prof-services-slider-ar');
    owl.owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        rtl: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 1.3
            },
            600: {
                items: 1.5
            },
            700: {
                items: 2
            },
            800: {
                items: 2.2
            },
            900: {
                items: 2.5
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3.5
            },
            1300: {
                items: 4
            },
            1500: {
                items: 4
            }
        }
    });
    $('.core-next').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.core-prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });
});


// // ai real world impact slider
$(document).ready(function () {

    // ENGLISH
    $('.ai-real-world-impact-slider').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        rtl: false,
        nav: false,
        dots: false,
        autoplayTimeout: 3000,
        // smartSpeed: 2000,
        responsive: {
            0: {
                items: 1.2
            },
            500: {
                items: 2
            },
            800: {
                items: 2.5
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3.5
            },
            1500: {
                items: 4
            }
        }
    });

    // ARABIC
    $('.ai-real-world-impact-slider-ar').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        rtl: true,
        nav: false,
        dots: false,
        autoplayTimeout: 3000,
        // smartSpeed: 2000,
        responsive: {
            0: {
                items: 1.2
            },
            500: {
                items: 2
            },
            800: {
                items: 2.5
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3.5
            },
            1500: {
                items: 4
            }
        }
    });

    // NEXT BUTTON
    $('.core-next').click(function () {
        $('.ai-real-world-impact-slider').trigger('next.owl.carousel');
    });

    // PREV BUTTON
    $('.core-prev').click(function () {
        $('.ai-real-world-impact-slider').trigger('prev.owl.carousel');
    });

    // ARABIC NEXT
    $('.core-next-ar').click(function () {
        $('.ai-real-world-impact-slider-ar').trigger('next.owl.carousel');
    });

    // ARABIC PREV
    $('.core-prev-ar').click(function () {
        $('.ai-real-world-impact-slider-ar').trigger('prev.owl.carousel');
    });

    // REFRESH FIX
    setTimeout(function () {

        $('.ai-real-world-impact-slider').trigger('refresh.owl.carousel');
        $('.ai-real-world-impact-slider-ar').trigger('refresh.owl.carousel');

    }, 200);

});


// inner page overview nav
$('.subnav-toggle').click(function () {
    $('.subnav-dropdown').toggleClass('active');
});
$('.inner-subnav-links li a').click(function () {
    $('.subnav-dropdown').removeClass('active');
});



$(document).ready(function () {
    var owl = $('.inbuild-pr-slider');
    owl.owlCarousel({
        loop: false,
        margin: 15,
        autoplay: false,
        nav: false,
        dots: false,
         responsive: {
            0: {
                items: 1
            },
            420: {
                items: 1
            },
            600: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            },
            1300: {
                items: 4
            }
        }
    });
    // $('.core-next').click(function () {
    //     owl.trigger('next.owl.carousel');
    // });
    // $('.core-prev').click(function () {
    //     owl.trigger('prev.owl.carousel');
    // });
});


// page refresh time show the page top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
window.onload = function () {
    window.scrollTo(0, 0);
};



document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));
            tab.classList.add("active");
            document
                .getElementById(tab.dataset.tab)
                .classList.add("active");
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll(".tab-btn");
    const cards = document.querySelectorAll(".case-study-in-item");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(btn => btn.classList.remove("active"));
            tab.classList.add("active");
            const category = tab.dataset.tab;
            cards.forEach(card => {

                if (category === "all") {
                    card.style.display = "block";
                } else {
                    card.style.display =
                        card.classList.contains(category) ?
                        "block" :
                        "none";
                }
            });
        });
    });
});



//  NVIDIA ad Section --//

const hero = document.getElementById('hero');

hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 10;
    const moveY = (y / rect.height - 0.5) * 10;

    hero.style.transform = `rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
});

hero.addEventListener('mouseleave', () => {
    hero.style.transform = 'rotateX(0) rotateY(0)';
});
// NVIDIA ad Section //


// AI Faq //
document.addEventListener("DOMContentLoaded", function () {

    const headers = document.querySelectorAll('.ai-factory-faq-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {

            const item = this.closest('.ai-factory-faq-item');

            // close others
            document.querySelectorAll('.ai-factory-faq-item').forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                    const icon = i.querySelector('.ai-factory-faq-icon');
                    if (icon) icon.textContent = '+';
                }
            });

            // toggle current
            item.classList.toggle('active');

            const icon = item.querySelector('.ai-factory-faq-icon');
            if (icon) {
                icon.textContent = item.classList.contains('active') ? '−' : '+';
            }

        });
    });

});
// END AI Faq //


// document.addEventListener("DOMContentLoaded", function () {
function setStep(i) {
    document.querySelectorAll('.step-row').forEach((r, idx) => {
        r.classList.remove('active', 'done');
        if (idx === i) r.classList.add('active');
        else if (idx < i) r.classList.add('done');
    });
    document.querySelectorAll('.lc-slide').forEach((s, idx) => s.classList.toggle('active', idx === i));
    document.querySelectorAll('.cap-slide').forEach((c, idx) => c.classList.toggle('active', idx === i));
}
// });