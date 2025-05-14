<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col s12 m4">
                    <h5 class="footer-title">Digital Milestone Solutions</h5>
                    <p>Smarter systems. Stronger brands. Digital tools and creative strategies for small businesses
                        ready to scale.</p>
                </div>
                <div class="col s12 m4">
                    <h5 class="footer-title">Quick Links</h5>
                    <ul>
                        <li><nuxt-link to="/">Home</nuxt-link></li>
                        <li><nuxt-link to="/about">About Us</nuxt-link></li>
                        <li><nuxt-link to="/services">Services</nuxt-link></li>
                        <li><nuxt-link to="/academy">Academy</nuxt-link></li>
                        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                    </ul>
                </div>
                <div class="col s12 m4">
                    <h5 class="footer-title">Get In Touch</h5>
                    <p>
                        <i class="material-icons tiny">phone</i> 09164968940, 09055723818<br>
                        <i class="material-icons tiny">email</i> digitalmilestone247@gmail.com
                    </p>
                    <div class="footer-social">
                        <a href="#"><i class="material-icons">facebook</i></a>
                        <a href="#"><i class="material-icons">linkedin</i></a>
                        <a href="#"><i class="material-icons">photo_camera</i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                © {{ new Date().getFullYear() }} Digital Milestone Solutions
                <a class="white-text right" href="#">Privacy Policy</a>
                <a class="white-text right" href="#" style="margin-right: 15px;">Terms of Service</a>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup></script>