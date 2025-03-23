export type FeatureFlags = Record<string, boolean>

export type FeatureFlagOptions = {
  storage?: 'local' | 'api' | 'firebase'
  apiUrl?: string
  cache?: boolean
  cacheDuration?: number
}
