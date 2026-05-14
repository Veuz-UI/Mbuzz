//// loader
// function hideLoader() {
//     const l = document.getElementById('loader');
//     l.classList.add('hide');
//     setTimeout(() => {
//       l.style.display = 'none';
//       document.getElementById('page').classList.add('show');
//     }, 500);
//   }
 
  var letters  = "MBUZZ";
  var textEl   = document.getElementById("loaderText");
  var barEl    = document.getElementById("loaderBar");
  var loader   = document.getElementById("loader");

  // // Build chars with stagger
  // letters.split("").forEach(function(ch, i) {
  //   var span = document.createElement("span");
  //   span.className   = "char";
  //   span.textContent = ch;
  //   span.style.animationDelay = (0.3 + i * 0.13) + "s";
  //   textEl.appendChild(span);
  // });

  // Hide after all chars animate + buffer
  // var hideAfter = 300 + (letters.length * 130) + 800;
  var hideAfter = 100 + (letters.length * 40) + 100;
  setTimeout(function() {
    loader.classList.add("hide");
  }, hideAfter);
/// END pre loader


// // nav scroll
// $(document).ready(function(){
//   var docEl = $(document),
//       headerEl = $('header'),
//       headerWrapEl = $('.main-header-in'),
//       navEl = $('nav'),
//       linkScroll = $('.scroll');

//   docEl.on('scroll', function(){
//     if ( docEl.scrollTop() > 60 ){
//       headerEl.addClass('fixed-to-top');
//       headerWrapEl.addClass('fixed-to-top');
//       navEl.addClass('fixed-to-top');
//     }
//     else {
//       headerEl.removeClass('fixed-to-top');
//       headerWrapEl.removeClass('fixed-to-top');
//       navEl.removeClass('fixed-to-top');
//     }
//   });

//   linkScroll.click(function(e){
//       e.preventDefault();
//       $('body, html').animate({
//          scrollTop: $(this.hash).offset().top
//       }, 500);
//    });
// });
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


// // slider heading animation
// $(document).ready(function(){ 
//   function splitText(el) {
//     const raw = el.textContent;
//     el.textContent = '';
//     return raw.split('').map(function(ch) {
//     const s = document.createElement('span');
//     s.className = 'char';
//     s.textContent = ch;
//     el.appendChild(s);
//     return s;
//     });
//     }

//     function slideRight(el) {
//     const chars = splitText(el);
//     chars.forEach(function(ch, i) {
//     // const delay = (chars.length - 1 - i) * 40;
//     const delay = i * 40;
//     ch.style.cssText = 'opacity:0; transform:translateX(-36px); transition:none';
//     setTimeout(function() {
//     ch.style.transition = 'opacity 0.5s ease ' + delay + 'ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ' + delay +
//     'ms';
//     ch.style.opacity = '1';
//     ch.style.transform = 'translateX(0)';
//     }, 20);
//     });
//     }

//     // Run on page load for the first active slide
//     document.addEventListener('DOMContentLoaded', function() {
//     const firstText = document.querySelector('.carousel-item.active .text');
//     if (firstText) slideRight(firstText);
//     });

//     // Run on every carousel slide change
//     document.getElementById('carouselExampleIndicators').addEventListener('slid.bs.carousel', function(e) {
//     const activeText = e.relatedTarget.querySelector('.text');
//     if (activeText) slideRight(activeText);
//   });
// });

$(document).ready(function(){

  function splitText(el) {
    const raw = el.textContent;
    el.textContent = '';
    return raw.split('').map(function(ch) {
      const s = document.createElement('span');
      s.className = 'char';
      s.textContent = ch;
      el.appendChild(s);
      return s;
    });
  }

  function slideRight(el) {

    var isRTL = $('html').attr('dir') === 'rtl';

    const chars = splitText(el);

    chars.forEach(function(ch, i) {

      const delay = i * 40;
      const startX = isRTL ? 36 : -36;

      ch.style.cssText = 'opacity:0; transform:translateX(' + startX + 'px); transition:none';

      setTimeout(function() {
        ch.style.transition = 'opacity 0.5s ease ' + delay + 'ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ' + delay + 'ms';
        ch.style.opacity = '1';
        ch.style.transform = 'translateX(0)';
      }, 20);

    });
  }

  // first load
  const firstText = document.querySelector('.carousel-item.active .text');
  if (firstText) slideRight(firstText);

  // on slide change
  $('#carouselExampleIndicators').on('slid.bs.carousel', function(e){
    const activeText = e.relatedTarget.querySelector('.text');
    if (activeText) slideRight(activeText);
  });

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

  // ✅ Init on load (ONLY ONCE)
  const activeBtn = document.querySelector('.all-works .tab-btn.active');
  if (activeBtn) moveIndicator(activeBtn);

  // ✅ On click
  document.querySelectorAll('.all-works .tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document
        .querySelectorAll('.all-works .tab-btn')
        .forEach(b => b.classList.remove('active'));

      btn.classList.add('active');
      moveIndicator(btn);
    });
  });

});


// client-list1
$('.client-list1').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  // autoplaySpeed: 2000,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 3
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
});

$('.client-list1-ar').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  rtl:true,
  autoplay: true,
  autoplayTimeout: 2000,
  // autoplaySpeed: 2000,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 3
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
});

// client-list2
$('.client-list2').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  rtl: true,
  autoplayTimeout: 2000,
  // autoplaySpeed: 2000,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 1
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

