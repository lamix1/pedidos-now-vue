<template >
  <div class="background h-100 w-100 d-flex justify-content-center align-items-center">
      <div class="card d-flex justify-content-center align-items-center p-4">
        <img src="../assets/PedidosNOW.png" class="card-img-top d-flex justify-content-center align-items-center" />
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
        <router-link to="/pedidosabertos" custom v-slot="{ navigate }">
          <button
            @click="navigate"
            role="link"
            type="button"
            class="btn btn-danger btn-lg mt-3"
          >
            Login
          </button>
        </router-link>

        <svg-icon type="mdi" :path="path"></svg-icon>

      <!-- </div> -->
    </div>
  </div>
</template>

<!-- <script src="https://kit.fontawesome.com/6f724061eb.js" crossorigin="anonymous"></script> -->

<style>

.background {
  background-image: url('../assets/restaurante_updated.png');
  background-size: cover;  
}

.card {
  width: 25rem;
  height: 30rem;
}

.input {
  
  width: 90%;
}

.card-img-top { 
  width: 300px;
}
</style>
