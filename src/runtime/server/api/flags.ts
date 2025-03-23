import { defineEventHandler } from 'h3'
import type { FeatureFlagOptions } from '~/src/runtime/types'

export default defineEventHandler(() => {
  const config = useRuntimeConfig()

  const { storage, apiUrl }: FeatureFlagOptions = config.public.featureFlags as FeatureFlagOptions

  if (storage === 'api' && apiUrl) {
    return $fetch(apiUrl)
  }

  return {
    new_dashboard: true,
    beta_feature: false,
  }
})
