<template>
  <header class="menu-superior d-flex justify-content-center align-items-center p-2">
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#"><RouterLink to="/pedidosAbertos">Pedidos Abertos</RouterLink></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><RouterLink to="/historicoPedidos">Histórico de Pedidos</RouterLink></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><RouterLink to="/editarCardapio">Editar Cardápio</RouterLink></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><RouterLink to="visuCardapio">Visualizar Cardápio</RouterLink></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><RouterLink to="/funcionarios">Controle de Funcionários</RouterLink></a>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <hr size="10" width="100%" />
</template>

<style>
</style>
