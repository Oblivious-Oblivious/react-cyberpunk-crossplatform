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

export function iosStyles(styles: StyleProp<ViewStyle>) {
  if (currentOS() === 'ios') {
    return styles;
  } else {
    return {};
  }
}
export function androidStyles(styles: StyleProp<ViewStyle>) {
  if (currentOS() === 'android') {
    return styles;
  } else {
    return {};
  }
}
export function mobileStyles(styles: StyleProp<ViewStyle>) {
  if (currentOS() === 'ios' || currentOS() === 'android') {
    return styles;
  } else {
    return {};
  }
}
export function webStyles(styles: StyleProp<ViewStyle>) {
  if (currentOS() === 'website') {
    return styles;
  } else {
    return {};
  }
}
