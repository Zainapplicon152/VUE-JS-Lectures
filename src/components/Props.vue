<template>
    <div id="props">
        <h1>Parent to child transfer Props</h1>
        <h3 v-for="user in users" :key="user.name">{{user.name}} -- {{user.email}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Props",
        props: ["users"],
    };
</script>