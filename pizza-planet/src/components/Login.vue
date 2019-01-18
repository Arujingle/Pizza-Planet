<template>

<div class="row">
  <form>
    <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email">
      </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" id="password" placeholder="Enter password">
    </div>
    <button type ="button" class="btn-danger" @click.prevent="signOut">Sign Out</button>
    <button type = "button" class="btn btn-primary" @click.prevent="signIn">Sign In</button>


  </form>
</div>

    
</template>




<script>
    export default {
      methods:{
        signIn(){
          var email=document.getElementById('email').value;
          var password=document.getElementById('password').value;
          Firebase.auth().signIn


        },
        signOut(){

        }
      }

    }
</script>

<style scoped>

</style>
