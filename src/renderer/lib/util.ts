/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const throttle = <T extends (...args: any) => any>(
  func: T,
  delay = 100
): ((args: Parameters<T>) => any) => {
  let isClear = true;
  let prevArgs: Parameters<T>;
  let isAwaiting = false;

  const throttled = (args: Parameters<T>) => {
    if (!isClear) {
      isAwaiting = true;
      prevArgs = args;
    } else {
      isClear = false;
      setTimeout(() => {
        if (isAwaiting) {
          isAwaiting = false;
          func(prevArgs);
        }
      }, delay);
      func(args);
    }
  };
  return throttled;
};
