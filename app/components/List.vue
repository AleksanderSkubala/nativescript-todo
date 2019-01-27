<template>
    <StackLayout id="container">
        <StackLayout>
            <Label class="h1">Lista zadań</Label>
            <Label textWrap="true" id="lastLBL">kilknij na wybrana pozycje, aby dowiedzieć się więcej</Label>
            <ListView for="item in data.todo">
                <v-template>
                    <FlexboxLayout orienation="horizontal">
                        <StackLayout class="btn-done" @tap="deleteItem(item)">
                            <Image src="~/assets/check-icon-white.png" stretch="fill" />
                        </StackLayout>
                        <StackLayout class="item-info" horizontalAlignment="left" @tap="onItemTap(item)">
                            <Label class="item-name" :text="item.name" />
                            <Label class="item-date" :text="returnDate(item.execDate)" />
                        </StackLayout>
                    </FlexboxLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </StackLayout>
</template>

<script>
    import Vue from "nativescript-vue";
    import {getString, setString} from 'tns-core-modules/application-settings'

    export default {
        name: "List",
        data() {
            return {
                data: {},
            };
        },
        methods: {
            onItemTap (item){
                alert({
                    title: `${item.name}`,
                    message: `${item.description}\n${item.execDate.slice(0, 10)}`,
                    okButtonText: "OK"
                });
            },
            returnDate(d) {
                return d.slice(0, 10);
            },
            deleteItem(item) {
                var index = this.data.todo.indexOf(item);
                var appData = this.data.todo;

                const firstArr = appData.slice(0,index);
                const secondArr = appData.slice(index+1);

                confirm({
                    title: 'Usuń zadanie',
                    message: 'Czy skończyłeś zadanie?',
                    okButtonText: "TAK",
                    cancelButtonText: "NIE"
                })
                .then(response => {
                    if(response === true) {
                        this.data.todo = firstArr.concat(secondArr);
                        setString('todos', JSON.stringify(this.data));
                    }
                });

            },
        },
        mounted:function() {
            this.data = JSON.parse(getString('todos', ''));
        },
    };
</script>

<style scoped lang="scss">

    .h1 {
        //font-family: Karla-Bold;
        font-weight: bold;
        font-size: 30;
        color: #4484ce;
        padding: 15 20 5 20;
    }

    #lastLBL {
        margin-bottom: 10;
    }

    #container {
        text-align: center;
        color: black;
        margin: 5 !important;
    }

    .btn{
        background-color: #4484ce;
        color: white;
        //font-family: Karla-Bold;
        font-weight: bold;
    }

    .btn-done{
        background-color: #4484ce;
        color: white;
        align-items: center;

        border-radius: 50%;
        margin: 10;
        height: 40;
        width: 40;

        Image {
            height: 18;
            width: 24;
            margin-top: 12.5;
        }
    }

    .item-info {
        margin: 10;

        .item-name {
            font-size: 20;
            color: black;
            display: flex;
        }

        .item-date {
            font-size: 15;
            color: gray;
        }

    }

</style>