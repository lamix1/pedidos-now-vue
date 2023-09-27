<template>
  <div class="container m-5">
    <p class="text-center fs-2">Cardápio</p>
    <table class="table">
      <thead class="table-danger">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TÌTULO</th>
          <th scope="col">PESO</th>
          <th scope="col">PREÇO</th>
          <th scope="col">CATEGORIA</th>
          <th scope="col">INDISPONIBILIDADE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Batata Frita</td>
          <td>500g</td>
          <td>25$</td>
          <td>Porção</td>
          <td><input class="form-check-input" type="checkbox" /></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Chawarma de Carne</td>
          <td>150g</td>
          <td>20$</td>
          <td>Chawarma</td>
          <td><input class="form-check-input" type="checkbox" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>