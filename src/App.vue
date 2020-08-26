<template>
    <div id="app">
        <router-view></router-view>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">VUE JS</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/">Route 1</b-nav-item>
                    <b-nav-item to="/route2">Route 2</b-nav-item>
                    <b-nav-item to="/route3">Route 3</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
            </b-collapse>
        </b-navbar>
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <!-- <Home1 />
        <Home1 data="zain is here" msg="hi from zain" />
        <ForLoop/>-->
        <!-- <Main /> -->
        <!-- <Binding /> -->
        <!-- <DataBind /> -->
        <!-- <BindDetail /> -->
        <!-- <Props v-bind:users="users" />
        <h1>{{title}}</h1>
        <Child v-on:changeTtitle="updateTitle($event)" />-->
        <!-- <h3>{{ name | ucase}}</h3>
        <h3>{{price | currency}}</h3>
        <SignUp />
        <Login/>
        <Valid/>-->
        <!-- <div v-if="display">
             <Cycle/>
         </div>
         <button v-on:click="toggle">Toggle</button>-->

        <!-- <ApiCall2/> -->
        <!-- <ApiCall/> -->
        <!-- <Calculator/>-->
        <!--        <EmployyList/>-->
        <!--        <Posts/>-->
        <!--        <Users/>-->
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    // import Home1 from "./components/Home1.vue";
    // import ForLoop from "./components/ForLoop.vue";
    // import Main from "./components/Main";
    // import Binding from "./components/Binding";
    // import DataBind from "./components/DataBind";
    // import BindDetail from "./components/BindDetail";
    // import Props from "./components/Props";
    // import Child from "./components/ChildProps";
    // import SignUp from "./components/SignUp";
    // import Login from "./components/Form";
    // import Valid from "./components/Valid";
    // import Cycle from "./components/Cycle";
    // import ApiCall from "./components/ApiCall";
    // import ApiCall2 from "./components/ApiCall2";
    // import Calculator from "./components/Calculator.vue";
    // import EmployyList from "./components/EmployyList";
    // import Posts from "./components/Posts";
    // import Users from "./components/Users";


    export default {
        name: "App",
        components: {
            //HelloWorld,
            // Home1,
            // ForLoop,
            // Main,
            // Binding,
            // DataBind,
            // BindDetail,
            // Props,
            // Child,
            // SignUp,
            // Login,
            // Valid,
            // Cycle,
            // ApiCall,
            // ApiCall2,
            // Calculator,
            // EmployyList,
            // Posts,
            // Users,
        },
        data() {
            return {
                /*users: [
                    {name: "zain1", email: "zain1@gmail.com"},
                    {name: "zain2", email: "zain2@gmail.com"},
                    {name: "zain3", email: "zain3@gmail.com"},
                    {name: "zain4", email: "zain4@gmail.com"},
                ],
                title: "Updated",
                name: "zain",
                price: 100,
                display: true,*/
            };
        },
        methods: {
            /* updateTitle(title) {
                 this.title = title;
             },
             toggle() {
                 this.display = !this.display;
             },*/
        },
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
