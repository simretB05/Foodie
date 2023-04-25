import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientLoginPage from '@/views/ClientLoginPage.vue'
import ClientProfilePage from '@/views/ClientProfilePage.vue'
import DiscoverPage from '@/views/DiscoverPage.vue'
import OrdersPage from '@/views/OrdersPage.vue'
import RestaurantLoginPage from '@/views/OrdersPage.vue'
import RestaurantProfilePage from '@/views/RestaurantProfilePage.vue'
import RestaurantPublicPage from '@/views/RestaurantPublicPage.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'


Vue.use(VueRouter)

const routes = [
      {
    path:'/',
    component: ClientLoginPage,
    meta: [
      {
        title: `Log In to Your Foodi Account for Online Food Ordering`
        
      },{
        name:`author`,
        content: `Smiret`,
      },
      {
        name:`discription`,
        content:`Log in to your Foodi account to enjoy convenient online food ordering. Order your favorite food from your favorite restaurants today.`,
      },
      {
        name: `keywords`,
        content:`Foodi login, online food ordering, account access`
      },
    ]
  },
  {
    path:'/profile',
    component: ClientProfilePage,
    meta: [
      {
        title: `Manage Your Foodi Account for Online Food Ordering`
        
      },{
        name:`author`,
        content: `Smiret`,
      },
      {
        name:`discription`,
        content:`View and manage your Foodi account for easy online food ordering. Check your order history, update your information, and more.`,
      },
      {
        name: `keywords`,
        content:`Foodi account management, online food ordering, order history`
      },
    {
    path:'/discover',
    component:DiscoverPage,
    meta: [
      {
        title: `Discover Your Favorite Restaurants on Foodi for Online Food Ordering`
        
      },{
        name:`author`,
        content: `Smiret`,
      },
      {
        name:`discription`,
        content:`Explore Foodi to discover new restaurants and cuisines for online food ordering. Find your next favorite meal today.`,
      },
      {
        name: `keywords`,
        content:`"Foodi restaurant discovery, online food ordering, new cuisine`
      },
    ]
      },
      {
        path:'/orders',
        component: OrdersPage,
        meta: [
          {
            title: `View and Manage Your Foodi Orders for Online Food Ordering`
            
          },{
            name:`author`,
            content: `Smiret`,
          },
          {
            name:`discription`,
            content:`View and manage your past and current orders on Foodi for easy online food ordering. Check your order history, track your delivery, and more.!`,
          },
          {
            name: `keywords`,
            content:`Foodi order history, online food ordering, order management`
          },
        ]
      },
      {
        path:'/login-page',
        component:RestaurantLoginPage,
        meta: [
          {
            title: `Log In to Your Foodi Restaurant Account for Online Food Ordering`
            
          },{
            name:`author`,
            content: `Smiret`,
          },
          {
            name:`discription`,
            content:`Log in to your Foodi restaurant account to manage your menu, orders, and more for online food ordering. Join Foodi today to grow your business.`,
          },
          {
            name: `keywords`,
            content:`Foodi restaurant login, online food ordering, account access`
          },
        ]
      },
      {
        path:'/restaurant-page',
        component:RestaurantProfilePage,
        meta: [
          {
            title: `Manage Your Foodi Restaurant Account for Online Food Ordering`
            
          },{
            name:`author`,
            content: `Smiret`,
          },
          {
            name:`discription`,
            content:`View and manage your restaurant's menu, orders, and more on Foodi for easy online food ordering. Join Foodi today to grow your business`,
          },
          {
            name: `keywords`,
            content:`"Foodi restaurant account management, online food ordering, menu management`
          },
        ]
      },
      {
        path:'/restaurant-public',
        component:RestaurantPublicPage,
        meta: [
          {
            title: `"Order Food from Your Favorite Restaurant on Foodi for Easy Online Food Ordering`
            
          },{
            name:`author`,
            content: `Smiret`,
          },
          {
            name:`discription`,
            content:`Discover and order food from your favorite restaurant on Foodi for easy online food ordering. Check out our menu and place your order today`,
          },
          {
            name: `keywords`,
            content:`"Foodi restaurant discovery, online food ordering, menu`
          },
        ]
      },
      {
        path:'/shopping-cart',
        component:ShoppingCart,
        meta: [
          {
            title: `View and Manage Your Foodi Shopping Cart for Online Food Ordering`
            
          },{
            name:`author`,
            content: `Smiret`,
          },
          {
            name:`discription`,
            content:`View and manage items in your shopping cart on Foodi for easy online food ordering. Place your order today and enjoy delicious food from your favorite restaurants.`,
          },
          {
            name: `keywords`,
            content:`"Foodi shopping cart, online food ordering, order management`
          },
        ]
      },
    ]
        
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach( ( to, from, next ) =>
{
  
  let current_meta_tags = document.querySelectorAll( `meta` );
  for ( let i = 0; i < current_meta_tags.length; i++ ) {
    current_meta_tags[i].remove()
  }
    let new_meta_tag = to[`meta`]
    document.querySelector(`title`)[`innerText`] = new_meta_tag[0][`title`]
    for ( let i = 1; i < new_meta_tag.length; i++ ){
      document.querySelector( `head` ).insertAdjacentHTML( `beforeend`, `<meta name="${ new_meta_tag[i][`name`] }" content="${ new_meta_tag[i][`content`] }">`)
    }
      document.querySelector( `head` ).insertAdjacentHTML( `afterbegin`,` <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1.0"> `)
    
    from;
    next()
    
  }

);
export default router
