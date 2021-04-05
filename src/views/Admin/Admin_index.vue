<script>
import adminNavbar from '@/components/admin_navbar.vue';

export default {
  name: 'Admin_index',
  components: {
    adminNavbar,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <adminNavbar />
    <router-view />
  </div>
</template>
