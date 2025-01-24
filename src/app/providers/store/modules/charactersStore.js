import { toRaw } from 'vue';
import { characterAPI } from '@/entites/characters';
import { toast } from '@/shared/lib';

export const charactersStore = {
  namespaced: true,
  state() {
    return {
      characters: {},
      isLoading: false,
      count: 0,
      page: 1,
      name: null,
    };
  },
  actions: {
    async fetchCharacters({ state, commit, getters }) {

      if (getters.isPageLoaded) {
        return
      }

      commit('setLoading', true);

      try {
        const data = await characterAPI.getCharacters({ page: state.page, name: state.name });

        if (data === null || !data?.results?.length) {
          toast.info('Увы', 'Пользователей не найдено');
          return;
        }

        commit('setCharacters', { ...state.characters, ...{ [getters.getCharacterKey]: data.results } });
        commit('setCount', data.info.count);
      } catch (error) {
        console.error(error);
        toast.error('Ошибка', 'Что-то  пошло не так :(');
      } finally {
        commit('setLoading', false);
      }
    }
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },


    setLoading(state, loading) {
      state.isLoading = loading;
    },

    setCount(state, count) {
      state.count = count;
    },

    setPage(state, page) {
      state.page = page;
    },

    setName(state, name) {
      state.page = 1;
      state.name = name;

    },
  },
  getters: {
    getCharacterById: state => id => {
      return Object.values(toRaw(state.characters)).flat().find(character => character.id === id) || null;
    },

    getCharacterKey: state => {
      return `${state.page}_${state.name || ''}`;
    },

    isPageLoaded: (state, getters) => {
      return !!getters.getCharacters.length;
    },

    getCharacters: (state, getters) => {
      return state.characters[getters.getCharacterKey] || []
    }
  }
}