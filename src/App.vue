<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-17 13:16:24
 * @LastEditTime: 2021-11-18 15:19:15
 * @LastEditors: MArio
-->
<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Layout/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Layout from "./view/Layout";
export default {
  name: 'App',
  components: {
    // HelloWorld
    Layout
  }
}
</script>

<style>
  html,
  body #app {
    height: 100%;
    /* border-radius: 10px; */
    overflow: hidden;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
    margin:0px;
    width: 100%;
    height: 100%;
    /* height:-webkit-fill-available; */
    /* min-width: 1334px;
    min-height: 830px; */
  }
</style>
