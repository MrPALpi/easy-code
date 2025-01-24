<script>
import Toast from 'primevue/toast'
import AppLayout from './providers/router/ui/layouts/AppLayout.vue'

export default {
  components: {
    Toast,
    AppLayout,
  },
}
</script>

<template>
  <toast />
  <app-layout />
</template>
