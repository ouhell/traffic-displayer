import React from 'react';
import { motion as m } from 'framer-motion';

type Props = {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  close: (...args: any[]) => any;
};

function TrafficPicker({ open, close }: Props) {
  return (
    <m.div
      className="w-[20rem] h-full fixed top-0 left-0 bg-primary"
      animate={{
        x: open ? '0' : '-100%',
        opacity: open ? 1 : 0.7,
        transition: {
          opacity: {
            duration: 0.4,
          },
          duration: 0.3,
          ease: 'easeInOut',
        },
      }}
      onClick={close}
    />
  );
}

export default TrafficPicker;