$('.client-list2-ar').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  rtl: false,
  autoplayTimeout: 2000,
  // autoplaySpeed: 2000,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 1
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


/* <!-- ==================== Reveal type ==================== --> */
// gsap.registerPlugin(ScrollTrigger);

// const splitTypes = document.querySelectorAll('.reveal-type');

// splitTypes.forEach((char, i) => {
//     const bg = char.dataset.bgColor;
//     const fg = char.dataset.fgColor;

//     // Split into words first to prevent breakage
//     const text = new SplitType(char, {
//         types: 'words, chars' // First split into words, then into characters
//     });

//     // Ensure words stay together by using `white-space: nowrap`
//     gsap.set(text.words, {
//         display: 'inline-block',
//         whiteSpace: 'nowrap'
//     });

//     gsap.fromTo(text.chars, {
//         color: bg,
//     }, {
//         color: fg,
//         duration: 0.3,
//         stagger: 0.02,
//         scrollTrigger: {
//             trigger: char,
//             start: 'top 90%',
//             end: 'bottom 40%',
//             scrub: true,
//             markers: false,
//             toggleActions: 'play play reverse reverse'
//         }
//     });
// });

/* <!-- ==================== Reveal type ==================== --> */

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


// core offering slider
$(document).ready(function(){
  var owl = $('.core-offer-slider');
  owl.owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    nav: false,
    dots: false,
    autoplayTimeout: 3000,
    // autoplaySpeed: 2000,
    smartSpeed: 2000,
    responsive: {
      0: { items: 1 },
      400: { items: 1.5 },
      650: { items: 2.5 },
      1000: { items: 3.5 }
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
  var owl = $('.core-offer-slider-ar');
  owl.owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    rtl:true,
    nav: false,
    dots: false,
    autoplayTimeout: 3000,
    // autoplaySpeed: 2000,
    smartSpeed: 2000,
    responsive: {
      0: { items: 1 },
      400: { items: 1.5 },
      650: { items: 2.5 },
      1000: { items: 3.5 }
    }
  });
  $('.core-next').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.core-prev').click(function() {
    owl.trigger('prev.owl.carousel');
  });
});



//case-study-tab
document.addEventListener('DOMContentLoaded', function () {
  const tabBtns = document.querySelectorAll('.tab-btn');
    const panels  = document.querySelectorAll('.tab-panel');
  
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
  
        tabBtns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
  
        btn.classList.add('active');
        document.getElementById(target).classList.add('active');
      });
  });
});  

// case-study-slider
$('.case-study-slider').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  // autoplaySpeed: 3000,
  smartSpeed: 1000,
  margin:20,
  responsive: {
    0: {
      items: 1.2
    },
    600: {
      items: 2.5
    },
    800: {
      items: 3.5
    },
    1000: {
      items: 3.5
    },
    1200: {
      items: 4.5
    }
  }
});

$('.case-study-slider-ar').owlCarousel({
  loop: true,
  nav: false,
  rtl:true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  // autoplaySpeed: 3000,
  smartSpeed: 1000,
  margin:20,
  responsive: {
    0: {
      items: 1.2
    },
    600: {
      items: 2.5
    },
    800: {
      items: 3.5
    },
    1000: {
      items: 3.5
    },
    1200: {
      items: 4.5
    }
  }
});

// projects-slider
$('.projects-slider').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  // autoplaySpeed: 3000,
  smartSpeed: 1000,
  margin:20,
  responsive: {
    0: {
      items: 1.1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});

$('.projects-slider-ar').owlCarousel({
  loop: true,
  nav: false,
  rtl:true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  // autoplaySpeed: 3000,
  smartSpeed: 1000,
  margin:20,
  responsive: {
    0: {
      items: 1.1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});

// news-events-slider
$('.news-events-slider').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  // autoplaySpeed: 3000,
  smartSpeed: 1000,
  margin:20,
  responsive: {
    0: {
      items: 1.2
    },
    600: {
      items: 1.2
    },
    768: {
      items: 2.1
    },
    1000: {
      items: 2.1
    },
    1200: {
      items: 2.2
    }
  }
});

$('.news-events-slider-ar').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  rtl:true,
  autoplay: true,
  autoplayTimeout: 3000,
  // autoplaySpeed: 3000,
  smartSpeed: 1000,
  margin:20,
  responsive: {
    0: {
      items: 1
    },
    375: {
      items: 1
    },
    768: {
      items: 2
    },
    1000: {
      items: 2
    },
    1200: {
      items: 2
    }
  }
});



////// inner pages start here //////
/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STICKY SUBNAV ACTIVE STATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
// document.addEventListener('DOMContentLoaded', function () {
//   (function() {
//     const links    = document.querySelectorAll('.subnav-links a');
//     const sections = document.querySelectorAll('.content-section');
  
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           links.forEach(l => l.classList.remove('active'));
//           const active = document.querySelector(`.subnav-links a[href="#${entry.target.id}"]`);
//           if (active) active.classList.add('active');
//         }
//       });
//     }, { threshold: 0.4 });
  
//     sections.forEach(s => observer.observe(s));
  
//     links.forEach(link => {
//       link.addEventListener('click', e => {
//         e.preventDefault();
//         const target = document.querySelector(link.getAttribute('href'));
//         if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       });
//     });
//   })();
// });


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

/* ------------- AI Infrastructure ------------- */

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
              items:1.5
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

// innaer page overview nav
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









