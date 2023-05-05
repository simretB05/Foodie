import Vue from 'vue'
import VueRouter from 'vue-router'
import MainHomePage from '@/views/MainHomePage.vue'
// import ClientHomePage from '@/views/ClientHomePage.vue'
import ClientSignupForm from '@/views/ClientSignupForm'
import ClientLoginPage from '@/views/ClientLoginPage'
// import RestaurantHomePage from '@/views/RestaurantHomePage.vue'
// import ClientLoginPage from '@/views/ClientLoginPage.vue'
import ClientProfilePage from '@/views/ClientProfilePage.vue'
import DiscoverPage from '@/views/DiscoverPage.vue'
import OrdersPage from '@/views/OrdersPage.vue'
import RestaurantSignupPage from '@/views/RestaurantSignupPage.vue'
import RestaurantLoginPage from '@/views/RestaurantLoginPage.vue'
import PartnerMenu from '@/views/PartnerMenu.vue'
import PartnersHomePage from '@/views/PartnersHomePage.vue'
import SinglePartnerHomePage from '@/views/SinglePartnerHomePage.vue'
// import RestaurantLoginPage from '@/views/OrdersPage.vue'
import RestaurantProfilePage from '@/views/RestaurantProfilePage.vue'
import RestaurantPublicPage from '@/views/RestaurantPublicPage.vue'
import ResturantDicoveryPage from '@/views/ResturantDicoveryPage'
import SingleRestaurantHomePage from '@/views/SingleRestaurantHomePage'
// import ShoppingCart from '@/views/ShoppingCart.vue'


Vue.use(VueRouter)

const routes = [
                {
                  path: '/',
                  component:MainHomePage ,
                },
                {
                  path: '/user-login',
                  component: ClientLoginPage,
                },
                {
                  path: '/user-signup',
                  component:ClientSignupForm,
                },  {
                  path: '/discovery-page',
                  component:DiscoverPage,
                },
                {
                  path: '/client-profile-page',
                  component:ClientProfilePage,
                },
                {
                  path: '/client-orders',
                  component:OrdersPage,
                },
                {
                  path: '/partner-home',
                  component:PartnersHomePage,
                },
                {
                path: '/partner-signup',
                component:RestaurantSignupPage,
              },
              {
                path: '/partner-login',
                component:RestaurantLoginPage,
              },
              {
                path: '/partner-public',
                component:RestaurantPublicPage,
              },
              {
                path: '/partner-menu',
                component:PartnerMenu,
              },
              {
                path: '/partner-profile',
                component:RestaurantProfilePage,
              },
              {
                path: '/partner-discovery',
                component:ResturantDicoveryPage ,
              },
              {
                path: '/single-partner-home',
                component:SinglePartnerHomePage ,
              },
              {
                path: '/single-restaurant-home',
                component:SingleRestaurantHomePage ,
              },
    
    
]
    
const router = new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})
// router.beforeEach( ( to, from, next ) =>
// {
  
//   let current_meta_tags = document.querySelectorAll( `meta` );
//   for ( let i = 0; i < current_meta_tags.length; i++ ) {
//     current_meta_tags[i].remove()
//   }
//     let new_meta_tag = to[`meta`]
//     document.querySelector(`title`)[`innerText`] = new_meta_tag[0][`title`]
//     for ( let i = 1; i < new_meta_tag.length; i++ ){
//       document.querySelector( `head` ).insertAdjacentHTML( `beforeend`, `<meta name="${ new_meta_tag[i][`name`] }" content="${ new_meta_tag[i][`content`] }">`)
//     }
//       document.querySelector( `head` ).insertAdjacentHTML( `afterbegin`,` <meta charset="utf-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width,initial-scale=1.0"> `)
    
//     from;
//     next()
    
//   }

// );
export default router
