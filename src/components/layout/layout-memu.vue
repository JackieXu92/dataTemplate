<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['0']">
          <div class="layout-logo-left"></div>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate" :size="iconSize"></Icon>
              <span class="layout-text">导航1</span>
            </template>
            <div class="layout-text">
              <MenuItem name="1-1">
                <router-link to="/dataTest">选项 1</router-link>
              </MenuItem>
              <MenuItem name="1-2">
                <router-link to="/dataTest2">选项 2</router-link>
              </MenuItem>
              <MenuItem name="1-3">选项 3</MenuItem>
            </div>
          </Submenu>
        </Menu>
      </Col>
      <Col :span="spanRight">
      <div class="rightWrap">
        <div class="layout-header">
          <Button type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </Button>
          <div class="user">
            <Avatar icon="person" size="large" />
          </div>

        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem href="/">首页</BreadcrumbItem>
            <BreadcrumbItem href="#"></BreadcrumbItem>
            <BreadcrumbItem replace></BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <slot>

          </slot>
        </div>
        <div class="layout-copy">
          2011-2016 &copy; TalkingData
        </div>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
//  import Memu from 'iview/src/components/menu'
//  import Breadcrumb from  'iview/src/components/breadcrumb'
  export default {
    components:{
//      Memu,
//      Breadcrumb
    },
    data () {
      return {
        spanLeft: 5,
        spanRight: 19
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24;
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 5;
          this.spanRight = 19;
        }
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .layout{
    width: 100%;
    height: 100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 350px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    line-height: 40px;
    text-align: center;
    color: #9ea7b4;
  }
  .layout-menu-left{
    height: 100%;
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    height: 100%;
    transition: width .2s ease-in-out;
  }
  .ivu-menu-item a{
    color: #fff;
  }
  .rightWrap{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .user{
    height: 40px;
    line-height: 40px;
    float: right;
    margin-right: 70px;
    margin-top: 10px;
  }

</style>
