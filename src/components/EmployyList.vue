<template>
    <div>
        <h1>Fetch Data with APi</h1>
        <table border="1">
            <thead>
            <tr>
                <th>Age</th>
                <th>Name</th>
                <th>Salary</th>
            </tr>

            </thead>
            <tbody>
            <tr v-for="l in list" v-bind:key="l">
                <td>{{l.employee_age}}</td>
                <td>{{l.employee_name}}</td>
                <td>{{l.employee_salary}}</td>
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
        name: "EmployyList",
        data() {
            return {
                list: [],
            }
        },
        mounted() {
            Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees').then(resp => {
                this.list = resp.data.data
                console.warn(resp.data.data)
            })
        }
    }
</script>

<style scoped>

</style>