<script>
import { mapState } from 'vuex';

export default {
  name: 'Weapons',
  data() {
    return {};
  },
  computed: {
    ...mapState(['weapons']),
  },
  methods: {
    intoWeaponPage(item) {
      this.$router.push({ name: 'Weapon', params: item });
    },
  },
};
</script>

<template>
  <b-container>
    <h1>Weapons</h1>
    <ul v-for="(item, i) in weapons" :key="i">
      <li @click="intoWeaponPage(item)">
        {{ item.title }}
      </li>
    </ul>
  </b-container>
</template>
