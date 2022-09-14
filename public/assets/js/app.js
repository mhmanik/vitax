(function($) {
    "use strict";



jQuery(document).ready(function(){
 
    
    vitax_tm_cursor();
    vitax_tm_projects();
    marqueImages();
    tiltAnimation();
    checkVal();
    vitax_blog_popupmodal_news();
    v_service_popup();
    vitax_modalbox_project();
    vitax_tm_popup();
    vitax_modalbox_portfolio();
    vitax_onePageNav();
    vitax_data_images();
    vitax_ofcanvas();
    HoverActive3();
    HoverActive2();
    HoverActive();
    vitax_onePageNavMobile();
    
    
    jQuery(window).load('body', function(){
        vitax_tm_my_load();
        //bdonepagenav();
         vitax_onePageNav();
         vitax_svg();
          HoverActive();
          HoverActive2();
          HoverActive3();
          vitax_onePageNavMobile();
       
    });
    
});

  function HoverActive3() {
        $('.services-grid-dark').mouseenter(function() {
            var self = this;
            setTimeout(function() {
                $('.services-grid-dark.active').removeClass('active');
                $(self).addClass('active');
            }, 0);

        });
    }
  function HoverActive2() {
        $('.list_inner').mouseenter(function() {
            var self = this;
            setTimeout(function() {
                $('.list_inner.active').removeClass('active');
                $(self).addClass('active');
            }, 0);

        });
    }

function vitax_svg(){ 
    /*
     * Replace all SVG images with inline SVG
     */
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

}

function vitax_ofcanvas(){ 
  var header = $('.js-header'),
      burger = header.find('.js-header-burger'),
      wrapper = header.find('.js-header-wrapper'),
      html = $('html'),
      body = $('body');
      burger.on('click', function () {
        burger.toggleClass('active');
        wrapper.toggleClass('visible');
        html.toggleClass('no-scroll');
        body.toggleClass('no-scroll');
      });
};



function vitax_onePageNavMobile(){ 

         if ($('body').hasClass('onepage-template')) {
  
                $('#onepagemenu li a').on('click', function() {
                    var popupMenuWrap = $('#mobilemenu-popup .mobile-menu-close, .header-offcanvasmenu .btn-close');
                    if ($('#mobilemenu-popup, .header-offcanvasmenu').hasClass('offcanvas')) {
                        popupMenuWrap.trigger('click');
                        
                    }
                });
            }
        }
  
function vitax_onePageNav(){ 

    $('#onepagenav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
    });
          
    var targetParent = $(this).parents('.mainmenu-nav'),
        target = $(this).siblings('.bd-submenu'),
        targetSiblings = $(this).parent('.menu-item-has-children').siblings().find('.bd-submenu');
    
    if (targetParent.hasClass('offcanvas')) {
        $(target).slideToggle(400);
        $(targetSiblings).slideUp(400);
        $(this).parent('.menu-item-has-children').toggleClass('open');
        $(this).parent('.menu-item-has-children').siblings().removeClass('open');
    }
    $('#onepagenav li a').on('click', function() {
        var popupMenuWrap = $('#mobilemenu-popup .mobile-menu-close, .header-offcanvasmenu .btn-close');
        if ($('#mobilemenu-popup, .header-offcanvasmenu').hasClass('offcanvas')) {
            popupMenuWrap.trigger('click');
            
        }
    });

   

    /* function resizeClassAdd() {
        if (window.matchMedia('(min-width: 992px)').matches) {
            $('body').removeClass('mobilemenu-active');
            $('#mobilemenu-popup').removeClass('offcanvas show').removeAttr('style');
            $('.header-mainmenu .offcanvas-backdrop').remove();
            $('.header-submenu').removeAttr('style');
            if ($('body').hasClass('onepage-template')) {
                $('.header-main-nav ').removeAttr('id');
            }
        } else {
            $('body').addClass('mobilemenu-active');
            $('#mobilemenu-popup').addClass('offcanvas');
            $('.menu-item-has-children > a').on('click', function(e) {
                e.preventDefault();
            });
            $('.header-main-nav ').attr('id', 'mobilemenu-popup');
        }
    }
    */

   
    function resizeClassAdd() {
        if (window.matchMedia('(min-width: 992px)').matches) {
            $('body').removeClass('mobilemenu-active');
            $('#mobilemenu-popup').removeClass('offcanvas show').removeAttr('style');
            $('.header-mainmenu .offcanvas-backdrop').remove();
            $('.bd-submenu').removeAttr('style');
        } else {
            $('body').addClass('mobilemenu-active');
            $('#mobilemenu-popup').addClass('offcanvas');
            $('.menu-item-has-children > a').on('click', function(e) {
                e.preventDefault();
            });
        }
    }


    $(window).on('resize', function() {
        resizeClassAdd();
    });
    
    resizeClassAdd();
}


function vitax_modalbox_portfolio(){
    
    "use strict";
    
    var modalBox    = jQuery('.vitax-project-modalbox');
    var button      = jQuery('.project-area .popup_info');
     var closePopup  = modalBox.find('.close');
    button.on('click',function(){
        var element     = jQuery(this);
        var parent      = element.closest('.project-grid-list');
        var details     = parent.find('.details_all_wrap').html();
        var title       = parent.find('.entry').data('title');
        var category    = parent.find('.entry').data('category');
        var content     = element.parent('.service-grid').find('.hidden_content').html();

        modalBox.addClass('opened');
        modalBox.find('.description_wrap').html(details);
        modalBox.find('.top_image').html(parent.find('.popup_info').html());
        modalBox.find('.portfolio_main_title').html('<h3>'+title+'</h3>'+'<span>'+category+'</span>');
        vitax_tm_popup();
        return false;
    });
     closePopup.on('click',function(){
        modalBox.removeClass('opened');
        modalBox.find('.description_wrap').html('');
         
        return false;
    });
}

function vitax_modalbox_project(){
    
    "use strict";
    
    var modalBox    = jQuery('.vitax-project-modalbox');
    var list        = jQuery('.project-area .project-grid');
    var closePopup  = modalBox.find('.close');
    
    list.each(function(){
        var element     = jQuery(this);
        var details     = element.find('.project-inner').html();
        var buttons     = element.find('.details .title a,.thumbnail a');
        var mainImage   = element.find('.main');
        var imgData     = mainImage.data('img-url');
        var title       = element.find('.title');
        var titleHref   = element.find('.title a').html();
        buttons.on('click',function(){
            jQuery('body').addClass('modal-2');
            modalBox.addClass('opened');
            modalBox.find('.description_wrap').html(details);
            mainImage = modalBox.find('.main');
            mainImage.css({backgroundImage: 'url('+imgData+')'});
            title = modalBox.find('.title');
            title.html(titleHref);
            
            return false;
        });
    });
    closePopup.on('click',function(){
        modalBox.removeClass('opened');
        modalBox.find('.description_wrap').html('');
        jQuery('body').removeClass('modal-2');
        return false;
    });
}



function vitax_tm_popup(){
    
    "use strict";

    jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
        jQuery(this).magnificPopup({
            delegate: 'a.zoom', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });

    });
    jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
        jQuery(this).magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });
    
    jQuery('.soundcloude_link').magnificPopup({
      type : 'image',
       gallery: {
           enabled: true, 
       },
    });
}

