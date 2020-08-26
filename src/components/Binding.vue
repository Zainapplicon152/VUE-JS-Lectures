<template>
    <div>
        <h1 class="normal">Class and Object binding</h1>
        <h1 v-bind:style="{color:colorKey}">Style Binding</h1>
        <h1 v-bind:class="{objectClass:show}">Class binding with object</h1>
        <h1 v-bind:class="['arrayClass' , 'normal']">Class binding with array</h1>
    </div>
</template>

<script>
    export default {
        name: "Binding",
        data() {
            return {
                colorKey: "blue",
                aclass: 'arrayClass',
                show: true
            };
        },
    };
</script>

<style>
    .normal {
        color: blueviolet;
    }

    .objectClass {
        background-color: cyan;
    }

    .arrayClass {
        background-color: bisque;
    }
</style>