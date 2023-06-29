<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img class="navbar-brand" src="../assets/Logo-Pokemon.png" alt="" width="130">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
        <div class="search-element d-flex">
                <input v-model="pokemon" class="form-control me-2" type="search" placeholder="Search for a Pokemon" aria-label="Search">
                <button @click="fetchPokemons" class="btn btn-secondary">Search</button>
                <button style="margin-left: 10px;" @click="fetchAllPokemons" class="btn btn-secondary">All</button>
        </div>
    </div>
  </div>
</nav>
</template>

<style scoped>
.search-element{
    margin-left: auto;
    margin-right: auto;
}

@media only screen and (min-width: 1200px) {
    .search-element{
    margin-left: 40%;
  
}
}
.navbar {
    background: #dc3545!important;
}
</style>

<script>
    export default { 
        data: () => {
            return {
                pokemon: '' 
            }
        },

        methods: {
            fetchPokemons () {
                if(this.pokemon){
                    this.$store.dispatch('fetchPokemon',{pokemon:this.pokemon,'dataCount':  null, 'offset': null,'showPagination':false,'hideWellcome':true})
                }
            },
            fetchAllPokemons() {
                this.$store.dispatch('fetchPokemon',{pokemon:'','dataCount':  9, 'offset': null,'showPagination':true,'hideWellcome':true})
            }
        }
    }
</script>