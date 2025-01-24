<template>
  <card class="character-item" :fluid="true">
    <template #title>
      <div class="character-item__title">
        <i class="pi pi-external-link" />
        <router-link
          :to="{ name: 'character', params: { id: character.id } }"
          class="character-item"
        >
          {{ character.name }}
        </router-link>
      </div>
    </template>
    <template #content>
      <div class="character-item__wrapper">
        <img class="character-item__img" :src="character.image" :alt="character.name" />
        <div class="character-item__content">
          <div
            v-for="item in ['status', 'species', 'gender', 'location', 'origin']"
            :key="item"
            :class="'character-item__' + item"
          >
            {{ item }}: {{ character[item]?.name || character[item] }}
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script>
import Card from 'primevue/card'
export default {
  name: 'CharacterItem',
  components: {
    Card,
  },
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.character-item {
  display: block;
}

.character-item__title {
  @include flex-list(10px);

  align-items: center;
}

.character-item__wrapper {
  @include flex-list-wrap(15px, 15px);

  align-items: flex-start;
  word-break: break-all;
}

.character-item__img {
  flex: 0 0 100px;
  display: block;
  width: 100px;
  border-radius: 50%;
}
</style>
