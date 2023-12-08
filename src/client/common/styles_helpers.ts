import {currentOS} from '../mobile/os_finder';

export function rem(value: number) {
  if (currentOS() === 'website') {
    return `${value}rem`;
  } else {
    return value * 16;
  }
}

export function ios_styles(styles: any) {
  if (currentOS() === 'ios') {
    return styles;
  } else {
    return {};
  }
}
export function android_styles(styles: any) {
  if (currentOS() === 'android') {
    return styles;
  } else {
    return {};
  }
}
export function mobile_styles(styles: any) {
  if (currentOS() === 'ios' || currentOS() === 'android') {
    return styles;
  } else {
    return {};
  }
}
export function web_styles(styles: any) {
  if (currentOS() === 'website') {
    return styles;
  } else {
    return {};
  }
}
