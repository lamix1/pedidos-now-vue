<template>
    <div class="container col-4 m-5 d-inline float-start">
      <form>
        <legend class="mb-4">Adicionar novo motoboy</legend>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleInputNome"
            aria-describedby="emailHelp"
            placeholder="Nome"
          />
        </div>
        <div class="mb-3">
          <input
            type="number"
            class="form-control"
            id="exampleInputNumber"
            placeholder="Número"
          />
        </div>
        <button type="submit" class="btn btn-primary">Adicionar</button>
      </form>
    </div>
    <div class="container col-6 m-5 d-inline float-end">
      <legend class="mb-4">Funcionários</legend>
      <table class="table">
    <thead>
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">Número</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Maria</th>
        <td>(47)00000-0000</td>
      </tr>
      <tr>
        <th scope="row">Ana</th>
        <td>(47)00000-0000</td>
      </tr>
      <tr>
        <th scope="row">Camila</th>
        <td>(47)00000-0000</td>
      </tr>
    </tbody>
  </table>
    </div>
  </template>
  