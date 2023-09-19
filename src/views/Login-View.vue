<template width="100%" height="100%">
  <div class="td">
    <div class="card w-25 position-absolute top-50 start-50 translate-middle" style="width: 20rem">
      <div class="card-body">
        <img src="../assets/PedidosNOW.png" class="card-img-top " />

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="*****"/>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">Lembrar de mim</label>
        </div>
        <router-link to="/Home.vue" custom v-slot="{ navigate }">
          <button
            @click="navigate"
            role="link"
            type="button"
            class="btn btn-primary btn-lg"
          >
            Login
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style>

.td {
  background-image: url('../assets/restaurante_updated.png');
  height: 100vh;
  width: 100vw;
  background-size: cover;
  position: relative;
  margin: 0;
}
.card-body {
  border-radius: 10px;
  background-color: white;
  align-items: center;
}
.card-img-top {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
}
</style>
