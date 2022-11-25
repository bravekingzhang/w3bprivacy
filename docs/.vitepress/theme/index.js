import DefaultTheme from "vitepress/theme";
import Footer from "../../../components/Many.vue"; // vue的后缀还不可以少，默认应该是只能js

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Footer", Footer);
  },
};
