<template>
  <div class="container m-5">
    <p class="text-center fs-2">Editar Cardápio</p>
    <form>
      <fieldset>
        <legend>Adicione itens</legend>
        <div class="mb-3">
          <input type="text" id="disabledTextInput" class="form-control" placeholder="Nome" />
        </div>

        <div class="input-group mb-3">
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <span class="input-group-text">g</span>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <span class="input-group-text">.00</span>
        </div>

        <div class="mb-3">
          <select class="form-select" aria-label="Default select example">
            <option selected disabled>Categoria</option>
            <option value="1">Chawarma</option>
            <option value="2">Bebida</option>
            <option value="3">Porção</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary float-end">Adicionar</button>
      </fieldset>
    </form>
  </div>
</template>
