<template>
    <ScrollView orientation="vertical" scrollBarIndicatorVisible="true">
    <Stacklayout id="container" orientation="vertical">
        <Label id="header" text="TODO" />
        <Label class="description" textWrap="true">Ta aplikacja ma pomóc Tobie wykonywaniu zadań.</Label>
        <Label class="description" textWrap="true">Jeżeli nie pamiętasz wszystkich zadań, lub nie chcesz się tym przejmować</Label>
        <Label class="scream" text="WYBIERZ TODO!" />
        <Button class="btn" text="Dodaj zadanie" @tap="$emit('start')" />
    </Stacklayout>
    </ScrollView>
</template>

<script>
    import Vue from "nativescript-vue";

    export default {
        name: "Home",
        data() {
            return {};
        }
    };
</script>

<style lang="scss">

#container {
    font-family: Karla-Regular, Karla-Bold, Karla-Italic, Karla-BoldItalic;
    text-align: center;

    * {
        horizontal-align: center;
    }
}

#header {
    font-size: 40;
    font-family: Karla-Regular;
    padding: 15;
}

.description {
    width: 80%;
    font-size: 17;
    text-align: justify;
}

.scream {
    font-size: 40;
    font-family: Karla-BoldItalic;
    padding: 20;
    color: #4484ce;
}

.btn{
    background-color: #4484ce;
    color: white;
    font-family: Karla-Bold;
}

</style>