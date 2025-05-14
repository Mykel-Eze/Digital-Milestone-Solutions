<template>
    <div id="app-wrapper">
        <Navbar />
        <main id="main-contents-wrapper">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script lang="ts" setup>
onMounted(() => {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav.main-nav');
        if (nav) {
            nav.classList.toggle('scrolled-nav', window.scrollY > 50);
        }
    });
});
</script>

<style></style>