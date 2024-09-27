import { FC } from 'react';
import clsx from 'clsx';
import { IconProps } from '@/shared/model';
import styles from './Icon.module.css';

/** Component **Icon** */
export const Icon: FC<IconProps> = ({
  cls,
  size = 'm',
  ...props
  }) => {
  const iconCls = clsx(
    styles.icon,
    styles[size],
    cls
  );

  return (
    <i className={iconCls} {...props}></i>
  );
};