/*function vitax_modalbox_project(){
    
    "use strict";
    
    var modalBox    = jQuery('.vitax-project-modalbox');
    var button      = jQuery('.project-area .project-info');
    
    button.on('click',function(){
        var element     = jQuery(this);
        var parent      = element.closest('.project-grid');
        var details     = parent.find('.details_all_wrap').html();
        var title       = parent.find('.entry').data('title');
        var category    = parent.find('.entry').data('category');
        
        modalBox.addClass('opened');
        modalBox.find('.description_wrap').html(details);
        modalBox.find('.top_image').html(parent.find('.popup_info').html());
        modalBox.find('.portfolio_main_title').html('<h3>'+title+'</h3>'+'<span>'+category+'</span>');
        vitax_tm_popup();
    });
}
*/


function vitax_data_images() {
    "use strict";
    var data = jQuery('*[data-img-url]');
    data.each(function() {
        var element = jQuery(this);
        var url = element.data('img-url');
        element.css({
            backgroundImage: 'url(' + url + ')'
        });
    });
}

function v_service_popup() {
    "use strict";
    var modalBox = jQuery('.vitax_modalbox');
    var button = jQuery('.vitax_hero .service-grid a');
    var closePopup = modalBox.find('.close');
    button.on('click', function() {
        var element = jQuery(this);
        var elImage = element.find('.image').attr('src');
        var title = element.find('.title').text();
        var content = element.parent('.service-grid').find('.hidden_content').html();
        modalBox.addClass('opened');
        modalBox.find('.description_wrap').html(content);
        modalBox.find('.popup_informations').prepend('<div class="image"><img src="' + elImage + '" alt="" /></div>');
        vitax_data_images();
        modalBox.find('.popup_informations .image').after('<div class="title"><h3>' + title + '</h3></div>');
        return false;
    });
    closePopup.on('click', function() {
        modalBox.removeClass('opened');
        modalBox.find('.description_wrap').html('');
        return false;
    });
}

