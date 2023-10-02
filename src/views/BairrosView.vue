<template>
    <div class="container col-4 m-5 d-inline float-start">
      <form>
        <legend class="mb-4">Adicionar novo Bairro</legend>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleInputNome"
            aria-describedby="emailHelp"
            placeholder="Nome"
          />
        </div>

        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>

        <button type="submit" class="btn btn-primary">Adicionar</button>
      </form>
    </div>
    
    <div class="container col-6 m-5 d-inline float-end">
      <legend class="mb-4">Bairros</legend>
      <table class="table">
    <thead>
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">Valor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Floresta</th>
        <td>R$15,00</td>
      </tr>
      <tr>
        <th scope="row">Vila Nova</th>
        <td>R$10,00</td>
      </tr>
    </tbody>
  </table>
    </div>
  </template>

<style>
.cifrão {
  width: 35px;
}

.preco {
  width: 20rem;
}

</style>
  