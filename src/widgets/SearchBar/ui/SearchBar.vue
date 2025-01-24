<template>
  <float-label variant="in">
    <input-text @input="onInput" :fluid="true" id="search" size="large" />
    <label for="search">search by name</label>
  </float-label>
</template>

<script>
import { mapMutations } from 'vuex'
import { useDebounce } from '@/shared/lib'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'

export default {
  name: 'SearchBar',
  components: { FloatLabel, InputText },
  props: {
    debounce: {
      type: Number,
      default: 800,
    },
  },

  data() {
    return {
      value: '',
    }
  },

  methods: {
    ...mapMutations('charactersStore', ['setName']),

    handleInput({ target: { value } }) {
      this.setName(value || null)
    },
  },
  computed: {
    onInput() {
      return useDebounce(this.handleInput, this.debounce)
    },
  },
}
</script>

<style lang="scss" scoped></style>
