import type { FeatureFlagOptions } from '../types'
import { ref, computed, useAsyncData, useRuntimeConfig } from '#imports'

const featureFlags = ref<Record<string, boolean>>({})

export function useFeatureFlag(flag: string) {
  const config = useRuntimeConfig()

  const { storage, apiUrl } = config.public.featureFlags as FeatureFlagOptions

  const { data } = useAsyncData<Record<string, boolean>>('feature-flags', async () => {
    if (storage === 'api' && apiUrl) {
      return await $fetch<Record<string, boolean>>(apiUrl)
    }

    return {
      new_dashboard: true,
      beta_feature: false,
    }
  })

  featureFlags.value = data.value ?? {}

  return computed(() => featureFlags.value[flag] ?? false)
}
