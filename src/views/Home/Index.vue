<template>
  <div class="ss">
    <div class="home">
      <div class="home-top">
        <div class="item">
          总销售额
          <p>123466</p>
          <div class="sale">今日销售额：123235</div>
        </div>
        <div class="item">
          总销售额
          <p>123466</p>
          <div class="sale">今日销售额：123235</div>
        </div>
        <div class="item">
          总销售额
          <p>123466</p>
          <div class="sale">今日销售额：123235</div>
        </div>
        <div class="item">
          总销售额
          <p>123466</p>
          <div class="sale">今日销售额：123235</div>
        </div>
      </div>
      <div class="home-content">
        <div class="h-c-left">
          <div class="left-sales">月销售额</div>
          <div
            class="left-chart"
            id="left-chart"
            style="width: 856px; height: 300px"
          ></div>
        </div>
        <div class="h-c-right">
          <div id="right-yuan"></div>
        </div>
      </div>
      <div class="home-bottom"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    this.myChart();
    this.myyuan();
  },
  created() {},
  methods: {
    myChart() {
      let tubiao = echarts.init(document.getElementById("left-chart"));

      tubiao.setOption({
        title: {},
        tooltip: {},
        xAxis: {
          data: ["肉类", "水产", "蔬菜", "冷饮", "水果"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [12344, 9472, 23052, 4577, 22888],
            itemStyle: {
              color: "#91cc75",
              shadowColor: "#91cc75",
              borderType: "dashed",
            },
          },
          {
            data: [62344, 15472, 33052, 9977, 42888],
            type: "line",
            smooth: true,
          },
        ],
      });
    },
    myyuan() {
      let tubiao = echarts.init(document.getElementById("right-yuan"));

      tubiao.setOption({
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "联盟广告", "搜索引擎", "水大王", "旱拔葱"],
        },
        series: [
          {
            type: "pie",
            data: [
              {
                value: 335,
                name: "直接访问",
              },
              {
                value: 234,
                name: "联盟广告",
              },
              {
                value: 548,
                name: "搜索引擎",
              },
              {
                value: 218,
                name: "水大王",
              },
              {
                value: 148,
                name: "旱拔葱",
              },
            ],
            radius: "50%",
          },
        ],
      });
    },
  },
};
</script>

<style lang="less" scoped>
.ss {
  background: #ecececec;
  .home {
    margin: 10px;

    .home-top {
      display: flex;
      padding-right: 30px;
      .item {
        font-size: 16px;
        flex: 1;
        height: 100px;
        padding: 10px;
        background-color: slategrey;
        border-radius: 10px;
        margin-left: 20px;
        margin-right: 20px;
        font-weight: bold;
        color: #fff;
        position: relative;
        p {
          // text-align: center;
          font-size: 22px;
          margin: 10px;
        }
        .sale {
          position: absolute;
          border-top: 1px solid #f6f5f5;
          padding: 10px 20px;
          bottom: 0;
          right: 0;
          left: 0;
          color: #fff;
          font-size: 16px;
          font-weight: normal;
        }
      }
      .home-top:nth-child(1) {
        background-color: linear-gradient(#df887d, #88554d);
      }
    }
    .home-content {
      margin: 20px;
      display: flex;
      height: 320px;
      .h-c-left {
        flex: 2;
        background: #fff;
        margin-right: 20px;
        padding: 10px;
        .left-sales {
          margin: 0;
        }
        .left-chart {
          width: 100%;
          height: 300px;
          position: relative;
        }
      }
      .h-c-right {
        padding: 10px;
        background: #fff;
        flex: 1;
        #right-yuan {
          width: 100%;
          height: 300px;
        }
      }
    }
    .home-bottom {
      display: flex;
      padding-left: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>