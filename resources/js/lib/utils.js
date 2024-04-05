import {  clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'


 function cn(...inputs) {
  return twMerge(clsx(inputs));
}
 function valueUpdater(updaterOrValue, ref) {
    ref.value
        = typeof updaterOrValue === 'function'
        ? updaterOrValue(ref.value)
        : updaterOrValue
}

export { cn, valueUpdater}
