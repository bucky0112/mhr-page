<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Weapons',
  data() {
    return {};
  },
  created() {
    this.getWaepons();
  },
  computed: {
    ...mapState(['weapons']),
  },
  methods: {
    ...mapActions(['getWaepons']),
    intoWeaponPage(item) {
      this.$router.push({ name: 'Weapon', params: item });
    },
  },
};
</script>

<template>
  <b-container>
    <h1>Weapons</h1>
    <ul>
      <li
        v-for="(item, i) in weapons" :key="i"
        @click="intoWeaponPage(item)"
        class="icon-img"
      >
        <figure>
          <img :src="item.icon" :alt="item.title">
          <figcaption>
            {{ item.title }}
          </figcaption>
        </figure>
      </li>
    </ul>
  </b-container>
</template>

<style lang="scss" scoped>
.icon-img {
  background-color: grey;
  display: inline-block;
  margin-right: 10px;
  border-style: double;
  cursor: pointer;
  figcaption {
    display: block;
    text-align: center;
    margin-bottom: 10px;
    color: white;
  }
}
.icon-img:hover {
  background-color: #42A2B9;
}
</style>
