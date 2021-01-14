<template>
  <v-tabbar v-model="active">
    <v-tabbar-item icon="home-o" route to="/">首页</v-tabbar-item>
    <v-tabbar-item icon="search" route to="/mine">消息</v-tabbar-item>
    <v-tabbar-item icon="friends-o" route to="/car">购物车</v-tabbar-item>
    <v-tabbar-item icon="setting-o" route to="/mine">我的</v-tabbar-item>
  </v-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
import { ref } from "vue";
export default {
  setup() {
    const active = ref(0);
    return { active };
  },
  components: {
    'v-tabbar': Tabbar,
    'v-tabbar-item': TabbarItem
  }
};
</script>