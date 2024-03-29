import { CSSProperties } from 'react';

import { ValueOf } from '../../../types/general.types';
import { parseSize } from '../../theme/theme.helpers';
import { Theme } from '../../theme/theme.types';

import { ButtonProps } from './Button.types';

export function getButtonPadding({
  format,
  size,
}: Pick<ButtonProps, 'format' | 'size'>): string {
  return format === 'link' ? '0px' : size === 'sm' ? '8px 16px' : '12px 16px';
}

export function getButtonBgColor({
  format,
  variant = 'primary',
  palette,
  onHover = false,
}: Pick<ButtonProps, 'format' | 'variant'> &
  Pick<Theme, 'palette'> & { onHover?: boolean }): string {
  if (!onHover) {
    if (format === 'link' || format === 'outline') return 'transparent';

    if (variant === 'text') return palette[variant].level5;

    return palette[variant].main;
  } else {
    if (format === 'link') return 'transparent';

    if (variant === 'text') return palette[variant].level4;

    return palette[variant].dark;
  }
}

export function getButtonColor({
  format,
  variant = 'primary',
  palette,
  onHover = false,
}: Pick<ButtonProps, 'format' | 'variant'> &
  Pick<Theme, 'palette'> & { onHover?: boolean }): string {
  if (!onHover) {
    if (variant === 'text') return palette[variant].level2;

    if (format === 'outline' || format === 'link') return palette[variant].main;

    return palette[variant].contrastText;
  } else {
    if (variant === 'text') return palette[variant].level1;

    if (format === 'link') return palette[variant].dark;

    return palette[variant].contrastText;
  }
}

export function getButtonBorder({
  format,
  variant = 'primary',
  palette,
}: Pick<ButtonProps, 'format' | 'variant'> & Pick<Theme, 'palette'>): string {
  if (format !== 'outline' || variant === 'text') return 'none';

  return `1px solid ${palette[variant].main}`;
}

export function getButtonFontSize({
  size,
  typography,
}: Pick<ButtonProps, 'size'> & Pick<Theme, 'typography'>): ValueOf<
  Pick<CSSProperties, 'fontSize'>
> {
  if (size === 'sm')
    return parseSize({
      value: typography.fontBaseSize * typography.fontSizeScales.sm,
      from: 'px',
      to: 'rem',
      withUnits: true,
    });

  return typography.button.fontSize;
}
