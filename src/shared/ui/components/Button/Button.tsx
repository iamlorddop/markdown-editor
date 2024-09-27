import { forwardRef } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { ButtonProps } from '@/shared/model';
import styles from './Button.module.css';

/** Component **Button** */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    text,
    buttonType = 'primary',
    size = 'm',
    cls,
    iconCls,
    ...props
  },
  ref
) => {
  const containerCls = clsx(
    styles.button,
    styles[size],
    styles[buttonType],
    cls
  );

  return (
    <button className={containerCls} {...props} ref={ref}>
      {iconCls && <Icon cls={iconCls} size={size} />}
      {text && (
        <div className={styles.buttonText}>
          {text}
        </div>
      )}
    </button>
  );
});
