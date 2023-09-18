<template width="100%" height="100%">
        <div class="container">

          <div class="card w-100" style="width: 20rem;">
            <div class="card-body">
            <img src="../assets/PedidosNOW.png" class="card-img-top" width="200px">

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
            </div>
          </div>
</template>
<style>
.container {
    background-image: url('../assets/restaurante_updated.png');
    height: 100vh;
    background-size: cover;
  }
.card-body {
  justify-content: center;
  border-radius: 10px;
  background-color: white;
  width: 300px;
}
.card-img-top {
  margin-left: 50px;
  display: flex;
  justify-content: center;
}
</style>