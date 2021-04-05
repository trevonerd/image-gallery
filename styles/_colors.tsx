export const colors = {
    primary: '#ec008c',
    grey: '#333333',
    white: '#ffffff',
};

export type ColorName = keyof typeof colors;
export type ColorValues = React.CSSProperties['color'];
