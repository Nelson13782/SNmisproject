// script.js
// Wait for page to load
    document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded!');

// Initialize functions
    initSmoothScroll();
    initMobileMenu();
    });
    
// Smooth scrolling for anchor links
    function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
    target.scrollIntoView({
    behavior: 'smooth'
    });
    }
    });
    });
    }



// Mobile menu toggle
    function initMobileMenu() {
    const menuBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    if (menuBtn) {
    menuBtn.addEventListener('click', function(){
        nav.classList.toggle('show');
    });
    }
    }




//Scroll back to top BEGIN
    (function($) { "use strict";
   $(document).ready(function(){"use strict";
    var progressPath = document.querySelector('.back2topScroll path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';    
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);  
    var offset = 70;
    var duration = 500;
    jQuery(window).on('scroll', function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.back2topScroll').addClass('showProgress');
      } else {
        jQuery('.back2topScroll').removeClass('showProgress');
      }
    });        
    jQuery('.back2topScroll').on('click', function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
    })
    });
    })(jQuery); 
//Scroll back to top END


// Get the button
    let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
      }

// When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }



    function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
    target.scrollIntoView({
    behavior: 'smooth'
    });
    }
    });
    });
    }
