import site from './site';
const { name, description, url, keywords, defaultLocale, identity, trailingSlash } = site;
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/devtools', '@vueuse/nuxt', "nuxt-aos", '@nuxt/image', '@nuxtjs/seo', 'nuxt-swiper', '@nuxtjs/critters', '@nuxtjs/sitemap', '@pinia/nuxt', 'nuxt-schema-org', 'pinia-plugin-persistedstate/nuxt'],

  app: {
    baseURL: '/',
  },

  runtimeConfig: {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_SECURE: process.env.MAIL_SECURE,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    NHN_APP_KEY: process.env.NHN_APP_KEY,
    NHN_SECRET_KEY: process.env.NHN_SECRET_KEY,
    NHN_SENDER_NUM: process.env.NHN_SENDER_NUM,
    JWT_SECRET: process.env.JWT_SECRET,
  },

  // routeRules: {
  //   '/admin/**': {
  //     robots: false,
  //     cors: true,
  //   },
  //   '/login/**': {
  //     robots: false,
  //   },
  // },

  critters: {
    config: {
      preload: 'swap',
    },
  },

  build: {
    transpile: [],
  },

  // sentry 설정
  vite: {
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    
    plugins: [
      sentryVitePlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: 'enmedia-corp',
        project: 'yklawfirm_divorce',
        release: {
          name: 'yklawfirm_divorce',
        },
        sourcemaps: {
          ignore: ['node_modules', 'nuxt.config.ts'],
        },
      }),
    ],
  },

  image: {
    dir: 'public',
    format: ['webp, png, jpg'],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  site: {
    url,
    name,
    keywords,
    description,
    defaultLocale,
    identity,
    trailingSlash,
  },

  sitemap: {
    exclude: ['/admin/**', '/login/**'],
  },

  robots: {
    blockNonSeoBots: true,
  },

  aos: {
    once: false,
  },

  ogImage: {
    enabled: false,
  },
});
