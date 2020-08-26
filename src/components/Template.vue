<template>
    <div class="template">
        <h1>Template Component</h1>
        <h3>{{name}}</h3>
    </div>
</template>

<script>
    export default {
        name: "template",
        data() {
            return {
                name: 'Zain',
            }
        },
        methods: {},
    };
</script>

<style>
    .template {
        background-color: burlywood;
        height: 400px;
    }
</style>