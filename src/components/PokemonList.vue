<template>
    <div class="list-container">
        <div class="container text-center">
            <div class="row">
                <div v-for="pokemon in pokemonList" class="col-sm-12 col-md-4 pokemon-card">
                    <div class="card">
                        <span># {{ pokemon.id }}</span>
                        <img :src="pokemonsImage+ pokemon.id+'.svg'"  @error="imageUrlAlt" alt="falcon"  class="avatar"/>
                        <h6>{{ pokemon.name }}</h6>
                        <div v-for="(data,index) in pokemon.pokemon_v2_pokemontypes" :key="index" class="details"
                        :class="{'grass': data.pokemon_v2_type.name =='grass',
                              'fire': data.pokemon_v2_type.name =='fire',  
                              'water': data.pokemon_v2_type.name =='water',  
                              'bug': data.pokemon_v2_type.name =='bug', 
                              'normal': data.pokemon_v2_type.name =='normal' || data.pokemon_v2_type.name =='flying', 
                              'poison': data.pokemon_v2_type.name =='poison', 
                              'electric': data.pokemon_v2_type.name =='electric', 
                              'ground': data.pokemon_v2_type.name =='ground', 
                              'fairy': data.pokemon_v2_type.name == 'fairy',
                              'fighting': data.pokemon_v2_type.name == 'fighting',
                              'psychic': data.pokemon_v2_type.name == 'psychic',
                              'rock': data.pokemon_v2_type.name == 'rock',
                              'ghost': data.pokemon_v2_type.name == 'ghost',
                              'ice': data.pokemon_v2_type.name == 'ice',
                              'dragon': data.pokemon_v2_type.name == 'dragon',
                              'dark': data.pokemon_v2_type.name == 'dark',
                              'steel': data.pokemon_v2_type.name == 'steel',
                              
                }">
                        <p class="type"><strong>Type-{{ index+1 }}:</strong>  {{ data.pokemon_v2_type.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="$store.state.showPagination" class="simple-pagination">
      
        <button  style="margin-right: 10px;" class="btn btn-primary" @click="prevPage()">Preview</button>
        <button class="btn btn-primary" @click="nextPage()">Next</button>
        </div>

    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Flow+Circular&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.dragon {
    background: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%) !important;
}
.ground {
    background: radial-gradient(1091px at 106.5% 111.5%, rgb(250, 246, 213) 0.1%, rgb(218, 147, 93) 42.2%, rgb(137, 86, 67) 74.3%, rgb(67, 39, 39) 100.2%)!important;
}
.grass {
    background: linear-gradient(to top, #9be15d 0%, #00e3ae 100%) !important;
}

.fire {
    background: radial-gradient(circle at 10% 20%, rgb(255, 197, 118) 0%, rgb(254, 106, 103) 47.7%, rgb(240, 23, 23) 92.3%)!important;
}

.water {
    background: radial-gradient(circle at 0.7% 1%, rgb(215, 248, 247) 0%, rgb(102, 188, 239) 100.2%) !important;
}

.bug {
    background: linear-gradient(to top, #96fbc4 0%, #f9f586 100%) !important;
}

.normal {
    background: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%) !important;
}

.poison {
    background: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%) !important;
}

.electric {
    background: linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%) !important;
}

.fairy {
    background: linear-gradient(122.3deg, rgb(111, 71, 133) 14.6%, rgb(232, 129, 166) 29.6%, rgb(237, 237, 183) 42.1%, rgb(244, 166, 215) 56.7%, rgb(154, 219, 232) 68.7%, rgb(238, 226, 159) 84.8%) !important;
}

.fighting {
    background: linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%) !important;
}

.psychic {
    background: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%) !important;
}

.rock {
    background: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%) !important;
}

.ghost {
    background: linear-gradient(91.7deg, rgb(50, 25, 79) -4.3%, rgb(122, 101, 149) 101.8%) !important;
}

.ice {
    background: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%) !important;
}

.dark {
    background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
}

.grass {
    background: linear-gradient(to top, #9be15d 0%, #00e3ae 100%) !important;
}

.steel {
    background: linear-gradient(180.3deg, rgb(221, 221, 221) 5.5%, rgb(110, 136, 161) 90.2%);
}


* {
    color: white;
}
.list-container {
    margin-top: 50px;
}

.pokemon-card {
    margin-bottom: 25px ;
}

h6,p {
    text-transform: capitalize;
}

.type {
    text-align: center;
    margin-top: 3px;
}



.content {
  color: white;
  font-size: 1.2rem;
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 640px;
  height: 300px;
  padding: 20px;
  text-align: center;
}

.card {
  cursor: pointer;
  border-radius: 7px;
  padding: 10px;
  width: 220px;
  min-height: 355px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.03);
  transition: 0.2s ease-in-out;
  margin: auto;
}

.card:hover {
  transform: scale(1.03);
}
.card:hover .avatar {
  transform: scale(1.1);
  object-position: 50% 65%;
}

.avatar {
  width: 170px;
  height: 170px;
  /* object-fit: cover;
  object-position: 50% 50%; */
  margin: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5%;
  transition: 0.15s ease-in-out;
  background: white !important;
}

.details {
  margin-top: 5px;
  border-radius: 18px 4px 4px 4px;
-webkit-border-radius: 18px 4px 4px 4px;
-moz-border-radius: 18px 4px 4px 4px;
}
.details p {
  font-size: 1rem;
  color: black !important;
  font-weight: 500;
}

.simple-pagination {
    text-align: center;
    margin-bottom: 50px;
}


</style>

<script>
    export default { 
        data: () => {
            return {
                pokemonsImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/',
                dataLimit: 9,
                dataOffset: 9
            }
        },

        methods: {
            imageUrlAlt(event) {
                 event.target.src = "http://blog.aspneter.com/Images/no-thumb.jpg"
            },
            nextPage() {
                let limit = this.$store.state.dataLimit
                let offset = this.$store.state.dataOffset+=9
                let payload = {'pokemon': this.$store.state.pokemonKeyWord, 'dataCount':  limit, 'offset': offset,'hideWellcome':true}
                this.$store.dispatch('fetchPokemon', payload)
            },
            prevPage() {

        
                if(this.$store.state.dataOffset >= 9) {
                    let limit = this.$store.state.dataLimit
                    let offset = this.$store.state.dataOffset-=9
                let payload = {'pokemon': this.$store.state.pokemonKeyWord, 'dataCount':  limit, 'offset': offset,'hideWellcome':true}
                this.$store.dispatch('fetchPokemon', payload)
                }
            }
            
        },
        computed: {
            pokemonList() {
                return this.$store.state.pokemons 
            }
            
        },
    }
</script>