<template>
    <div>
        <h1>Data Bind</h1>
        <h1>{{message}}</h1>
        <input type="password" v-model="message"/>
    </div>
</template>

<script>
    export default {
        name: "DataBind",
        data() {
            return {
                message: "hi",
            };
        },
    };
</script>