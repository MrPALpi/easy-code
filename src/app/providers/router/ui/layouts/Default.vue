<template>
  <main class="main container content">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 40px;
  padding-bottom: 40px;
}

.main {
  position: relative;
}
</style>
