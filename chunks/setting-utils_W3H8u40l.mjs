import { d as DEFAULT_THEME } from './MainGridLayout_CN5EEUhk.mjs';
import { a as siteConfig } from './_astro_content_nJCuh7Be.mjs';

function getDefaultHue() {
  const fallback = "250";
  const configCarrier = document.getElementById("config-carrier");
  if (!configCarrier) {
    return Number.parseInt(fallback);
  }
  return Number.parseInt(configCarrier.dataset.hue || fallback);
}
function getHue() {
  const stored = localStorage.getItem("hue");
  return stored ? Number.parseInt(stored) : getDefaultHue();
}
function setHue(hue) {
  localStorage.setItem("hue", String(hue));
  const r = document.querySelector(":root");
  if (!r) {
    return;
  }
  r.style.setProperty("--hue", String(hue));
}
function getStoredTheme() {
  return localStorage.getItem("theme") || DEFAULT_THEME;
}
function getStoredWallpaperMode() {
  return localStorage.getItem("wallpaperMode") || siteConfig.wallpaperMode.defaultMode;
}

export { getDefaultHue, getHue, getStoredTheme, getStoredWallpaperMode, setHue };
