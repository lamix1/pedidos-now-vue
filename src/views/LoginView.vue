<template >
  <div class="background h-100 w-100 d-flex justify-content-center align-items-center">
      <div class="card">
        <img src="../assets/PedidosNOW.png" class="card-img-top " />
        <div class="mb-3 input">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3 input">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="*****"/>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">Lembrar de mim</label>
        </div>
        <router-link to="/home" custom v-slot="{ navigate }">
          <button
            @click="navigate"
            role="link"
            type="button"
            class="btn btn-danger btn-lg"
          >
            Login
          </button>
        </router-link>
      <!-- </div> -->
    </div>
  </div>
</template>
<style>

.background {
  background-image: url('../assets/restaurante_updated.png');
  background-size: cover;  
}

.card {
  width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input {
  width: 90%;
}

.card-img-top {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
}
</style>
