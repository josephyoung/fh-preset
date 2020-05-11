<template>
  <div id="hello" @click="handleClick">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#hello {
  text-align: center;
  color: #42b983;
}
</style>
