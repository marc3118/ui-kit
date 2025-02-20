import {memo} from 'react';
import React from 'react';
// import parse from 'html-react-parser';
// import { useInterpolation } from '@/hooks/useInterpolation';
import {TypographyType} from './types';
import {StyledTypography} from './styled';

const defaultProps = {
  $nowrap: false,
  textTransform: 'none',
  align: 'left',
  variant: 'span',
  weight: 'medium',
  color: 'primary',
  fontSize: 'base',
} as any;

const Typography = (props: TypographyType) => {
  const _props = { ...defaultProps, ...props };
  const interpolationContent = _props.children;
  return (
    //@ts-ignore
    <StyledTypography
      as={_props.variant}
      color={_props.color}
      style={_props.style}
      $align={_props.align}
      $weight={_props.weight}
      $nowrap={_props.$nowrap}
      fontSize={_props.fontSize}
      className={_props.className}
      $lineHeight={_props.lineHeight}
      $letterSpacing={_props.letterSpacing}
      $textTransform={_props.textTransform}
      $fontSizeCustom={_props.fontSizeCustom}
    >
      {interpolationContent}
    </StyledTypography>
  );
};

export default memo(Typography);
