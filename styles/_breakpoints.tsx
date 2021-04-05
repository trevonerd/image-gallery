export const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};

export type BreakpointName = keyof typeof breakpoints;
export type BreakpointValues = typeof breakpoints[BreakpointName];
