<template>
    <div class="container m-5">
      <p class="text-center fs-2">Histórico de Entregas</p>
      
      <form>
      <fieldset>
        <legend>Nova Entrega</legend>
        <div class="mb-3">
          <input type="text" id="disabledTextInput" class="form-control" placeholder="Nome" />
        </div>
        <div class="mb-3">
          <input type="number" id="disabledTextInput" class="form-control" placeholder="Contato" />
        </div>
        <div class="mb-3">
          <input type="number" id="disabledTextInput" class="form-control" placeholder="Preço" />
        </div>
        <div class="mb-3">
        <select class="form-select" aria-label="Default select example">
            <option selected disabled>Itens</option>
            <option value="1">Frango P</option>
            <option value="2">Alcatra M</option>
            <option value="3">Frango G</option>
          </select>
        </div>
        <div class="mb-3">
          <select class="form-select" aria-label="Default select example">
            <option selected disabled>Motoboy</option>
            <option value="1">Alisson</option>
            <option value="2">Maria</option>
            <option value="3">Victor</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary float-end">Adicionar</button>
      </fieldset>
    </form>
      
      <table class="table">
        <thead class="table-danger">
          <tr>
            <td scope="col">Funcionário</td>
            <th scope="col">ID</th>
            <th scope="col">NOME</th>
            <th scope="col">MESA</th>
            <th scope="col">PEDIDO</th>
            <th scope="col">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">João</th>
            <td>1</td>
            <td>Ana</td>
            <td>2</td>
            <td>Porção de Batata Frita</td>
            <td>$25</td>
          </tr>
          <tr>
            <th scope="row">Alisson</th>
            <td>2</td>
            <td>Luiza</td>
            <td>5</td>
            <td>Chawarma de Frango com Requeijão</td>
            <td>$28</td>
          </tr>
          <tr>
            <th scope="row">Julia</th>
            <td>3</td>
            <td>Analu</td>
            <td>3</td>
            <td>Chapeado de 500G</td>
            <td>45$</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  