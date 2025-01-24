<template>
  <div class="character-page">
    <breadcrumb
      :model="[{ label: 'Персонажи', to: { name: 'characters' } }, { label: character?.name }]"
      class="character-page__breadcrumb"
    >
      <template #item="{ item }">
        <router-link :to="item.to || ''" class="character-page__breadcrumb-item">{{
          item.label
        }}</router-link>
      </template>
    </breadcrumb>
    <character-card :character="character" class="character-page__card" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from 'primevue/breadcrumb'
import { CharacterCard, characterAPI } from '@/entites/characters'
export default {
  name: 'CharacterDetailsPage',
  components: { Breadcrumb, CharacterCard },
  data() {
    return {
      character: {},
    }
  },
  methods: {
    async fetchCharacter() {
      const searchedCharacter = this.getCharacter

      if (searchedCharacter === null) {
        this.character = await characterAPI.getCharacterById(this.$route.params.id)
      } else {
        this.character = searchedCharacter
      }
    },
  },
  computed: {
    ...mapGetters('charactersStore', ['getCharacterById']),
    getCharacter() {
      return this.getCharacterById(parseInt(this.$route.params.id))
    },
  },
  created() {
    this.fetchCharacter()
  },
}
</script>

<style lang="scss" scoped>
.character-page {
  @include flex-list-column(25px);
}

.character-page__breadcrumb {
  background-color: transparent;
  padding-left: 0;
  padding-right: 0;
}

.character-page__breadcrumb-item {
  white-space: nowrap;
}
</style>
