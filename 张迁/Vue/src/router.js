import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);
import inputPage from './pages/inputPage.vue';
import outputPage from './pages/outputPage.vue';

export default  new VueRouter({
    routes:[{
       name:"input",
       path:"/input",
       component:inputPage
    },{
       name:"output",
       path:"/output",
       component:outputPage
    },{
        path:'/*',
        redirect:'/input'
    }]
});
