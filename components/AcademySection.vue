<!-- components/AcademySection.vue -->
<template>
    <section id="academy" class="section scrollspy">
        <div class="row">
            <div class="container">
                <div class="section-header center mb-[60px]">
                    <h2 class="section-title mag-0">Digital Milestone Academy</h2>
                    <p class="section-desc text-[#83869D]">Train. Upskill. Empower.</p>
                </div>
                <p class="more-section-desc flow-text">
                    Our sub-brand, Digital Milestone Academy, offers hands-on, practical training for 
                    individuals and teams looking to level up their digital skills.
                </p>
                <p class="more-section-desc flow-text mt-5">Signature Programs Include:</p>
                <ul class="academy-item-wrapper">
                    <li class="academy-item flex-div">
                        <img src="~/assets/images/technical-support.png" alt="academy-icon" class="acdemy-item-icon">
                        <div class="academy-item-txts">
                            <div class="academy-item-title">Virtual Assistant Essentials</div>
                            <div class="academy-item-desc">30-Day Sprint to master essential VA skills</div>
                        </div>
                    </li>
                    <li class="academy-item flex-div">
                        <img src="~/assets/images/social-media-marketing.png" alt="academy-icon" class="acdemy-item-icon">
                        <div class="academy-item-txts">
                            <div class="academy-item-title">Social Media Design Fundamentals</div>
                            <div class="academy-item-desc">Create eye-catching social media graphics</div>
                        </div>
                    </li>
                    <li class="academy-item flex-div">
                        <img src="~/assets/images/video-editing.png" alt="academy-icon" class="acdemy-item-icon">
                        <div class="academy-item-txts">
                            <div class="academy-item-title">Smartphone Video Editing Masterclass</div>
                            <div class="academy-item-desc">Professional videos using just your phone</div>
                        </div>
                    </li>
                    <li class="academy-item flex-div">
                        <img src="~/assets/images/motion.png" alt="academy-icon" class="acdemy-item-icon">
                        <div class="academy-item-txts">
                            <div class="academy-item-title">Motion Graphics for Business</div>
                            <div class="academy-item-desc">Advanced techniques for engaging content</div>
                        </div>
                    </li>
                </ul>

                <div class="flow-text center">
                    Perfect for early-career professionals, remote teams & business owners who want to DIY
                    smartly.
                </div>
                <div class="mt-[40px] flex justify-center">
                    <nuxt-link to="/academy" class="form-trigger-btn hover-scale">
                        Browse Academy Programs
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
</script>