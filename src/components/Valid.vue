<template>
    <div>
        <p v-if="error.length">
            <b>Please correct following errors</b>
        <ul>
            <li v-for="e in error" v-bind:key="e.id">
                {{ e }}
            </li>
        </ul>
        </p>
        <h1>Validation form</h1>
        <form @submit="login">
            <input type="text" placeholder="name" v-model="name"/>
            <br/>
            <br/>
            <input type="password" placeholder="password" v-model="password"/>
            <br/>
            <br/>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Valid",
        data() {
            return {
                error: [],
                name: null,
                password: null,
            };
        },
        methods: {
            login(e) {
                console.warn("hi");
                e.preventDefault();
                if (this.name && this.password) {
                    console.warn("no error");
                }
                if (!this.name) {
                    this.error.push("Username is required");
                }
                if (!this.password) {
                    this.error.push("Password is required");
                }
            },
        },
    };
</script>