import { ReactNode } from 'react';

export type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'accent' | 'white' | 'orange' | string;

type FontSize = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'custom';

type Align = 'center' | 'left' | 'right';

type Weight = 'light' | 'medium' | 'bold';

type Variant = 'span' | 'p' | 'h1' | 'h2' | 'h3';

type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none';

export type TypographyType = {
  align?: Align;
  color?: Color;
  style?: object;
  weight?: Weight;
  $nowrap?: boolean;
  variant?: Variant;
  lineHeight?: string;
  children: ReactNode;
  fontSize?: FontSize;
  letterSpacing?: string;
  fontSizeCustom?: number;
  textTransform?: TextTransform;

  className?: string;
};

export type StyledTypographyType = Omit<TypographyType, 'textTransform'> & {
  $textTransform?: TextTransform;
  $lineHeight?: string;
  $letterSpacing?: string;
  $align: Align;
  $weight: Weight;
};
