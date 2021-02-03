import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/outdataChart",
    name: "OutDataChart",
    component: () => import("@/views/bigPlatform/dataChart.vue"),
    meta: {
      hidden: false,
      name: "数据可视化",
      icon: "el-icon-s-custom"
    }
  },
  {
    path: "/",
    name: "Layout",
    component: () => import("@/views/layout/index.vue"),
    redirect: "/bigPlatform/dataChart",
    children: [
      {
        path: "/bigPlatform",
        name: "BigPlatform",
        component: () => import("@/views/bigPlatform/defaultIndex.vue"),
        meta: { hidden: false, name: "Paas", icon: "el-icon-s-custom" },
        children: [
          {
            path: "dataMaintain",
            name: "DataMaintain",
            component: () => import("@/views/bigPlatform/dataMaintain.vue"),
            meta: {
              hidden: false,
              name: "数据节点维护",
              icon: "el-icon-s-custom"
            }
          },
          {
            path: "dataRule",
            name: "DataRule",
            component: () => import("@/views/bigPlatform/dataMaintain.vue"),
            meta: {
              hidden: false,
              name: "数据分析规则配置",
              icon: "el-icon-s-custom"
            }
          },
          {
            path: "dataChart",
            name: "DataChart",
            component: () => import("@/views/bigPlatform/dataChart.vue"),
            meta: {
              hidden: false,
              name: "数据可视化",
              icon: "el-icon-s-custom"
            }
          },
          {
            path: "openAPI",
            name: "OpenAPI",
            component: () => import("@/views/bigPlatform/openAPI.vue"),
            meta: {
              hidden: false,
              name: "开放API",
              icon: "el-icon-s-custom"
            }
          }
        ]
      },
      {
        path: "/accountMessage",
        name: "AccountMessage",
        meta: { hidden: false, name: "Uaa", icon: "el-icon-s-custom" },
        component: () => import("@/views/accountMessage/defaultIndex.vue"),
        children: [
          {
            path: "account",
            name: "Account",
            component: () => import("@/views/accountMessage/account.vue"),
            meta: {
              hidden: false,
              name: "账号统一管理",
              icon: "el-icon-s-custom"
            }
          },
          {
            path: "account",
            name: "Account",
            component: () => import("@/views/accountMessage/application.vue"),
            meta: {
              hidden: false,
              name: "应用管理",
              icon: "el-icon-s-custom"
            }
          }
        ]
      },
      {
        path: "/journal",
        name: "Journal",
        meta: { hidden: false, name: "日志管理平台", icon: "el-icon-s-custom" },
        component: () => import("@/views/journal/defaultIndex.vue"),
        children: [
          {
            path: "serverMessage",
            name: "ServerMessage",
            component: () => import("@/views/journal/serverMessage.vue"),
            meta: {
              hidden: false,
              name: "服务器管理",
              icon: "el-icon-s-custom"
            }
          },
          {
            path: "journalMessage",
            name: "JournalMessage",
            component: () => import("@/views/journal/journalMessage.vue"),
            meta: {
              hidden: false,
              name: "日志管理",
              icon: "el-icon-s-custom"
            }
          },
          {
            path: "policeMessage",
            name: "PoliceMessage",
            component: () => import("@/views/journal/policeMessage.vue"),
            meta: {
              hidden: false,
              name: "报警管理",
              icon: "el-icon-s-custom"
            }
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
