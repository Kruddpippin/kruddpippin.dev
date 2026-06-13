export function getScheduledTheme() {
  const h = new Date().getHours();
  return h >= 8 && h < 19 ? "light" : "dark";
}
