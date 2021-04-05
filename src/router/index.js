import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Monsters from '../views/Monsters.vue';
import Monster from '../views/Monster.vue';
import Weapons from '../views/Weapons.vue';
import Weapon from '../views/Weapon.vue';
import AdminIndex from '../views/Admin/Admin_index.vue';
import AddWeaponData from '../views/Add_weapon_data.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/Monsters',
        name: 'Monsters',
        component: Monsters,
      },
      {
        path: '/Monster',
        name: 'Monster',
        component: Monster,
      },
      {
        path: '/Weapons',
        name: 'Weapons',
        component: Weapons,
      },
      {
        path: '/Weapon',
        name: 'Weapon',
        component: Weapon,
      },
    ],
  },
  {
    path: '/AdminIndex',
    name: 'AdminIndex',
    component: AdminIndex,
    children: [
      {
        path: '/AddWeaponData',
        name: 'AddWeaponData',
        component: AddWeaponData,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
