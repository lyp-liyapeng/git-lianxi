<template>
  <div class="ss">
    <div class="home">
      <div class="home-top">
        <div class="item">
          总销售额
          <p>{{ datalist.saleTotal | fix }}</p>
          <div class="sale">今日销售额：{{ datalist.viewsTotal | fix }}</div>
        </div>
        <div class="item">
          总访问量
          <p>{{ datalist.payTotal | fix }}</p>
          <div class="sale">今日访问量：{{ datalist.collectTotal | fix }}</div>
        </div>
        <div class="item">
          总收藏量
          <p>{{ datalist.sale  | fix}}</p>
          <div class="sale">今日收藏量：{{ datalist.pay | fix }}</div>
        </div>
        <div class="item">
          总支付量
          <p>{{ datalist.views | fix }}</p>
          <div class="sale">今日支付量：{{ datalist.collect  | fix}}</div>
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
          <div>产品销售比例</div>
          <div id="right-yuan"></div>
        </div>
      </div>
      <div class="home-bottom">
          <!-- 3. 底部 -->
          <div class="bottom">
            <div class="item">
                <div class="tit">今日订单</div>
                <div class="info">
                    <div class="num">
                        <p>今日订单数</p>
                        <p>{{ info.curOrderCount }}</p>
                    </div>
                    <div class="num">
                        <p>汇总确认订单</p>
                        <p>{{ info.curCollect }}</p>
                    </div>
                    <div class="num">
                        <p>累计金额</p>
                        <p>{{ info.curMoney }}</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="tit">本月订单</div>
                <div class="info">
                    <div class="num">
                        <p>本月订单数</p>
                        <p>{{ info.orderCount }}</p>
                    </div>
                    <div class="num">
                        <p>汇总确认订单</p>
                        <p>{{ info.collect }}</p>
                    </div>
                    <div class="num">
                        <p>累计金额</p>
                        <p>{{ info.money }}</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="tit">快捷入口</div>
                <div class="info">
                    <el-button type="primary">产品管理</el-button>
                    <el-button>消息管理</el-button>
                    <el-button>内容管理</el-button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      datalist: {},
      info: {},
      
    };
  },
  mounted() {
    
    
    this.getdataCount();
    this.getdataInfo();
    this.getdataFormat();
  },
  created() {},
  methods: {
    myChart(user,money1,money2) {
      let tubiao = echarts.init(document.getElementById("left-chart"));

      tubiao.setOption({
        grid: {},
        title: {},
        tooltip: {},
        legend: {},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
      
        xAxis: {
          data: user,
        },
        axisTick: {
          alignWithLabel: true
        },
        yAxis: {},
        series: [
          {
            name: "销售量",
            type: "bar",
            data: money2,
            itemStyle: {
              color: "#91cc75",
              shadowColor: "#91cc75",
              borderType: "dashed",
            },
          },
          {
            name: "销售额",
            data: money1,
            type: "line",
            smooth: true,
          },
        ],
      });
    },
    myyuan(yuanobj,user) {
      let tubiao = echarts.init(document.getElementById("right-yuan"));

      tubiao.setOption({
        tooltip: {},
        legend: {
          orient: "vertical",
          x: "left",
          data: user,
        },
        series: [
          {
            name:'销售额',
            type: "pie",
            data: yuanobj,
            radius: "50%",
          },
        ],
      });
    },
    async getdataCount() {
      let res = await this.$api.getDatCount();
      // console.log(res);
      this.datalist = res.data.data.list;
    },
    async getdataInfo() {
      let res = await this.$api.getDataInfo();
      // console.log(res.data.list);
      this.info = res.data.list
    },
    async getdataFormat() {
      let res = await this.$api.getdataFormat();
      // console.log(res.data.result.data.sale_money);
      let data = res.data.result.data.sale_money
      let user = [], money1 = [], money2 = [], yuanobj = [];

      data.map(item => {
        user.push(item.name);
        money1.push(item.total_amount);
        money2.push(item.num);

        let obj = {};
        obj.name = item.name;
        obj.value = item.total_amount;
        yuanobj.push(obj)
      })
      this.myChart(user, money1, money2);
      this.myyuan(yuanobj,user);
    },

  },
  filters: {
    fix(val) {
      if (!val) { return "" }
      return val.toLocaleString()
    }
  }
};
</script>

<style lang="less" scoped>
.ss {

  .home {
    margin: 10px 10px  0 10px ;

    .home-top {
      display: flex;
      // padding-right: 20px;
      .item {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .2);
        font-size: 16px;
        flex: 1;
        height: 100px;
        padding: 10px;
        background-color: rgb(144, 125, 218);
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
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
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
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        #right-yuan {
          width: 100%;
          height: 300px;
        }
      }
    }
    .home-bottom {
      // display: flex;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
      
    .bottom {
        margin-top: 20px;
        display: flex;

        .item {
            flex: 1;
            height: 150px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
            border: 1px solid #EBEEF5;
            background-color: #fff;
            border-radius: 4px;
            
            .tit {
                padding: 18px 20px;
                border-bottom: 1px solid #EBEEF5;
                font-weight: 700;
            }
            
            .info {
                text-align: center;
                padding: 20px;
                display: flex;

                .num {
                    flex: 1;
                    border-right: 1px solid #EBEEF5;

                    p:first-child {
                        font-size: 14px;
                        margin-bottom: 10px;
                    }

                    p:last-child {
                        font-size: 24px;
                    }
                }

                .num:last-child {
                    border-right: none;
                }
            }
        }

        .item:nth-child(2) {
            margin: 0 30px 0 10px;
        }
        .item:nth-child(3) {
          .info{
            margin-left: 35px;
          }
        }
    }
    }
  }
}
</style>