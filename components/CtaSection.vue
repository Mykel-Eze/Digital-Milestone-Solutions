<!-- components/CtaSection.vue -->
<template>
    <section id="cta"> 
        <div class="container">
            <div class="cta-block" data-aos="fade-up">
                <img src="~/assets/images/cta-widget-bg-pattern.png" alt="bg-pattern" class="bg-pattern" />
                <div class="rel center-cta">
                    <h2>Ready to Level Up Your Business?</h2>
                    <p class="flow-text">
                        Whether it's smarter systems or standout content, we help you build a business that runs
                        smoothly and shows up powerfully.
                    </p>

                    <ButtonGroup />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CtaSection'
}
</script>

<style scoped src="~/assets/css/cta-widget.css"></style>

<style>
.cta-block .button-group {
    justify-content: center;
}
.cta-block .button-group .form-trigger-btn-2 {
    border-color: black;
    color: black;
}
.cta-block .button-group .form-trigger-btn {
    background-color: black;
    color: white;
    border-color: black;
}
</style>