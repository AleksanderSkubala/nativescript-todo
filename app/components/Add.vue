<template>
    <ScrollView orientation="vertical">
        <StackLayout id="container">
            <Label class="h1" text="Dodaj zadanie" />
            <!-- <TimePicker v-model="currentTime"/>
            <Label>godz:{{currentTime.getHours()}} min:{{currentTime.getMinutes()}}</Label> -->
            <TextField class="text-input" v-model="name" hint="Wprowadź nazwę zadania" />
            <StackLayout id="description-switch" orientation="horizontal">
                <Label>Opis</Label>
                <Switch class="switch-input" v-model="descriptionEnabled" />
            </StackLayout>
            <TextView class="multiline-input" v-model="description" hint="Wprowadź opis" v-if="descriptionEnabled"/>
            <StackLayout id="time-picker">
                <Label>Podaj termin ukończenia zadania: </Label>
                <TimePicker class="time-input" v-model="currentTime"/>
            </StackLayout>
            <StackLayout>
                <Label>Podaj jak ważne jest to zadanie: </Label>
                <Slider v-model="importantLVL" maxValue="50"/>
            </StackLayout>
            <Button class="btn" text="Dodaj zadanie" />
        </StackLayout>
    </ScrollView>
</template>

<script>
    import Vue from "nativescript-vue";

    export default {
        name: "Add",
        data() {
            return {
                name: '',
                descriptionEnabled: false,
                description: '',
                execTime: new Date(),
                exectHour: '',
                exectMinute: '',
                importantLVL: '',
                data: [],
            };
        },
        methods: {
            prepareData() {
                this.data
            },
        },
    };
</script>

<style scoped lang="scss">

    .h1 {
        font-family: Karla-Bold;
        font-size: 30;
        color: #4484ce;
        padding: 20;
    }

    #container {
        text-align: center;
        color: black;
        margin: 10 !important;
    }

    StackLayout {
        margin: 15;
    }

    Label {
        font-size: 14;
        padding: 5;
    }

    [class*="-input"] {
        padding: 20;
    }

    .text-input {
        border: .1 solid rgba(112, 112, 112, .19);
    }

    .switch-input {
        color: #4484ce;
    }

    .multiline-input {
        width: 70%;
    }

    .time-input {
        padding: 0 !important;
        margin: 0 !important;
    }

    .btn{
        background-color: #4484ce;
        color: white;
        font-family: Karla-Bold;
    }

</style>