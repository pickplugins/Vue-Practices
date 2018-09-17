

Vue.component('accordion',{


    template: '<div class="accordion"><slot></slot></div>',

    data: function () {
        return {
            accordion:[],
        }
    },

    created(){

        this.accordion = this.$children;

        //console.log(this.$children);
    },
    methods:{
        selectTab(selectedTab){

            this.accordion.forEach(tab =>{
                tab.isActive = (tab.name == selectedTab.name);

            });




        }
    }


});


Vue.component('accordionitem',{
    template: '<div :class="accordionClasses" @click="toggleAccordion"><div class="header"><slot name="header"></slot></div> <div class="content"><slot></slot></div> </div>',
    props:{
        name: {required: true},
    },
    data() {
        return {
            isOpen: true
        };

    },

    methods: {
        toggleAccordion: function() {
            this.isOpen = !this.isOpen;
        }
    },
    computed: {
        accordionClasses: function() {
            return {
                'is-open': !this.isOpen,
                'item': true,



            };
        }
    }
});










new Vue({
    el: "#app",

})