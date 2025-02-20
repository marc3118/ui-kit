import styled, { css, DefaultTheme } from 'styled-components';
import React from 'react';

import { StyledTypographyType } from '../types';

type GetFontSizeProps = StyledTypographyType & DefaultTheme;

const getFontSize = (props: GetFontSizeProps) => {
  if (props.$fontSizeCustom) {
    return `${props.$fontSizeCustom}px`;
  }

  // return `${props.theme.font.size[props.fontSize as string]}px`;
};

export const StyledTypography = styled.div<Omit<Required<StyledTypographyType>, 'children'>>`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  text-align: ${(props: any) => props.$align};
  white-space: ${(props: any) => (props.$nowrap ? 'nowrap' : 'wrap')};
  text-transform: ${(props: any) => props.$textTransform};
  line-height: ${(props: any) => props.$lineHeight || 1.3};
  letter-spacing: ${(props: any) => props.$letterSpacing || 0};
  ${(props: any) =>
    (props.color === 'accent' || props.color === 'orange') &&
    css`
      //background: ${(props: any) => props.theme.typography.colors[props.color]};
      background-clip: text;
      line-height: 1.3;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}}
`;
