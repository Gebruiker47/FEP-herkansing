import {Router} from '@vaadin/router';
    const outlet = document.querySelector('#outlet');
    export const router = new Router(outlet);

    router.setRoutes([
      {path:'/', component:'my-container'},
      {path:'/addCoin', component: 'add-coin'},
    ]);
