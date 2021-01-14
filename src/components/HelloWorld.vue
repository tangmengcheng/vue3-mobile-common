<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <v-button style="color: red;" type="primary" size="large">大号按钮</v-button>
    <Tab></Tab>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from 'vant';
import Tab from '../views/home/index.vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    'v-button': Button,
    Tab
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  .title {
    width: 75px;
  }
}
</style>
