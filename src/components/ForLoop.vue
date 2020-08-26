<template>
    <table border="1px">
        <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
        </tr>
        <tr v-for="user in users" :key="user.id">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
        </tr>
    </table>
</template>
<script>
    export default {
        data() {
            return {
                users: [
                    {id: 1, name: "zain", email: "zain@gmail.com"},
                    {id: 2, name: "tayyab", email: "tayyab@gmail.com"},
                    {id: 3, name: "malik", email: "malik@gmail.com"},
                    {id: 4, name: "hello", email: "hello@gmail.com"},
                ],
            };
        },
    };
</script>