/*
function vitax_blog_modalbox_portfolio2(){
    
    "use strict";
    
    var modalBox    = jQuery('.vitax-blog-popupbox2');
    var button      = jQuery('.vitax_blog_tm_portfolio .popup_info');
    
    button.on('click',function(){
        var element     = jQuery(this);
        var parent      = element.closest('li');
        var details     = parent.find('.details_all_wrap').html();
        var title       = parent.find('.entry').data('title');
        var category    = parent.find('.entry').data('category');
        
        modalBox.addClass('opened');
        modalBox.find('.description_wrap').html(details);
        modalBox.find('.top_image').html(parent.find('.popup_info').html());
        modalBox.find('.portfolio_main_title').html('<h3>'+title+'</h3>'+'<span>'+category+'</span>');
         
    });
}*/


function vitax_blog_tm_imgtosvg(){
    
    "use strict";
    
    jQuery('img.html').each(function(){
        
        var jQueryimg       = jQuery(this);
        var imgClass        = jQueryimg.attr('class');
        var imgURL          = jQueryimg.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var jQuerysvg = jQuery(data).find('svg');

            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

            // Replace image with new SVG
            jQueryimg.replaceWith(jQuerysvg);

        }, 'xml');

    });
}

function vitax_blog_popupmodal_news(){
    
    "use strict";
    
    var modalBox    = jQuery('.vitax-blog-popupbox');
    var list        = jQuery('.vitax-blog-news .row .row-col');
    var closePopup  = modalBox.find('.close');
    
    list.each(function(){
        var element     = jQuery(this);
        var details     = element.find('.list_inner').html();
        var buttons     = element.find('.details .title a,.vitax-link,.vitax_blog_tm_read_more a');
        var mainImage   = element.find('.main');
        var imgData     = mainImage.data('img-url');
        var title       = element.find('.title');
        var titleHref   = element.find('.title a').html();
        buttons.on('click',function(){
            jQuery('body').addClass('modal-2');
            modalBox.addClass('opened');
            modalBox.find('.description_wrap').html(details);
            mainImage = modalBox.find('.main');
            mainImage.css({backgroundImage: 'url('+imgData+')'});
            title = modalBox.find('.title');
            title.html(titleHref);
            vitax_blog_tm_imgtosvg();
            return false;
        });
    });
    closePopup.on('click',function(){
        modalBox.removeClass('opened');
        modalBox.find('.description_wrap').html('');
        jQuery('body').removeClass('modal-2');
        return false;
    });
}


