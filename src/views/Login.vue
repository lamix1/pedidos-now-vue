<template>
    <div class="container-fluid">
        <div class="row bac">
      <div class="col-12">
            
    <div class="card-body">
    <form>
        <div class="card" style="width: 18rem;">
 
    <h5 class="card-title">Login</h5>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Senha</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" >
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">Lembrar de mim</label>
  </div>
  <router-link to="/Home.vue" custom v-slot="{ navigate }">
  <button
  @click="navigate"
  role="link" 
  type="button" 
  class="btn btn-primary btn-lg"
  style="

  "
  >
  Login
</button>
</router-link>
</div>
    </form>
    </div>
</div>
</div>
</div>
</template>
<style>
.bac {
    background: url('../assets/Login.png') no-repeat center center fixed;
    height: 100vh;
  }


</style>