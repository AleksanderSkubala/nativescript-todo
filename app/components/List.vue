<template>
    <Label>{{data}}</Label>
</template>

<script>
    import Vue from "nativescript-vue";

    export default {
        name: "List",
        data() {
            return {
                data: {},
            };
        },
        mounted:function() {
            this.data = getData();
        },
    };
</script>

<style>
</style>