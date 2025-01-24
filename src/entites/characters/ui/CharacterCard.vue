<template>
  <transition name="fade" mode="out-in">
    <template v-if="!character.id">
      <div class="character-cart">
        <skeleton class="character-cart__skeleton-left" height="300px" width="300px" />
        <skeleton class="character-cart__skeleton-right" height="300px" width="600px" />
      </div>
    </template>
    <template v-else>
      <div class="character-cart">
        <div class="character-cart__wrapper-img">
          <img class="character-cart__img" :src="character.image" :alt="character.name" />
        </div>
        <div class="character-cart__content">
          <div
            v-for="item in ['name', 'status', 'species', 'gender', 'location', 'origin']"
            :key="item"
            :class="'character-cart__content-item character-cart__' + item"
          >
            {{ item }}: {{ character[item]?.name || character[item] }}
          </div>
          <div class="character-cart__content-item character-cart__episodes">
            episodes count: {{ character.episode.length }}
          </div>
        </div>
      </div>
    </template>
  </transition>
</template>

<script>
import Skeleton from 'primevue/skeleton'
export default {
  name: 'CharacterCart',
  components: { Skeleton },
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.character-cart {
  @include flex-list-wrap(25px, 25px);

  & {
    justify-content: center;
  }
}

.character-cart__skeleton-left {
  margin: 0 auto;
}

.character-cart__wrapper-img {
  @include flex-center;

  & {
    flex: 1 1 auto;
    position: sticky;
    top: 0px;
  }
}

.character-cart__img {
  display: block;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
}

.character-cart__content {
  @include flex-list-column(15px);

  & {
    flex: 0 1 600px;
  }
}

.character-cart__name {
  font-size: 20px;
}

@include desktop-up {
  .character-cart {
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .character-cart__content-item {
    font-size: 20px;
  }

  .character-cart__name {
    font-size: 30px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
