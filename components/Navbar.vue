<template>
    <div id="nav-wrapper">
        <!---=== Add .nav-2 to give it a white-background mode ===--->
        <nav class="main-nav">
            <div class="container full-height">
                <div class="nav-wrapper">
                    <nuxt-link to="/" class="brand-logo" @click="scrollToTop()">
                        <img src="~/assets/images/DMS-logo-yellow.png" alt="DMS" class="logo">
                    </nuxt-link>

                    <ul id="nav-mobile-2" class="dn-mobile ul-nav">
                        <li>
                            <a href="#" data-target="slide-out" class="sidenav-trigger sec-color right">
                                <MenuIcon />
                            </a>
                        </li>
                    </ul>

                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            <nuxt-link to="/#about">
                                <span>About</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/#services">
                                <span>Services</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/#academy">
                                <span>Academy</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/#testimonials">
                                <span>Testimonials</span>
                            </nuxt-link>
                        </li>
                    </ul>

                    <ul class="right hide-on-med-and-down">
                        <li>
                            <a href="https://calendly.com/digitalmilestone247/30min" target="_blank" rel="noopener noreferrer" class="get-started-btn btn hover-scale">
                                Book a Free Discovery Call
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <ul id="slide-out" class="sidenav">
            <div class="sidenav-logo">
                <nuxt-link to="/" class="sidenav-close" @click="scrollToTop()">
                    <img src="~/assets/images/DMS-logo-yellow.png" alt="DMS" class="logo">
                </nuxt-link>
            </div>
            <ul class="sidenav-flex">
                <li>
                    <nuxt-link to="/#about" class="sidenav-close">
                        <span>About</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/#services" class="sidenav-close">
                        <span>Services</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/#academy" class="sidenav-close">
                        <span>Academy</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/#testimonials" class="sidenav-close">
                        <span>Testimonials</span>
                    </nuxt-link>
                </li>
                <li class="nav-btn-wrappr">
                    <a href="https://calendly.com/digitalmilestone247/30min" target="_blank" rel="noopener noreferrer" class="get-started-btn btn sidenav-close">
                        Book a Free Discovery Call
                    </a>
                </li>
            </ul>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import M from 'materialize-css';

onMounted(() => {
    const elemsSidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elemsSidenav, {
        edge: 'right',
    });

    const elemsScrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elemsScrollspy);
});

function scrollToTop() {
    window.scrollTo(0, 0);
}
</script>

<style scoped src="~/assets/css/navbar.css"></style>

<style>
nav.main-nav.scrolled-nav ul>li>a svg path,
nav.main-nav.nav-2 ul>li>a svg path {
    stroke: #1A242D;
}

nav.main-nav.scrolled-nav ul>li>a:hover svg path {
    stroke: var(--pry-color);
}

nav.main-nav .sidenav-trigger svg {
    position: relative;
    top: 4px;
    width: 30px;
    height: auto;
}

.sidenav svg path {
    stroke: #1A242D;
}
</style>
