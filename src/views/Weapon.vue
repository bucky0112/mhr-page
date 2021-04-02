<script>
export default {
  name: 'Weapon',
  data() {
    return {
      weaponData: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.weaponData = this.$route.params;
    },
  },
};
</script>

<template>
  <b-container>
    <h1>{{ weaponData.title }}</h1>
  </b-container>
</template>
