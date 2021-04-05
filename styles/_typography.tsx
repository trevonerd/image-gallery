export const fontSizes = {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
};

export type FontSize = keyof typeof fontSizes;
export type FontSizeValues = typeof fontSizes[FontSize];
