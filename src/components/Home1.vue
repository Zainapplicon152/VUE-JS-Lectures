<template>
    <div>
        <h1>Hello from home component</h1>
        <h2>{{data}}</h2>
        <h2>{{msg}}</h2>
        <button v-on:click="hello('Hello from zain')">Click me</button>
        <h2 v-if="show">Conditional rendering IF statement</h2>
        <h2 v-else>Conditional rendering else statement</h2>
        <button v-on:click="display">Toggle</button>
    </div>
</template>

<script>
    export default {
        name: "Home1",
        props: {
            data: String,
            msg: String,
        },
        data() {
            return {show: true}
        },
        methods: {
            hello(data) {
                alert(data);
            },
            display() {
                this.show = !this.show
            }
        },
    };
</script>