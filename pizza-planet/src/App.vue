<template>
  <div id="app">
    <div class = "container">
      <pp-header></pp-header>
    </div>
    <div class = "container">
      <pp-admin></pp-admin>
    </div>
    <div class = "container">
      <pp-footer></pp-footer>
    </div>
  </div>

</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'

export default {
  components:{
    ppHeader:Header,
    ppFooter:Footer,
    ppHome:Home,
    ppMenu:Menu,
    ppAdmin:Admin
  }

}
</script>

<style>
#home{
  background:url('http://www.famouspizzaexpress.com/images/pizza35.jpg');
  height:580px;
  width:100%;

}
h1,h2{
  margin:6%;
}

.background{
  background-color:white;
  opacity:0.8;
  max-width:60%;
  margin:0 auto;
  padding:20px 0;
}
</style>
