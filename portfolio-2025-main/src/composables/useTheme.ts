import { ref } from "vue";
import { colors } from "../three/common/colors";

const isDark = ref(false);

const applyTheme = (dark: boolean) => {
  if (typeof document === "undefined") return;

  if (dark) {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
    colors.isDark = true;
    colors.beigeLight.set("#0d1321");
    colors.beigeDark.set("#161e31");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
    colors.isDark = false;
    colors.beigeLight.set("#eef2f6");
    colors.beigeDark.set("rgb(211, 219, 230)");
  }
};

const initTheme = () => {
  if (typeof window === "undefined") return;
  const saved = localStorage.getItem("theme");
  if (saved) {
    isDark.value = saved === "dark";
  } else {
    isDark.value = false;
  }
  applyTheme(isDark.value);
};


const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  }
  applyTheme(isDark.value);
};

// Initialize once
if (typeof window !== "undefined") {
  initTheme();
}

export const useTheme = () => {
  return {
    isDark,
    toggleTheme,
  };
};
