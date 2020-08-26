<template>
    <div class="main">
        <h1>Main Component</h1>
        <User/>
        <Product/>
        <Template/>
    </div>
</template>

<script>
    import User from "./User";
    import Product from "./Product";
    import Template from "./Template";

    export default {
        name: "main",
        components: {
            User,
            Product,
            Template,
        },
    };
</script>

<style>
    .main {
        background-color: skyblue;
        height: 600px;
    }
</style>