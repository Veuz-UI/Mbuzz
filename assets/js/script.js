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
$(document).ready(function () {
  var docEl      = $(document),
      headerEl   = $('header'),
      headerWrapEl = $('.main-header-in'),
      navEl      = $('nav'),
      subnavEl   = $('.subnav-wrap'),
      linkScroll = $('.scroll');

  docEl.on('scroll', function () {
    if (docEl.scrollTop() > 60) {
      headerEl.addClass('fixed-to-top');
      headerWrapEl.addClass('fixed-to-top');
      navEl.addClass('fixed-to-top');

      // Push subnav down by the navbar height dynamically
      var navHeight = $('header').outerHeight();
      subnavEl.css('top', navHeight + 'px');

    } else {
      headerEl.removeClass('fixed-to-top');
      headerWrapEl.removeClass('fixed-to-top');
      navEl.removeClass('fixed-to-top');

      // Reset subnav top when navbar is not fixed
      subnavEl.css('top', '0px');
    }
  });

  linkScroll.click(function (e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });
});


// nav dropdown
// main dropdown
$('.dropdown-toggle').click(function(e){
  e.preventDefault();
  let parent = $(this).parent();

  $('.dropdown').not(parent).removeClass('active');
  parent.toggleClass('active');
});

// submenu click
$('.submenu-toggle').click(function(e){
  e.preventDefault();
  let parent = $(this).parent();

  $('.submenu').not(parent).removeClass('active');
  parent.toggleClass('active');
});

// click outside close
$(document).click(function(e){
  if (!$(e.target).closest('.dropdown').length) {
    $('.dropdown, .submenu').removeClass('active');
  }
});

// nav mobile 
var t1 = new TimelineMax({
  paused: true
});
t1.to(".nav-container", 1, {
  left: 0,
  ease: Expo.easeInOut
});
t1.staggerFrom(
  ".menu > div",
  0.8, {
    y: 100,
    opacity: 0,
    ease: Expo.easeOut
  },
  0.1,
  "-=0.4"
);
// animate buttons
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
t1.reverse();
$(".menu-toggle").click(function () {
  $(this).toggleClass("active"); // hamburger animation
  t1.reversed(!t1.reversed()); // popup open close
  return false;
});


  // tab button amooth moving
//   document.addEventListener('DOMContentLoaded', function () {

//   function moveIndicator(activeBtn) {
//     const indicator = document.querySelector('.tab-indicator');
//     const tabs = document.querySelector('.all-works .tabs');

//     if (!indicator || !tabs || !activeBtn) return;

//     const tabsRect = tabs.getBoundingClientRect();
//     const btnRect = activeBtn.getBoundingClientRect();

//     indicator.style.width = btnRect.width + 'px';
//     indicator.style.transform =
//       'translateX(' + (btnRect.left - tabsRect.left) + 'px)';
//   }

//   // ✅ Init on load (ONLY ONCE)
//   const activeBtn = document.querySelector('.all-works .tab-btn.active');
//   if (activeBtn) moveIndicator(activeBtn);

//   // ✅ On click
//   document.querySelectorAll('.all-works .tab-btn').forEach(function (btn) {
//     btn.addEventListener('click', function () {
//       document
//         .querySelectorAll('.all-works .tab-btn')
//         .forEach(b => b.classList.remove('active'));

//       btn.classList.add('active');
//       moveIndicator(btn);
//     });
//   });
// });
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
    $('.client-list1').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
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

    // CLIENT LIST 1 ARABIC
    $('.client-list1-ar').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        rtl: true,
        autoplay: true,
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

    // CLIENT LIST 2 ENGLISH
    $('.client-list2').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        rtl: true,
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
            0: { items: 2 },
            375: { items: 3 },
            600: { items: 4 },
            1000: { items: 5 },
            1200: { items: 6 }
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
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});




$(document).ready(function () {

    // ENGLISH
    $('.core-offer-slider').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        rtl: false,
        nav: false,
        dots: false,
        autoplayTimeout: 3000,
        smartSpeed: 2000,

        responsive: {
            0: { items: 1 },
            600: { items: 1.5 },
            900: { items: 2 },
            1200: { items: 2.5 },
            1400: { items: 3 },
            1600: { items: 3.5 }
        }
    });

    // ARABIC
    $('.core-offer-slider-ar').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        rtl: true,
        nav: false,
        dots: false,
        autoplayTimeout: 3000,
        smartSpeed: 2000,

        responsive: {
            0: { items: 1 },
            600: { items: 1.5 },
            900: { items: 2 },
            1200: { items: 2.5 },
            1400: { items: 3 },
            1600: { items: 3.5 }
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

    // ARABIC NEXT
    $('.core-next-ar').click(function () {
        $('.core-offer-slider-ar').trigger('next.owl.carousel');
    });

    // ARABIC PREV
    $('.core-prev-ar').click(function () {
        $('.core-offer-slider-ar').trigger('prev.owl.carousel');
    });

    // REFRESH FIX
    setTimeout(function () {

        $('.core-offer-slider').trigger('refresh.owl.carousel');
        $('.core-offer-slider-ar').trigger('refresh.owl.carousel');

    }, 200);

});


