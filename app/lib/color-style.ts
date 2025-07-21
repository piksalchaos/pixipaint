
export function defineColorStyleVariables(colors: string[]) {
  colors.forEach((color, colorId) => {
    document.documentElement.style.setProperty(`--color-${colorId}`, `#${color}`);
  });
}
export function getColorStyleValue(colorId: number): string {
  return `var(--color-${colorId})`;
}