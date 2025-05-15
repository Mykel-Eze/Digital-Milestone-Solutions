<template>
    <footer>
      <div class="row">
        <div class="container">
          <div class="footer-text-wrapper max-w-[898px] mt-[60px] mb-[40px] mx-auto text-center">
            <div class="footer-copyright-div text-[#212337] text-[20px] md:text-[22px]">
              © {{ new Date().getFullYear() }} DMS. All rights reserved
            </div>
            <p class="footer-text mt-4 text-[18px]">
                Empowering businesses with seamless document management solutions. Our platform streamlines
                workflows, enhances collaboration, and ensures your documents are secure and easily 
                accessible—helping your organization achieve greater efficiency and productivity.
            </p>
  
            <div class="footer-logo flex justify-center my-[50px]">
              <img src="~/assets/images/dms-logo.png" alt="DMS" class="w-[150px] md:w-[200px]">
            </div>
  
            <div class="social-wrapper flex gap-8 justify-center">
              <a href="https://linkedin.com" class="social-item">
                <img src="~/assets/images/linkedin.svg" alt="linkedin">
              </a>
              <a href="https://instagram.com" class="social-item">
                <img src="~/assets/images/instagram.svg" alt="instagram">
              </a>
              <a href="https://x.com" class="social-item">
                <img src="~/assets/images/x.svg" alt="x">
              </a>
              <a href="https://facebook.com" class="social-item">
                <img src="~/assets/images/facebook.svg" alt="facebook">
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script lang="ts" setup></script>
  
<style src="~/assets/css/footer.css"></style>
