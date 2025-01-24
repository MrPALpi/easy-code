<script>
import { defineAsyncComponent, shallowRef } from 'vue'
import { layouts } from '../index.js'

export default {
  name: 'AppLayout',
  setup() {
    return {
      layout: shallowRef(defineAsyncComponent(layouts.DEFAULT.component)),
    }
  },
  created() {
    this.$watch(
      () => this.$route.meta.layout,
      async (newValue) => {
        const layoutName = newValue.component || layouts['DEFAULT'].component
        this.layout = defineAsyncComponent(layoutName)
      },
    )
  },
}
</script>

<template>
  <component :is="layout">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </component>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-left-enter-active {
  transition: all 0.2s ease-out;
}

.slide-right-leave-active,
.slide-left-leave-active {
  transition: all 0.2s ease-in;
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
