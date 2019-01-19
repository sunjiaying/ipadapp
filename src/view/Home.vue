<template>
  <div id="app">
    <van-nav-bar
      title="首页"
    />
    <van-row class="row1">
      <van-col span="8">
        <van-panel title="标题" desc="描述信息" status="状态">
          <div></div>
          <div slot="footer">
            <van-button size="small">按钮</van-button>
            <van-button size="small" type="danger">按钮</van-button>
          </div>
        </van-panel>
      </van-col>
      <van-col span="8">
        <van-panel title="标题" desc="描述信息" status="状态">
          <div></div>
          <div slot="footer">
            <van-button size="small">按钮</van-button>
            <van-button size="small" type="danger">按钮</van-button>
          </div>
        </van-panel>
      </van-col>
      <van-col span="8">
        <van-panel title="标题" desc="描述信息" status="状态">
          <div></div>
          <div slot="footer">
            <van-button size="small">按钮</van-button>
            <van-button size="small" type="danger">按钮</van-button>
          </div>
        </van-panel>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { NavBar, Panel, Row, Col, Icon, Button } from 'vant';

export default {
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Panel.name]: Panel,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style>
.row1 .van-col {
  padding: 10px;
}
</style>
