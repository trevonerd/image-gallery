import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../../styles';

export default Story => (
    <StyledThemeProvider theme={theme}>
        <Story />
    </StyledThemeProvider>
);