function bdonepagenav() {

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#onepagenav',
        offset: 500
    })
}

function HoverActive() {
        $('.service-grid-active').mouseenter(function() {
            var self = this;
            setTimeout(function() {
                $('.service-grid-active.active').removeClass('active');
                $(self).addClass('active');
            }, 0);
            
        });
    }

    function tiltAnimation() {

        var _tiltAnimation = $('.paralax-image');
        if (_tiltAnimation.length) {
            _tiltAnimation.tilt({
                max: 12,
                speed: 1e3,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                transition: !1,
                perspective: 1e3,
                scale: 1
            })
        }
    }
        
    function checkVal() { 
        $('input, textarea, select').each(function() {
            if($(this).val()){
                $(this).parents('.form-group').addClass('focused');
            }
        });
    }
        
function marqueImages() {
    $('.marque-images').each(function () {
        var t = 0;
        var i = 1;
        var $this = $(this);
        setInterval(function () {
            t += i;
            $this.css('background-position-x', -t + 'px');
        }, 30);
    });
}

function vitax_tm_projects() {
    
    "use strict";
    
    jQuery('.vitax-portfolio-animation-wrap').each(function() {
        jQuery(this).on('mouseenter', function() {
            if (jQuery(this).data('title')) {
                jQuery('.vitax-portfolio-titles').html(

                    '<span class="work-cat">' + jQuery(this).data('category') + '</span>' + '<h5 class="work-title">' + jQuery(this).data('title') + '</h5>' 

                    );
                jQuery('.vitax-portfolio-titles').addClass('visible');
            }

            jQuery(document).on('mousemove', function(e) {
                jQuery('.vitax-portfolio-titles').css({
                    left: e.clientX - 10,
                    top: e.clientY + 25
                });
            });
        }).on('mouseleave', function() {
            jQuery('.vitax-portfolio-titles').removeClass('visible');
        });
    });
}



function vitax_tm_cursor(){
    "use strict";
    
    var myCursor    = jQuery('.mouse-cursor');
    
    if(myCursor.length){
        if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
    }
};

function vitax_tm_my_load(){
    
    "use strict";
    
    var speed   = 500;
    setTimeout(function(){vitax_tm_preloader();},speed);
}

