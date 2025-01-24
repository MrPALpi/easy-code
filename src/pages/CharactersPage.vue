<template>
  <div class="characters-page">
    <search-bar />
    <character-list />
    <paginator :first="first" :rows="20" :totalRecords="count" @page="setPageData" />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { SearchBar } from '@/widgets/SearchBar'
import { CharacterList } from '@/widgets/CharacterList'
import Paginator from 'primevue/paginator'
export default {
  name: 'CharactersPage',
  components: {
    SearchBar,
    CharacterList,
    Paginator,
  },
  methods: {
    ...mapActions('charactersStore', ['fetchCharacters']),
    ...mapMutations('charactersStore', ['setPage', 'setName']),
    setPageData({ page }) {
      this.setPage(page + 1)
    },
  },
  computed: {
    ...mapState('charactersStore', ['count', 'page', 'name']),
    first() {
      return (this.page - 1) * 20
    },
    pageAndSearch() {
      return [this.page, this.name]
    },
  },
  watch: {
    pageAndSearch: {
      handler() {
        this.fetchCharacters().then(() => {
          window.scrollTo(0, 0)
        })
      },
      immediate: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.characters-page {
  @include flex-list-column(25px);
}
</style>
