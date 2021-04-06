export const colors = {
    primary: '#ec008c',
    disabled: '#CDCDCD',
    grey: '#333333',
    white: '#ffffff',
    error: '#FF0000',
};

export type ColorName = keyof typeof colors;
export type ColorValues = React.CSSProperties['color'];
