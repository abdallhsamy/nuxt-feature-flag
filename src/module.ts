import { defineNuxtModule, createResolver, addImportsDir, addServerHandler } from '@nuxt/kit'

export type ModuleOptions = object

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-feature-flags',
    configKey: 'nuxtFeatureFlags',
  },
  defaults: {
    storage: 'local',
    cache: true,
    cacheDuration: 300,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    addImportsDir(resolver.resolve('runtime/composables'))

    addServerHandler({
      route: '/api/flags',
      handler: resolver.resolve('runtime/server/api/flags'),
    })

    nuxt.options.runtimeConfig.public.featureFlags = options
  },
})
