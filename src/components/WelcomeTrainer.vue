<template>
  <div class="logo">
    <a href="https://imersao.dev/" target="_blank">
				<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-mentalista.svg" class="page-logo" alt="">
    </a>
  </div>
  <div class="background-image">
    <div class="page-title">
      <h1 id="title">
       Welcome Trainers !!
      </h1>
    </div>
      <a id="link" href="https://www.google.com/search?q=pok%C3%A9mon&bih=663&biw=1366&hl=pt-BR&sxsrf=ALeKk02-ohKBU3b77yiJEDNG7WzTewcKwg%3A1616794059192&ei=y1FeYLyoC8Wk5OUPyIenwAY&oq=pok%C3%A9mon&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAguEEMyBQguELEDMgQIABBDMgQIABBDMgQIABBDMgUILhCxAzIECC4QQzIECAAQQzIECC4QQzoHCCMQsAMQJzoHCAAQsAMQQzoHCC4QsAMQQzoHCAAQRxCwAzoECCMQJzoFCAAQsQM6AggAOgcIIxCxAhAnOgcILhCxAxAKOggIABAHEAoQHjoHCAAQsQMQCjoECAAQClCtkwJY1bMCYJy7AmgBcAJ4AIABvQaIAYQNkgEHMC41LjYtMZgBAKABAaoBB2d3cy13aXrIAQrAAQE&sclient=gws-wiz&ved=0ahUKEwj8ucqc887vAhVFErkGHcjDCWgQ4dUDCA0&uact=5" target="_blank">
        <img id="bg-pokemons" src="http://pm1.narvii.com/6225/b38b25c5941dca0afa2b6ecf5cc2d4eed7d03fbe_00.jpg">
      </a>
    <p id="sub-title">
      Squirtle Bulbasaur Charmander <br>
      You can search for pokemon on the search bar or press the button bellow to find the pokemon you want.
    </p>
    <input type="button" value="I choose you" id="botao-escolha" @click="fetchAllPokemons()">
  </div>
  <footer>
    <h3>
      &copy Marc Aldrin Dela Cruz
    </h3>
  </footer>
</template>

<style>
body {
  background: black !important;
  color:white !important;
  font-family: "Roboto Mono", monospace;
}
.page-logo{
  width: 100px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.page-title{
  text-align:center;
  margin-top:0px;
}
.bg-pokemons:horver{
  background-color:white;
}
.background-image {
  margin-top: 130px;
  text-align:center;
}
input{
  padding:10px;
  border:none;
  background-color:#303136;
  color:white;
  border-radius:5px;
}
input:hover{
  background-color:white;
  color:#181818;
}
footer{
  margin-top:40px;
  text-align:center;
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
            fetchAllPokemons() {
                this.$store.dispatch('fetchPokemon',{pokemon:'','dataCount':  9, 'offset': null,'showPagination':true,'hideWellcome':true})
            }
        }
    }
</script>