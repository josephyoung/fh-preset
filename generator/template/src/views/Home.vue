<template>
  <div style="text-align: center;">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="sentence" @click="handleClick" />
  </div>
</template>

<script>
// @ is an alias to /src
import { createNamespacedHelpers } from 'vuex';
import { HelloWorld } from '@/components';

const { mapState, mapGetters, mapActions } = createNamespacedHelpers('example');

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  computed: {
    ...mapState(['message']),

    ...mapGetters(['sentence'])
  },

  methods: {
    ...mapActions(['changeMessage']),

    handleClick() {
      console.log(this.message);
      this.changeMessage();
    }
  }
};
</script>
