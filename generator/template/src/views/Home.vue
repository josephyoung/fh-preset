<template>
  <div class="tac">
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
    HelloWorld,
  },

  computed: {
    ...mapState(['message']),

    ...mapGetters(['sentence']),
  },

  methods: {
    ...mapActions(['changeMessage']),

    async handleClick() {
      this.changeMessage();
    },
  },
};
</script>
