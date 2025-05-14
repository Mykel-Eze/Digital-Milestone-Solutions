<!-- components/CtaSection.vue -->
<template>
    <section class="cta-section">
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2 center-align">
                    <h2>Ready to Level Up Your Business?</h2>
                    <p class="flow-text">
                        Whether it's smarter systems or standout content, we help you build a business that runs
                        smoothly and shows up powerfully.
                    </p>
                    <div class="cta-buttons">
                        <a href="/contact" class="btn-large waves-effect waves-light white blue-text text-darken-2">
                            Book a Free Discovery Call
                        </a>
                        <a href="/services" class="btn-large waves-effect waves-light deep-orange accent-2">
                            Explore Services
                        </a>
                        <a href="/academy" class="btn-large waves-effect waves-light white blue-text text-darken-2">
                            Visit Digital Milestone Academy
                        </a>
                    </div>
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

<style scoped>
.cta-buttons {
    margin-top: 30px;
}

.cta-buttons .btn-large {
    margin: 10px;
}
</style>