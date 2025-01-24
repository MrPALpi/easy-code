<template>
  <div class="character-list">
    <template v-if="isLoading">
      <Skeleton v-for="i in 20" :key="`skeleton_${i}`" height="190px" />
    </template>
    <template v-else-if="getCharacters.length">
      <transition-group name="list">
        <character-item
          v-for="character in getCharacters"
          :key="character"
          :character="character"
        />
      </transition-group>
    </template>
    <template v-else>Персонажей не найдено</template>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Skeleton from 'primevue/skeleton'
import { CharacterItem } from '@/entites/characters'
export default {
  name: 'CharacterList',
  components: {
    Skeleton,
    CharacterItem,
  },
  computed: {
    ...mapState('charactersStore', ['isLoading']),
    ...mapGetters('charactersStore', ['getCharacters']),
  },
}
</script>

<style lang="scss" scoped>
.character-list {
  @include flex-list-column(15px);

  flex: auto;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.4s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(20%);
}

.list-leave-active {
  max-width: 1430px;
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
  position: absolute;
}
</style>
