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
                <DatePicker v-model="execDate" />
            </StackLayout>
            <StackLayout>
                <Label>Podaj jak ważne jest to zadanie: </Label>
                <Slider class="silder-input" v-model="importantLVL"/>
            </StackLayout>
            <Button class="btn" @tap="prepareData" text="Dodaj zadanie" />
        </StackLayout>
    </ScrollView>
</template>

<script>
    import Vue from "nativescript-vue";
    import {getString, setString} from 'tns-core-modules/application-settings'

    export default {
        name: "Add",
        data() {
            return {
                name: '',
                descriptionEnabled: false,
                description: '',
                execDate: new Date(),
                execTime: new Date(),
                exectHour: '',
                exectMinute: '',
                importantLVL: '',
                data: [],
            };
        },
        methods: {
            prepareData() {
                var can = true;
                const appData = JSON.parse(getString('todos', ''));

                if(appData === '') {
                    const todos = {
                        'todo': []
                    };
                    setString('todos', JSON.stringify(todos));
                }

                if(this.name === '') can = false;
                if(this.description === '' && this.descriptionEnabled === true) can = false;
                if(this.execDate === '') can = false;
                if(this.importantLVL === '' && this.importantLVL === 0) can = false;

                var des = '';
                if(this.descriptionEnabled === true) des = this.description;

                if (can) {
                    this.data = {
                        'name': this.name,
                        'description': des,
                        'execDate': this.execDate,
                        'importantLVL': this.importantLVL
                    };

                    appData.todo.push(this.data); //creating new Data
                    setString('todos', JSON.stringify(appData));
                    this.$emit('changeStage');


                } else {
                     alert({
                        title: "Brak danych",
                        message: "Masz za mało danych",
                        okButtonText: "OK"
                    });
                }
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
        margin: 10;
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

    .slider-input {
        color: #4484ce;
        width: 100px;
    }

    .btn{
        background-color: #4484ce;
        color: white;
        font-family: Karla-Bold;
    }

</style>