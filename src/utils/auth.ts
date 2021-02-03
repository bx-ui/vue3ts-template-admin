import router from "@/router";
import Cookies from "js-cookie";

router.beforeEach((to, from, next) => {
  if (Cookies.get("token")) {
    // 有token代表登录了
    console.log(to);
    if (to.name === "Login") {
      // alert(11)
      next("/home");
    } else {
      next();
    }
  } else {
    // 没有登录
    if (to.name === "Login") {
      next();
    } else {
      next("/login");
    }
  }
});
