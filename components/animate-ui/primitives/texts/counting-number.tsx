'use client';

import * as React from 'react';
import { useMotionValue, useSpring, type SpringOptions } from 'motion/react';
import { useIsInView, type UseIsInViewOptions } from '@/hooks/use-is-in-view';

type CountingNumberProps = Omit<React.ComponentProps<'span'>, 'children'> & {
  number: number;
  fromNumber?: number;
  padStart?: boolean;
  decimalPlaces?: number;
  transition?: SpringOptions;
  delay?: number;
  initiallyStable?: boolean;
  locale?: string; // اضافه شد
} & UseIsInViewOptions;

function CountingNumber({
  ref,
  number,
  fromNumber = 0,
  padStart = false,
  inView = false,
  inViewMargin = '0px',
  inViewOnce = true,
  decimalPlaces = 0,
  transition = { stiffness: 90, damping: 50 },
  delay = 0,
  initiallyStable = false,
  locale = 'en-US', // پیش‌فرض انگلیسی
  ...props
}: CountingNumberProps) {
  const { ref: localRef, isInView } = useIsInView(ref as React.Ref<HTMLElement>, {
    inView,
    inViewOnce,
    inViewMargin,
  });

  const motionVal = useMotionValue(initiallyStable ? number : fromNumber);
  const springVal = useSpring(motionVal, transition);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isInView) motionVal.set(number);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isInView, number, motionVal, delay]);

  const formatValue = (val: number) => {
    let formatted = val.toLocaleString(locale, {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });

    if (padStart) {
      // برای padStart عدد قبل از اعشار
      const [intPart, fracPart] = formatted.split(/[.,]/); // جداکننده اعشار هر locale
      const finalIntLength = Math.floor(Math.abs(number)).toString().length;
      const paddedInt = (intPart ?? '').padStart(finalIntLength, '0');
      formatted = fracPart ? `${paddedInt}${decimalSeparator(locale)}${fracPart}` : paddedInt;
    }

    return formatted;
  };

  const decimalSeparator = (loc: string) => {
    return (1.1).toLocaleString(loc).substring(1, 2); // جداساز اعشار لوکال
  };

  React.useEffect(() => {
    const unsubscribe = springVal.on('change', (latest) => {
      if (localRef.current) {
        localRef.current.textContent = formatValue(latest);
      }
    });
    return () => unsubscribe();
  }, [springVal, padStart, number, decimalPlaces, locale, localRef]);

  const initialText = initiallyStable ? formatValue(number) : formatValue(fromNumber);

  return (
    <span ref={localRef} data-slot="counting-number" {...props}>
      {initialText}
    </span>
  );
}

export { CountingNumber, type CountingNumberProps };
