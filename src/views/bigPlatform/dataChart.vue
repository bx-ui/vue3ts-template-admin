<template>
  <div class="next-container px-5 py-2 box">
    <div class="w-100 d-flex mb-2" style="height: 48%">
      <div style="width: calc(50% - 10px)" class="h-100 mr-2 total">
        <div class="title">院士年龄分布</div>
        <div
          style="height: calc(100% - 50px)"
          class="w-100 mt-5"
          id="mainOne"
        ></div>
      </div>
      <div style="width: calc(50% - 10px)" class="h-100 mr-2 total">
        <div class="title">院士年龄分布</div>
        <div style="height: calc(100% - 50px)" class="w-100 mt-5"></div>
      </div>
    </div>
    <div class="w-100 d-flex" style="height: 48%">
      <div style="width: calc(50% - 10px)" class="h-100 mr-2 total">
        <div class="title">院士年龄分布</div>
        <div style="height: calc(100% - 50px)" class="w-100 mt-5"></div>
      </div>
      <div style="width: calc(50% - 10px)" class="h-100 mr-2 total">
        <div class="title">院士年龄分布</div>
        <div
          style="height: calc(100% - 50px)"
          class="w-100 mt-5"
          id="mainFour"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";
export default {
  setup() {
    const echartInitFour = () => {
      const myChart = echarts.init(
        document.getElementById("mainFour") as HTMLElement
      );
      // 指定图表的配置项和数据
      const option = {
        color: ["#58BDFF"],
        series: [
          {
            type: "bar",
            legendHoverLink: true,
            data: [3861, 1606, 1433, 2421, 655, 116, 2],
            showBackground: false,
            barMinHeight: 0,
            barCategoryGap: "70%",
            barGap: "30%",
            large: false,
            largeThreshold: 400,
            seriesLayoutBy: "column",
            datasetIndex: 0,
            clip: true,
            zlevel: 0,
            z: 2,
            barWidth: "24px",
            label: { show: true, position: "top", color: "#fff", margin: 8 },
            itemStyle: {
              normal: {
                barBorderRadius: [30, 30, 0, 0],
                color: function(params) {
                  return {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0, // 颜色的开始位置
                        color: "#04C8EB" // 0% 处的颜色
                      },
                      {
                        offset: 1, // 颜色的结束位置
                        color: "#017CE9" // 100% 处的颜色
                      }
                    ]
                  };
                }
              }
            },
            rippleEffect: {
              show: true,
              brushType: "stroke",
              scale: 2.5,
              period: 4
            }
          }
        ],
        tooltip: {
          show: true,
          trigger: "item",
          triggerOn: "mousemove|click",
          axisPointer: { type: "line" },
          showContent: true,
          alwaysShowContent: false,
          showDelay: 0,
          hideDelay: 100,
          textStyle: { fontSize: 14 },
          borderWidth: 0,
          padding: 5
        },
        xAxis: [
          {
            show: true,
            scale: false,
            nameLocation: "end",
            nameGap: 15,
            gridIndex: 0,
            axisLine: { show: false, onZero: true, onZeroAxisIndex: 0 },
            axisTick: { show: false, alignWithLabel: false, inside: false },
            axisLabel: {
              show: true,
              position: "top",
              color: "#fff",
              margin: 8,
              interval: 0
            },
            inverse: false,
            offset: 0,
            splitNumber: 5,
            minInterval: 0,
            splitLine: {
              show: false,
              lineStyle: {
                show: true,
                width: 1,
                opacity: 1,
                curveness: 0,
                type: "solid"
              }
            },
            data: [
              "生物医药",
              "高端装备制造",
              "新一代信息技术",
              "新能源新材料",
              "设计研发",
              "海洋经济",
              "军民融合"
            ]
          }
        ],
        yAxis: [
          {
            show: false,
            scale: false,
            nameLocation: "end",
            nameGap: 15,
            gridIndex: 0,
            inverse: false,
            offset: 0,
            splitNumber: 5,
            minInterval: 0,
            splitLine: {
              show: false,
              lineStyle: {
                show: true,
                width: 1,
                opacity: 1,
                curveness: 0,
                type: "solid"
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    };
    const echartInitTwo = () => {
      const myChart = echarts.init(
        document.getElementById("mainOne") as HTMLElement
      );
      // 指定图表的配置项和数据
      const option = {
        color: ["#58BDFF"],
        series: [
          {
            type: "bar",
            legendHoverLink: true,
            data: [3861, 1606, 1433, 2421, 655, 116, 2],
            showBackground: false,
            barMinHeight: 0,
            barCategoryGap: "70%",
            barGap: "30%",
            large: false,
            largeThreshold: 400,
            seriesLayoutBy: "column",
            datasetIndex: 0,
            clip: true,
            zlevel: 0,
            z: 2,
            barWidth: "24px",
            label: { show: true, position: "top", color: "#fff", margin: 8 },
            itemStyle: {
              normal: {
                barBorderRadius: [30, 30, 0, 0],
                color: function(params) {
                  return {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0, // 颜色的开始位置
                        color: "#04C8EB" // 0% 处的颜色
                      },
                      {
                        offset: 1, // 颜色的结束位置
                        color: "#017CE9" // 100% 处的颜色
                      }
                    ]
                  };
                }
              }
            },
            rippleEffect: {
              show: true,
              brushType: "stroke",
              scale: 2.5,
              period: 4
            }
          }
        ],
        tooltip: {
          show: true,
          trigger: "item",
          triggerOn: "mousemove|click",
          axisPointer: { type: "line" },
          showContent: true,
          alwaysShowContent: false,
          showDelay: 0,
          hideDelay: 100,
          textStyle: { fontSize: 14 },
          borderWidth: 0,
          padding: 5
        },
        xAxis: [
          {
            show: true,
            scale: false,
            nameLocation: "end",
            nameGap: 15,
            gridIndex: 0,
            axisLine: { show: false, onZero: true, onZeroAxisIndex: 0 },
            axisTick: { show: false, alignWithLabel: false, inside: false },
            axisLabel: {
              show: true,
              position: "top",
              color: "#fff",
              margin: 8,
              interval: 0
            },
            inverse: false,
            offset: 0,
            splitNumber: 5,
            minInterval: 0,
            splitLine: {
              show: false,
              lineStyle: {
                show: true,
                width: 1,
                opacity: 1,
                curveness: 0,
                type: "solid"
              }
            },
            data: [
              "生物医药",
              "高端装备制造",
              "新一代信息技术",
              "新能源新材料",
              "设计研发",
              "海洋经济",
              "军民融合"
            ]
          }
        ],
        yAxis: [
          {
            show: false,
            scale: false,
            nameLocation: "end",
            nameGap: 15,
            gridIndex: 0,
            inverse: false,
            offset: 0,
            splitNumber: 5,
            minInterval: 0,
            splitLine: {
              show: false,
              lineStyle: {
                show: true,
                width: 1,
                opacity: 1,
                curveness: 0,
                type: "solid"
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    };
    const echartInitOne = () => {
      const myChart = echarts.init(
        document.getElementById("mainOne") as HTMLElement
      );
      const option = {
        grid: [
          {
            height: "80%",
            top: "10%",
            width: "70%"
          },
          {
            height: "80%",
            width: "70%",
            top: "10%"
          }
        ],
        xAxis: [
          {
            // max: 500,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                color: "#7E8998"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              formatter: params => {
                return "{marginTop|" + params + "}";
              },
              rich: {
                marginTop: {
                  padding: [0, 0, 0, 0],
                  color: "#7E8998",
                  fontSize: 12,
                  fontFamily: "Microsoft YaHei",
                  fontWeight: 300
                }
              }
            }
          },
          {
            gridIndex: 1,
            show: true,
            offset: 13,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#7E8998"
              }
            }
          }
        ],
        yAxis: [
          {
            data: [
              "英国医学科学院",
              "美国国家医学院",
              "德国国家科学院",
              "英国皇家学会",
              "爱丁堡皇家学会",
              "英国皇家工程院",
              "加拿大皇家学会",
              "俄罗斯科学院",
              "美国国家工程院",
              "美国国家科学院"
            ],
            axisLabel: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#7E8998"
              }
            },
            axisTick: {
              show: false
            }
          },
          {
            gridIndex: 1,
            data: [
              "NO.10",
              "NO.9",
              "NO.8",
              "NO.7",
              "NO.6",
              "NO.5",
              "NO.4",
              "NO.3",
              "NO.2",
              "NO.1"
            ],
            position: "left",
            nameTextStyle: {
              color: "#06D3CD",
              padding: [0, 0, 0, 8],
              fontSize: 14,
              fontFamily: "Microsoft YaHei",
              fontWeight: 300
            },
            axisLabel: {
              formatter: params => {
                return "{marginTop|" + params + "}";
              },
              rich: {
                marginTop: {
                  padding: [0, 0, 0, 0],
                  color: "#7E8998",
                  fontSize: 12,
                  fontFamily: "Microsoft YaHei",
                  fontWeight: 300
                }
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#7E8998"
              }
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                textStyle: {
                  color: "#B2BBC4",
                  fontSize: 12
                },
                show: true
              }
            },
            name: "人数",
            type: "bar",
            itemStyle: {
              barBorderRadius: 10,
              color: function(params) {
                return {
                  colorStops: [
                    {
                      offset: 0, // 颜色的开始位置
                      color: "#F4BA62" // 0% 处的颜色
                    },
                    {
                      offset: 0.6, // 颜色的结束位置
                      color: "#5191FC" // 100% 处的颜色
                    }
                  ]
                };
              }
            },
            barWidth: 10,
            data: [1347, 1603, 1637, 1705, 1731, 1838, 2483, 2522, 2555, 2959]
          }
        ]
      };
      myChart.setOption(option);
    };
    onMounted(() => {
      echartInitFour();
      echartInitOne();
    });
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
