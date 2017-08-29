<template>
  <div id="app">
    <layout-memu>
      <router-view>
      </router-view>
    </layout-memu>
  </div>
</template>

<script type="text/ecmascript-6">
  import LayoutMemu from './components/layout/layout-memu.vue'
  export default {
    components: {
         LayoutMemu
       },
    name: 'app'
  }

</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
