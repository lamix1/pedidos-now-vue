<template>
    <div class="login">
        <h1>Login</h1>
        <input type="text" placeholder="Email">
        <br>
        <input type="password" placeholder="Senha">
        <br>
        <div class="btn-login">
            <button>Login</button>
        </div>
        <p>
            Esqueci minha Senha
            <a href="">Recuperar senha</a>
        </p>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
</style>