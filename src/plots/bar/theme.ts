import { registerTheme } from '../../theme';

const BAR_ACTIVE_STYLE = (style) => {
  const opacity = style.opacity || 1;
  return { opacity: opacity * 0.5 };
};

const BAR_DISABLE_STYLE = (style) => {
  const opacity = style.opacity || 1;
  return { opacity: opacity * 0.5 };
};

export const DEFAULT_BAR_THEME = {
  label: {
    darkStyle: {
      fill: '#2c3542',
      stroke: '#ffffff',
      fillOpacity: 0.85,
    },
    lightStyle: {
      fill: '#ffffff',
      stroke: '#ffffff',
      fillOpacity: 1,
    },
  },
  columnStyle: {
    normal: {},
    active: BAR_ACTIVE_STYLE,
    disable: BAR_DISABLE_STYLE,
    selected: { lineWidth: 1, stroke: 'black' },
  },
};

registerTheme('bar', DEFAULT_BAR_THEME);
