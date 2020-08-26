<template>
    <div>
        <h1>Login Form</h1>
        <input type="text" placeholder="Username" v-model="loginform.username"/>
        <br/>
        <input type="password" placeholder="Passowrd" v-model="loginform.password"/>
        <br>
        <br>
        <button v-on:click="loginuser">Login</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginform: {
                    username: null,
                    password: null,
                },
            };
        },
        methods: {
            loginuser() {
                console.log(this.loginform);
            }
        }
    };
</script>