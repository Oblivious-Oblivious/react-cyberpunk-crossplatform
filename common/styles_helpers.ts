import {currentOS} from '../cyberpunk_mobile/os_finder';

export function pixels(value: number) {
  if (currentOS() === 'website') {
    return `${value}px`;
  } else {
    return value;
  }
}

export function rem(value: number) {
  if (currentOS() === 'website') {
    return `${value}rem`;
  } else {
    return value * 16;
  }
}
