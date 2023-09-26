<template>
    <header class="menu-superior">
      <div class="menu-esquerdo">
        <span> <RouterLink to="/pedidosAbertos">Pedidos Abertos</RouterLink> </span>
        <span>|</span>
        <span> <RouterLink to="/historicoPedidos">Histórico de Pedidos</RouterLink> </span>
        <span>|</span>
        <span> <RouterLink to="/editarCardapio">Editar Cardápio</RouterLink> </span>
        <span>|</span>
        <span> <RouterLink to="/funcionarios">Controle de Funcionários</RouterLink> </span>
      </div>
      <div class="menu-direito">
        <span>Sair</span>
      </div>
    </header>
  </template>
  
  <style>
  header span {
    padding: 0 20px;
  }
  .menu-superior {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  </style>