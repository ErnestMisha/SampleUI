<template>
  <Navigation/>
  <router-view/>
</template>
<script>
import Navigation from '/src/components/Navigation';
import { mapActions } from 'vuex';

export default {
  components: {
    Navigation
  },
  methods: {
    ...mapActions([
      "getData"
    ])
  },
  created() {
    this.getData();
  }
}
</script>