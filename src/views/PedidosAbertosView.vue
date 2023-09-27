<template>
  <div class="container m-5">
    <p class="text-center fs-2">Pedidos Abertos</p>
    <table class="table">
      <thead class="table-danger">
        <tr>
          <th scope="col">Funcionário</th>
          <th scope="col">ID</th>
          <th scope="col">NOME</th>
          <th scope="col">MESA</th>
          <th scope="col">PEDIDO</th>
          <th scope="col">TOTAL</th>
          <th scope="col">SITUAÇÃO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">João</th>
          <td >1</td>
          <td>Ana</td>
          <td>2</td>
          <td>Porção de Batata Frita</td>
          <td>$25</td>
          <td><input class="form-check-input" type="checkbox" /></td>
        </tr>
        <tr>
          <th scope="row">Eduarda</th>
          <td>2</td>
          <td>Luiza</td>
          <td>5</td>
          <td>Chawarma de Frango com Requeijão</td>
          <td>$28</td>
          <td><input class="form-check-input" type="checkbox" /></td>
        </tr>
        <tr>
          <th scope="row">Maria</th>
          <td>3</td>
          <td>Analu</td>
          <td>3</td>
          <td>Chapeado de 500G</td>
          <td>45$</td>
          <td><input class="form-check-input" type="checkbox" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
