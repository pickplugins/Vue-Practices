

Vue.component('tabs',{


    template: '<div><div class="tabs"><ul class="tab-navs"><li :class="{active: tab.isActive }" @click="selectTab(tab)" v-for="(tab, index) in tabs">{{tab.name}} - {{index}}</li></ul><div class="tab-details"><slot></slot></div> </div></div>',

    data: function () {
        return {
            tabs:[],
        }
    },

    created(){

        this.tabs = this.$children;

        //console.log(this.$children);


    },
    methods:{
        selectTab(selectedTab){

            this.tabs.forEach(tab =>{
                tab.isActive = (tab.name == selectedTab.name);

            });




        }
    }


});


Vue.component('tab',{
    template: '<div v-show="isActive"><slot></slot></div>',
    props:{
        name: {required: true},
        selected: {default: false}
    },
    data() {
        return {
            isActive: false,
        };

    },
    mounted() {
        this.isActive = this.selected;
    }
});










new Vue({
    el: "#app",

})