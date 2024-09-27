import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button value */
  text?: string;
  /** Button type. Default value is 'primary' */
  buttonType?: 'primary' | 'light' | 'primaryInverse' | 'lightInverse';
  /** Button size. Default value is 'm' */
  size?: 'l' | 'm' | 's';
  /** Additional CSS-classes */
  cls?: string;
  /** Icon's CSS-class */
  iconCls?: string;
}
