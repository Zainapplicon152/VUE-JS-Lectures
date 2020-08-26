<template>
    <div id="1">
        <h1>{{name | ucase}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Cycle",
        data() {
            return {
                name: "life cycle",
            };
        },
        created() {
            console.log("created");
        },
        beforeCreate() {
            console.log("before created");
        },
        beforeMount() {
            console.log("before mounted", document.getElementById("1"));
        },
        mounted() {
            console.log("mounted", document.getElementById("1"));
        },
        beforeDestroy() {
            alert("Before Destroy");
        },
        destroyed() {
            alert("Destroyed");
        },
    };
</script>