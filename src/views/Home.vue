<script>
import navbar from '@/components/navbar.vue';

export default {
  name: 'Home',
  components: {
    navbar,
  },
};
</script>

<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>
