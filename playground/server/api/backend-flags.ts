import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return {
    new_dashboard: true,
    beta_feature: true,
  }
})