function vitax_tm_preloader(){
    
    "use strict";
    
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    var preloader = $('#preloader');
    
    if (!isMobile) {
        setTimeout(function() {
            preloader.addClass('preloaded');
        }, 800);
        setTimeout(function() {
            preloader.remove();
        }, 2000);

    } else {
        preloader.remove();
    }
}


    /*-------------------------------------
        Contact Form initiating
    -------------------------------------*/
 var wordsForm = $('.hero-banner-1, .hero-banner-5');
    if (wordsForm.length) {

    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    function changeWord() {
      var cw = wordArray[currentWord];
      var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }
      
      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }
      
      currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw, i) {
      setTimeout(function() {
            cw[i].className = 'letter out';
      }, i*80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(function() {
            nw[i].className = 'letter in';
      }, 340+(i*80));
    }

    function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      
      wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);
}


    var contactForm = $('#contact-form');
    if (contactForm.length) {
        contactForm.validator().on('submit', function(e) {
            var $this = $(this),
                $target = contactForm.find('.form-response');
            if (e.isDefaultPrevented()) {
                $target.html("<div class='alert alert-danger'><p>Please select all required field.</p></div>");
            } else {
                $.ajax({
                    url: "assets/php/contact-form.php",
                    type: "POST",
                    data: contactForm.serialize(),
                    beforeSend: function() {
                        $target.html("<div class='alert alert-info'><p>Loading ...</p></div>");
                    },
                    success: function(response) {
                        var res = JSON.parse(response);
                        console.log(res);
                        if (res.success) {
                            $this[0].reset();
                            $target.html("<div class='alert alert-success'><p>Message has been sent successfully.</p></div>");
                        } else {
                            if (res.message.length) {
                                var messages = null;
                                res.message.forEach(function(message) {
                                    messages += "<p>" + message + "</p>";
                                });
                                $target.html("<div class='alert alert-danger'><p>" + messages + "</p></div>");
                            }
                        }
                    },
                    error: function() {
                        $target.html("<div class='alert alert-danger'><p>Error !!!</p></div>");
                    }
                });
                return false;
            }
        });
    }

    /*-------------------------------------
    Section background image
    -------------------------------------*/
    $("[data-bg-image]").each(function() {
        var img = $(this).data("bg-image");
        $(this).css({
            backgroundImage: "url(" + img + ")"
        });
    });

    /*-------------------------------------
    Back To Top
    -------------------------------------*/
    var backTopBtn = $('#back-to-top');

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            backTopBtn.addClass('show');
        } else {
            backTopBtn.removeClass('show');
        }
    });

    backTopBtn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });


    /*-------------------------------------
    Sticky Menu
    -------------------------------------*/
    $(window).on('scroll', function() {
        // Sticky Class Add
        if ($('body').hasClass('sticky-header')) {
            var stickyPlaceHolder = $("#sticky-placeholder"),
                menu = $(".header-mainmenu"),
                menuH = menu.outerHeight(),
                
                targrtScroll =  150;
            if ($(window).scrollTop() > targrtScroll) {
                menu.addClass('sticky-menu');
                stickyPlaceHolder.height(menuH);
            } else {
                menu.removeClass('sticky-menu');
                stickyPlaceHolder.height(0);
            }
        }
    });

    /*--------------------------------------
    Offcanvas Menu Toggle 
    --------------------------------------*/

    $('#header-offcanvas').on('click', '.menu-item-has-children a', function(e) {

        var target = $(this).siblings('.submenu'),
            targetSiblings = $(this).parent('.menu-item-has-children').siblings().find('.submenu');

        $(target).slideToggle(400);

        $(targetSiblings).slideUp(400);

        $(this).parent('.menu-item-has-children').toggleClass('open');
        $(this).parent('.menu-item-has-children').siblings().removeClass('open');

    });


    /*--------------------------------------
    Menu Active Class Add
    --------------------------------------*/
    $('.mainmenu li a').each(function() {
        var $this = $(this),
            currentPage = location.pathname.split("/"),
            current = currentPage[currentPage.length - 1];

        if ($this.attr('href') === current) {
            $this.addClass('active');
            $this.parents('.menu-item-has-children').addClass('menu-item-open');
        }
    });


    /*--------------------------------------
    Toogle Button
    --------------------------------------*/
    $('.toggle-btn').on('click', function(e) {

        var target = $(this).parent().siblings('.toogle-box');
        var target2 = $(this).parent();
        $(target).slideToggle();
        $(target2).toggleClass('open');
    });

    $('.search-toggler').on('click', function(e) {

        var target = $(this).siblings('.search-open');
        var target2 = $(this).parent();
        $(target).toggleClass('open');
        $(target2).toggleClass('open');
    });

    /*--------------------------------------
    Isotope initialization
    --------------------------------------*/
    var $container = $(".isotope-wrap");
    if ($container.length > 0) {
        var $isotope;
        var blogGallerIso = $(".isotope-container", $container).imagesLoaded(function() {
            $isotope = $(".isotope-container", $container).isotope({
                filter: "*",
                transitionDuration: "1s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    transform: "scale(1)",
                    opacity: 1
                }
            });
        });
        $container.find(".isotope-tab-button").on("click", "a", function() {
            var $this = $(this);
            $this
                .parent(".isotope-tab-button")
                .find("a")
                .removeClass("current");
            $this.addClass("current");
            var selector = $this.attr("data-filter");
            $isotope.isotope({
                filter: selector
            });
            return false;
        });
    }

    /*--------------------------------------
    Slick initialization
    --------------------------------------*/
    $('.slick-activation').slick();

    /*--------------------------------------
    Price Range Slider
    --------------------------------------*/
    $("#range-slide").slider({
        range: true,
        min: 0,
        max: 5000,
        values: [0, 3000],
        slide: function(event, ui) {
            $("#price-amount").val("$" + ui.values[0] + "  $" + ui.values[1]);
        }
    });
    $("#price-amount").val("$" + $("#range-slide").slider("values", 0) +
        "  $" + $("#range-slide").slider("values", 1));

    /*-------------------------------------
        Progress Circle
    -------------------------------------*/
    const circle = new CircularProgressBar('circle-pie');

    /*-------------------------------------
        Counter
    -------------------------------------*/
    var _counter = $('.counter');
    if (_counter.length) {
        _counter.counterUp({
            delay: 10,
            time: 1000,
            triggerOnce: true
        });
    }

    /*-------------------------------------
        Magnific Popup Activation
    -------------------------------------*/
    /*var yPopup = $(".popup-youtube");
    if (yPopup.length) {
        yPopup.magnificPopup({
            disableOn: 300,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    } */


   
    /*-------------------------------------
        Sal Activation
    -------------------------------------*/
    sal({
        threshold: 0.05,
        once: true
    });

    if ($(window).outerWidth() < 1025) {
        var scrollAnimations = sal();
        scrollAnimations.disable();
    }
    /*-------------------------------------
        CountDown Init
    -------------------------------------*/
    var eventCounter = $(".countdown");
    if (eventCounter.length) {
        eventCounter.countdown("2022/11/01", function(e) {
            $(this).html(
                e.strftime(
                    "<div class='countdown-section'><div><div class='countdown-number'>%D</div> <div class='countdown-unit'>Day%!D</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%H</div> <div class='countdown-unit'>Hour%!H</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%M</div> <div class='countdown-unit'>Minutes</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%S</div> <div class='countdown-unit'>Seconds</div> </div></div>"
                )
            );
        });
    }

    /*-------------------------------------
        Quantity Ranger
    -------------------------------------*/
    $('.quantity-btn').on('click', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*-------------------------------------
       PagePiling Init
    -------------------------------------*/
    if (window.matchMedia('(min-width: 992px)').matches) {
        if ($('#pagepiling').length) {
            $('#pagepiling').pagepiling({
                direction: 'vertical',
                menu: '.pp-menu',
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
                loopTop: true,
                loopBottom: true,
                scrollingSpeed: 500,
                keyboardScrolling: true,
                navigation: false,
                easing: 'easeInQuart'
            });
        }
    }

    if (window.matchMedia('(max-width: 991px)').matches) {
        $('#pagepiling-stylesheet').remove();
        $('#pagepiling-script').remove();
    }

    /*-------------------------------------
       Select 2 Init
    -------------------------------------*/
    if ($('select.select2').length) {
        $('select.select2').select2({
            theme: 'classic',
            dropdownAutoWidth: true,
            width: '100%',
            minimumResultsForSearch: Infinity
        });
    }
    /*-------------------------------------
        Google Map
    -------------------------------------*/
    if ($("#googleMap").length) {
        window.onload = function() {
            var styles = [{
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#a5b1af'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                     color: '#a5b1af'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#a5b1af'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#a5b1af'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    
                    color: '#a5b1af'
                }]
            }];
            var options = {
                mapTypeControlOptions: {
                    mapTypeIds: ['Styled']
                },
                center: new google.maps.LatLng(-37.81618, 144.95692),
                zoom: 10,
                disableDefaultUI: true,
                mapTypeId: 'Styled'
            };
            var div = document.getElementById('googleMap');
            var map = new google.maps.Map(div, options);
            var styledMapType = new google.maps.StyledMapType(styles, {
                name: 'Styled'
            });
            map.mapTypes.set('Styled', styledMapType);

            var marker = new google.maps.Marker({
                position: map.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                icon: 'assets/media/map-marker.png',
                map: map
            });
        };
    }

})(jQuery);



