import React, { useState, useLayoutEffect } from 'react';
import styles from './Ripple.module.scss';

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void,
) => {
  useLayoutEffect(() => {
    let bounce: any = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

export type RippleProps = {
  /**
   * Time of Ripple Effect
   * */
  duration?: number;
  /**
   * color of Ripple Effect
   * */
  color?: string;
};

const Ripple = (props: RippleProps) => {
  const { duration = 600, color = 'rgba(255,255,255,0.6)' } = props;
  const [rippleArray, setRippleArray] = useState<any>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: any) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div onMouseDown={addRipple} className={styles.ripple}>
      {rippleArray.map((ripple: any, index: number) => {
        return (
          <span
            key={'span' + index}
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
              backgroundColor: color,
              animationDuration: `${duration}ms`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Ripple;
