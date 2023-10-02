<template>
    <header class="menu-superior">
        <a> <RouterLink to="/pedidosAbertos">Pedidos Abertos</RouterLink> </a>
        <a>|</a>
        <a> <RouterLink to="/historicoPedidos">Histórico de Pedidos</RouterLink> </a>
        <a>|</a>
        <a> <RouterLink to="/editarCardapio">Editar Cardápio</RouterLink> </a>
        <a>|</a>
        <a> <RouterLink to="visuCardapio">Visualizar Cardápio</RouterLink></a>
        <a>|</a>
        <a> <RouterLink to="/funcionarios">Controle de Funcionários</RouterLink> </a>
        <a>|</a>
        <a> <RouterLink to="/bairros">Bairros</RouterLink> </a>
        <a>|</a>
        <a> <RouterLink to="/motoboys">Motoboys</RouterLink> </a>
        <a>|</a>
        <a> <RouterLink to="/entregas">Entregas</RouterLink> </a>
    </header>
    <hr size="10" width="100%">
  </template>
  
  <style>
  header span {
    padding: 0 20px;
  }
  .menu-superior {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
  }
  a {
    color: black;
    margin: 20px;
  }
  </style>