<template>
    <div>
        <h1>Delete data with API</h1>
        <table border="1">
            <thead>
            <tr>
                <td>name</td>
                <td>email</td>
                <td>age</td>
                <td>action</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" v-bind:key="user.id">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.age}}</td>
                <td>
                    <button v-on:click="deleteUser(user.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueAxios from 'vue-axios';
    import axios from 'axios';

    Vue.use(VueAxios, axios)
    export default {

        name: "Users",
        data() {
            return {
                users: null,
            }
        },
        methods: {
            getUsers() {
                this.axios.get('http://localhost:3000/users').then(resp => {
                    this.users = resp.data
                    console.warn(resp.data)
                })
            },
            deleteUser(id) {
                this.axios.delete('http://localhost:3000/users/' + id).then(resp => {
                    console.warn(resp.data)
                    this.getUsers()
                })
            }
        },
        mounted() {
            this.getUsers()
        }
    }
</script>

<style scoped>

</style>