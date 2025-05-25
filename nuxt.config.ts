// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/image', '@nuxt/eslint'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/DMS-icon.jpg' }
      ],
      title: 'Digital Milestone Solutions',
      // titleTemplate: '%s - Digital Milestone Solutions',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: 'bg-white',
      },
      meta: [
        { 
          name: 'author', 
          content: 'Digital Milestone Solutions' },
        {
          name: 'description',
          content: 'Digital tools and creative strategies for small businesses ready to scale.',
        },
        {
          name: 'Keywords',
          content: 'digital milestone solutions, digital tools, creative strategies, small business, scale',
        },
        { name: 'theme-color', content: '#fec007' },
      ]
    },
  },
  css: [
    // 'aos/dist/aos.css',
    'materialize-css/dist/css/materialize.min.css',
    '@/assets/css/fonts.css',
    '@/assets/css/styles.css',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ]
})