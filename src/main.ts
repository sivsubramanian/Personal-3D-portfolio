import { createApp } from "vue";
import "./assets/styles/index.scss";
import App from "./App.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== "undefined") {
  localStorage.removeItem("theme");
  document.documentElement.classList.remove("dark");
  document.documentElement.removeAttribute("data-theme");
}

createApp(App).mount("#app");

