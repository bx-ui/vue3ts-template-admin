import axios from "axios";
import NProgress from "nprogress";
import { ElMessage } from "element-plus";
import router from "@/router";
import Cookies from "js-cookie";
NProgress.configure({ showSpinner: false });

console.log(process);

const request = axios.create({
  // http://192.168.5.7:8080
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 12000
  // header: {
  //   'content-type': 'application/json'
  // }
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    NProgress.start();
    console.log(Cookies.get("token"), "Cookies.get('token')");
    config.headers.Authorization = `Bearer ${Cookies.get("token")}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    const { status, message } = response.data;
    NProgress.done();
    if (status === 200 && message === "ok") {
      // Message({
      //   type: "success",
      //   duration: 5 * 1000,
      //   message: "请求成功"
      // });
      // return response.data;
    }
    return response.data;
  },
  error => {
    console.log(error.response, "bingxin2921");
    switch (error.response.status) {
      case 400:
        ElMessage({
          type: "error",
          duration: 5 * 1000,
          message: "参数错误！！！"
        });
        break;
      case 500:
        ElMessage({
          type: "error",
          duration: 5 * 1000,
          message: "服务器错误"
        });
        break;
      case 401:
        ElMessage({
          type: "error",
          duration: 5 * 1000,
          message: "登录失效，请重新登录"
        });
        break;
      case 404:
        ElMessage({
          type: "error",
          duration: 5 * 1000,
          message: "资源不存在"
        });
        break;
      case 503:
        ElMessage({
          type: "error",
          duration: 5 * 1000,
          message: "服务器重启中，请稍候"
        });
        break;
    }
    NProgress.done();
    return Promise.reject(error);
  }
);

export default request;