$(document).ready(function () {

    // =========================
    // CORE OFFER SLIDER
    // =========================

    // $('.core-offer-slider').owlCarousel({
    //     loop: true,
    //     margin: 20,
    //     autoplay: true,
    //     rtl: false,
    //     nav: false,
    //     dots: false,
    //     autoplayTimeout: 3000,
    //     smartSpeed: 2000,
    //     responsive: {
    //         0: { items: 1 },
    //         600: { items: 1.5 },
    //         900: { items: 2 },
    //         1200: { items: 2.5 },
    //         1400: { items: 3 },
    //         1600: { items: 3.5 }
    //     }
    // });

    // $('.core-offer-slider-ar').owlCarousel({
    //     loop: true,
    //     margin: 20,
    //     autoplay: true,
    //     rtl: true,
    //     nav: false,
    //     dots: false,
    //     autoplayTimeout: 3000,
    //     smartSpeed: 2000,
    //     responsive: {
    //         0: { items: 1 },
    //         600: { items: 1.5 },
    //         900: { items: 2 },
    //         1200: { items: 2.5 },
    //         1400: { items: 3 },
    //         1600: { items: 3.5 }
    //     }
    // });


    // =========================
    // NEWS EVENTS
    // =========================

    $('.news-events-slider').owlCarousel({
        loop: true,
        rtl: false,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        margin: 20,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            768: { items: 1.2 },
            1000: { items: 2 },
            1400: { items: 2.2 }
        }
    });

    $('.news-events-slider-ar').owlCarousel({
        loop: true,
        rtl: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        margin: 20,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            768: { items: 1.2 },
            1000: { items: 2 },
            1400: { items: 2.2 }
        }
    });


    // =========================
    // CASE STUDY
    // =========================

    $('.case-study-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 700,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            768: { items: 2.5 },
            1000: { items: 3.2 },
            1400: { items: 4 }
        }
    });

    $('.case-study-slider-ar').owlCarousel({
        loop: true,
        rtl: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 700,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            768: { items: 2.5 },
            1000: { items: 3.2 },
            1400: { items: 4.2 }
        }
    });


    // =========================
    // PROJECTS
    // =========================

    $('.projects-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 700,
        responsive: {
            0: { items: 1 },
            700: { items: 1.5 },
            900: { items: 2 },
            1200: { items: 2.5 },
            1400: { items: 3 }
        }
    });

    $('.projects-slider-ar').owlCarousel({
        loop: true,
        rtl: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        responsive: {
            0: { items: 1 },
            700: { items: 1.5 },
            900: { items: 2 },
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
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
$(document).ready(function(){
  var owl = $('.prof-services-slider');
  owl.owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    nav: false,
    dots: false,
    responsive:{
          0:{
              items:1
          },
          600:{
              items:1.5
          },
          800:{
              items:2
          },
          1000:{
              items:3
          },
          1200:{
              items:3.5
          },
          1400:{
              items:4
          }
      }
  });
  $('.core-next').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.core-prev').click(function() {
    owl.trigger('prev.owl.carousel');
  });
});

$(document).ready(function(){
  var owl = $('.prof-services-slider-ar');
  owl.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    rtl:true,
    nav: false,
    dots: false,
    responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          800:{
              items:3
          },
          1000:{
              items:4
          }
      }
  });
  $('.core-next').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.core-prev').click(function() {
    owl.trigger('prev.owl.carousel');
  });
});


// ai real world impact slider
var owl = $('.ai-real-world-impact-slider').owlCarousel({
      loop:true,
      margin:20,
      autoplay:true,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1.2
          },
          650:{
              items:2.5
          },
          
          1000:{
              items:3.5
          }
      }
});
$('.core-next').click(function() {
    owl.trigger('next.owl.carousel');
});
$('.core-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});


var owl = $('.ai-real-world-impact-slider-ar').owlCarousel({
      loop:true,
      margin:20,
      autoplay:true,
      rtl:true,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1.2
          },
          650:{
              items:2.5
          },
          
          1000:{
              items:3.5
          }
      }
});
$('.core-next').click(function() {
    owl.trigger('next.owl.carousel');
});
$('.core-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});


// inner page overview nav
$('.subnav-toggle').click(function () {
    $('.subnav-dropdown').toggleClass('active');
});
$('.inner-subnav-links li a').click(function(){
    $('.subnav-dropdown').removeClass('active');
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









