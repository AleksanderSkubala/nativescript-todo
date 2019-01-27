<template>
    <Page class="page">
        <ActionBar title="TODO">
            <Stacklayout horizontalAlignment="left" orientation="horizontal">
                <Image id="menuIcon" @tap="onDrawerTap" src="~/assets/menu-icon-white.png" stretch="none" />
                <Label text="TODO" class="barHeader" />
            </Stacklayout>
        </ActionBar>
        <GridLayout rows="*">
            <RadSideDrawer ref="drawer">
                <StackLayout ~drawerContent id="drawer" backgroundColor="white">
                    <StackLayout class="drawer-list">
                        <Label class="drawerBtn" text="Home" @tap="changeStage(1)" />
                        <Label class="drawerBtn" text="Dodaj zadanie" @tap="changeStage(2)" />
                        <Label class="drawerBtn" text="Lista zadań" @tap="changeStage(3)" />
                    </StackLayout>
                    <Label id="close" text="Zamknij" @tap="onCloseDrawerTap" />
                </StackLayout>
                <StackLayout ~mainContent id="main">
                    <Home @start="stage=2" v-if="stage === 1"></Home>
                    <Add @changeStage="changeStage(3)" v-if="stage === 2"></Add>
                    <List v-if="stage === 3"></List>
                </StackLayout>
            </RadSideDrawer>
        </GridLayout>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    Vue.use(RadSideDrawer);

    import Home from "./Home.vue";
    import Add from "./Add.vue";
    import List from "./List.vue";

    export default {
        name: "App",
        components: {
            Home,
            Add,
            List,
        },
        data() {
            return {
                stage: 1,
                menuToggle: false,
            };
        },
        methods: {
            onDrawerTap() {
                if(this.menuToggle) {
                    this.$refs.drawer.nativeView.closeDrawer();
                    this.menuToggle = false;
                }
                else {
                    this.$refs.drawer.nativeView.showDrawer();
                    this.menuToggle = true;
                }
            },

            onOpenDrawerTap() {
                // document.querySelector('#menuIcon').classList.toggle("change");
                this.$refs.drawer.nativeView.showDrawer();
                this.menuToggle = true;
            },
            onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
                this.menuToggle = false;
            },
            changeStage(stageNr) {
                this.stage = stageNr;
                this.$refs.drawer.nativeView.closeDrawer();
            },
        }
    };
</script>

<style scoped lang="scss">

    .page {
        //font-family: Karla-Regular, Karla-Bold, Karla-Italic, Karla-BoldItalic;
    }

    ActionBar {
        background-color: #4484ce;
        color: white;
    }

    .barHeader {
        font-size: 25;
        //font-family: Karla-Bold;
        font-weight: bold;
        margin-left: 10;
    }

    #menuIcon {
        vertical-align: center;
        padding: 10;
        transform: scale(1.2);
    }

    #start {
        height: 56;
        text-align: center;
        vertical-align: center;
    }

    #close {
        padding: 10;
        horizontal-align: center;
    }

    #drawer {
        background-color: white;
        margin: auto 0;
    }

    .drawer-list {
        margin-top: 10;

        Label {
            padding: 10;
        }

        .drawerBtn {
            width: 80%;
            padding: 10;
            margin: 2;

            font-weight: bold;
            font-size: 17;

            color: #4484ce;
        }
    }

    #main {

        padding: 15;
        font-size: 15;
        color: black;

    }
</style>