/**
 * @module main
 */
/* global jQuery */

/**
 * Self-invoking function to configure smooth scrolling.
 */
(($) => {
  // Viewport height

  /**
   * Set the --vh style property to be exactly equal to 1 viewport unit in pixels.
   */
  const getViewportHeight = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
  }

  // Set debounced getViewportHeight on resize, then invoke immediately.
  $(window).resize(_.debounce(getViewportHeight, 100, { leading: true, trailing: true }))
  getViewportHeight()

  // Navbar hiding.

  // Navbar constants
  const NAVBAR_SPLASH_SCROLLED = 'navbar-splash-scrolled'
  const nav = $('#navbar.navbar-splash')

  if (nav.length) {
    /**
     * Collapse navbar if greater than some offset from the top.
     */
    const navbarSplashTop = () => {
      if (nav.offset().top > 0) {
        nav.addClass(NAVBAR_SPLASH_SCROLLED)
      } else {
        nav.removeClass(NAVBAR_SPLASH_SCROLLED)
      }
    }

    // Set debounced navbar splash top on scroll, then invoke immediately
    $(window).scroll(_.debounce(navbarSplashTop, 100, { leading: true, trailing: true }))
    navbarSplashTop()
  }

  // Configure smooth scrolling
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    const locationPathname = location.pathname.replace(/^\//, '')
    const thisPathname = this.pathname.replace(/^\//, '')

    if (locationPathname === thisPathname && location.hostname === this.hostname) {
      let target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')

      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, 'easeInOutExpo')
        return false
      }
    }
  })

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide')
  })
})(jQuery)
