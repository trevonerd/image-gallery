import React, { FC, memo } from 'react';
import styled from 'styled-components';
import {
    colors,
    fontSizes,
    ColorName,
    ColorValues,
    FontSize,
    FontSizeValues,
} from '../../../styles';

export interface TypographyProps {
    as?: string;
    children: React.ReactNode;
    className?: string;
    color?: ColorName;
    size?: FontSize;
}

const defaultProps: Partial<TypographyProps> = {
    as: 'span',
    size: 'md',
    color: 'primary',
};

const StyledTypography = styled(
    ({
        component: Component = defaultProps.as,
        color = defaultProps.color,
        ...props
    }) => <Component {...props} />
)<TypographyProps>`
    font-size: ${({ size }: TypographyProps): FontSizeValues =>
        fontSizes[size!]};
    color: ${({ color }: TypographyProps): ColorValues => colors[color!]};
`;

const Typography: FC<TypographyProps> = memo(
    ({ as, ...props }: TypographyProps): JSX.Element => {
        return <StyledTypography component={as} {...props}></StyledTypography>;
    }
);

Typography.defaultProps = defaultProps;
Typography.displayName = 'Typography';

export default Typography;
