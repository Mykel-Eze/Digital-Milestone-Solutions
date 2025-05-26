<template>
    <footer>
      <div class="row rel">
        <div class="container">
          <div class="footer-text-wrapper max-w-[898px] mt-[60px] mb-[15px] mx-auto text-center">
            <div class="footer-logo flex justify-center mt-[50px] mb-[30px]">
              <img src="~/assets/images/DMS-logo-yellow.png" alt="DMS" class="w-[150px] md:w-[200px]">
            </div>

            <div class="footer-tnc-wrapper my-[30px] text-[14px]">
                <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
                <span>|</span>
                <nuxt-link to="/terms">Terms of Service</nuxt-link>
            </div>

            <div class="contacts-wrapper flex-div gap-[40px] justify-center my-[30px] text-[16px] md:text-[18px]">
                <div class="contact-item-wrapper flex-div gap-[5px]">
                    <div class="contact-item flex-div gap-[5px]">
                      <img src="~/assets/images/phone.svg" alt="phone">
                      <div>
                          <a href="tel:+2349164968940" class="text-[20px] md:text-[22px]">+234 916 496 8940</a>, 
                          <a href="tel:+2349055723818" class="text-[20px] md:text-[22px]">+234 905 572 3818</a>
                      </div>
                    </div>
                    <span class="hidden-xs">|</span>
                    <div class="contact-item flex-div gap-[5px]">
                        <img src="~/assets/images/mail.svg" alt="mail">
                        <a href="mailto:digitalmilestone247@gmail.com" target="_blank" rel="noopener noreferrer">
                          digitalmilestone247@gmail.com
                        </a>
                    </div>
                </div>
            </div>
  
            <div class="social-wrapper flex gap-8 justify-center my-[30px]">
              <a href="https://linkedin.com" class="social-item" target="_blank" rel="noopener noreferrer">
                <img src="~/assets/images/linkedin.svg" alt="linkedin">
              </a>
              <a href="https://instagram.com" class="social-item" target="_blank" rel="noopener noreferrer">
                <img src="~/assets/images/instagram.svg" alt="instagram">
              </a>
              <a href="https://x.com" class="social-item" target="_blank" rel="noopener noreferrer">
                <img src="~/assets/images/x.svg" alt="x">
              </a>
              <a href="https://facebook.com" class="social-item" target="_blank" rel="noopener noreferrer">
                <img src="~/assets/images/facebook.svg" alt="facebook">
              </a>
            </div>

            <div class="footer-copyright-div text-[#ffffffa3] text-[14px]">
              © {{ new Date().getFullYear() }} Digital Milestone Solutions. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script lang="ts" setup></script>
  
<style src="~/assets/css/footer.css"></style>
