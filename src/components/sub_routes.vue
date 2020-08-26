<template>
    <div>
        <h1>Sub Routes</h1>
        <h1>Sub Route id is {{routeId}}</h1>
    </div>
</template>

<script>
    export default {
        name: "sub_routes",
        data() {
            return {routeId: this.$route.params.id}
        }
    }
</script>

<style scoped>

</style>