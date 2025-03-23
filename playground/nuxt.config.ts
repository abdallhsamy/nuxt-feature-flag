export default defineNuxtConfig({
  modules: [
    '../src/module',
    '../src',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-03-15',
  featureFlags: {
    storage: 'api',
    apiUrl: '/api/backend-flags',
    cache: true,
  },
})
