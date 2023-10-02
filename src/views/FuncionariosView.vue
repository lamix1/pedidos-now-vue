<template>
  <div class="container col-4 m-5 d-inline float-start">
    <form>
      <legend class="mb-4">Adicionar novo funcionário</legend>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Nome"
        />
      </div>
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Senha"
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
      <th scope="col">Email</th>
      <th scope="col">Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Maria</th>
      <td>mariazinha@gamil.com</td>
      <td>mariazinha1</td>
    </tr>
    <tr>
      <th scope="row">Ana</th>
      <td>aninha123@gmail.com</td>
      <td>anananan</td>
    </tr>
    <tr>
      <th scope="row">Camila</th>
      <td>caimimi@gmail.com</td>
      <td>camimimila34</td>
    </tr>
  </tbody>
</table>
  </div>
</template>
