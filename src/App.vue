<script setup></script>
<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/main.css";
#app {
  margin: 0 auto;
  height: 100vh;
  font-weight: normal;
}
header,
footer {

  color: white;
  height: 10%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 0rem;
}
main {
  width: 100%;
  height: 100%;
}
</style>
