export const themes = {
  clinical: 'clinical-blue',
  bold: 'bold-green',
} as const;

export type ThemeName = (typeof themes)[keyof typeof themes];
export const defaultTheme: ThemeName = themes.clinical;

export function applyTheme(theme: ThemeName) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('lumena-theme', theme);
}

export function getInitialTheme(): ThemeName {
  const saved = localStorage.getItem('lumena-theme');
  return saved === themes.bold ? themes.bold : defaultTheme;
}
