import Vue from 'vue';
import Router from 'vue-router';
import App from "@/App";
import HelloWorld from '@/components/HelloWorld';
import Collect from '../components/Collect';
import ItemPlay from '../components/ItemPlay';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"*",
      redirect:"helloworld"
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    },
    {
      path: '/itemplay/:id',
      name: 'ItemPlay',
      component: ItemPlay
    },
  ]
})
