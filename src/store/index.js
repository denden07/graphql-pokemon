import {createStore} from 'vuex'
import {useQuery} from '@vue/apollo-composable'
import gql from 'graphql-tag';
import { watch, watchEffect,computed } from 'vue';

const state = {
    count: 0,
    pokemons: '',
    loading: false,
    pokemonKeyWord: '',
    dataLimit:9,
    dataOffset:0,
    showPagination:false,
    hideWellcome: false,
}

const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    },
    getPokemon(state,pokemons) {
        state.pokemons = pokemons
    },
    loadingState(state,condition) {
        state.loading = condition
    },
    setKeyWord(state,keyword) {
        state.pokemonKeyWord = keyword
    },
    setshowPagination(state,condition) {
        state.showPagination =condition
    },
    setWelcome(state,condition) {
        state.hideWellcome = condition
    }
}

const actions = {
    async  fetchPokemon({commit},pokemon) {
        if(pokemon.showPagination) {
            commit('setshowPagination',pokemon.showPagination)
        }
        commit('setWelcome',pokemon.hideWellcome)
        commit('loadingState', true);
        const POKEMON_QUERY = gql`
        query MyQuery {
        pokemon_v2_pokemon(where: {name: {_iregex: "${pokemon.pokemon}"}},limit: ${pokemon.dataCount},offset: ${pokemon.offset} ) {
            name
            id
            height
            pokemon_v2_pokemonsprites {
            pokemon_id
            id
            }
            pokemon_v2_pokemontypes {
            pokemon_v2_type {
                name
            }
            }
        }
        }

        `;

        const {result} = useQuery(POKEMON_QUERY);
        const pokemons = computed(() => result.value?.pokemon_v2_pokemon ?? [])
        commit('setKeyWord',pokemon.pokemon)
        setTimeout(function() {
            commit('getPokemon', pokemons);
            commit('loadingState', false);
          }, 1000);
   
    }
}

const getters = {
    pokemonList(state) {
        return state.pokemons
    }
}

const modules = {

}

export default createStore({
    state,
    mutations,
    actions,
    getters,
    modules
})