<template>
  <div id="app">
    <van-tabbar v-model="active" active-color="#ff0000">
      <van-tabbar-item icon="home-o" @click="onClickHome">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot @click="onClickPage1">Page1</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">Page2</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">设置</van-tabbar-item>
    </van-tabbar>

    <router-view />
  </div>
</template>

<script>
import { Tabbar, TabbarItem, NavBar } from 'vant';

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickHome() {
      this.$router.push('home');
    },
    onClickPage1() {
      this.$router.push('page1');
    }
  }
};
</script>

<style>
body {
  background-color: #f8f8f8;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>
