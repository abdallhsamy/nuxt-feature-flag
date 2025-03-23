# `nuxt-feature-flag`

A lightweight **feature flag** module for **Nuxt 3**, enabling dynamic feature toggling with multiple storage backends.

## 🚀 **Features**
✅ Works in **Client-Side & Server-Side**  
✅ Supports **local, API, or Firebase** as storage  
✅ **Optimized for performance** (caching enabled)  
✅ **Role-based flags** for user-specific features  
✅ **TypeScript support**  
✅ Seamless **Pinia integration**

---

## 📦 **Installation**
```sh
npm install nuxt-feature-flag
```

---

## 🛠 **Setup**
Add the module to `nuxt.config.ts`:
```ts
export default defineNuxtConfig({
  modules: ['nuxt-feature-flag'],
  featureFlags: {
    storage: 'api',  // Options: 'local', 'api'
    apiUrl: 'https://your-backend.com/flags', // API for fetching feature flags
    cache: true
  }
});
```

---

## 🔥 **Usage**

### **1️⃣ In Vue Components**
```vue
<script setup lang="ts">
import { useFeatureFlag } from '#imports';

const isNewFeatureEnabled = useFeatureFlag('new_dashboard');
</script>

<template>
  <div>
    <h1>Welcome to our App</h1>
    <NewFeature v-if="isNewFeatureEnabled" />
    <OldFeature v-else />
  </div>
</template>
```

---

### **2️⃣ In Server Middleware**
```ts
export default defineEventHandler((event) => {
  const isFeatureEnabled = useFeatureFlag('beta_feature');
  if (!isFeatureEnabled) {
    return { error: 'Feature disabled' };
  }
  return { success: 'Feature available' };
});
```

---

### **3️⃣ API Route for Feature Flags**
```ts
import { defineEventHandler } from 'h3';
import type { FeatureFlagOptions } from '#imports';

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const featureFlags: FeatureFlagOptions = config.public.featureFlags as FeatureFlagOptions;

  if (featureFlags.storage === 'api' && featureFlags.apiUrl) {
    return await $fetch(featureFlags.apiUrl);
  }

  return {
    new_dashboard: true,
    beta_feature: false,
  };
});
```

---

## 🏗 **Advanced Features**
- **Role-Based Feature Flags**  
  Extend to conditionally enable features per user role.
- **Pinia Store Integration**  
  Store feature flags globally.
- **Cache Optimization**  
  Store API responses in Redis or local storage.

---

## 🛠 **Contributing**
1. Fork the repository
2. Create a feature branch (`feat/your-feature`)
3. Submit a pull request

---

## 📜 **License**
MIT License.

---

This module provides a **powerful, flexible, and high-performance** feature flag system for Nuxt 3. 🚀

Need more features? Open an issue! 😊
