import {currentOS} from '../mobile/os_finder';

export function rem(value: number) {
  if (currentOS() === 'website') {
    return `${value}rem`;
  } else {
    return value * 16;
  }
}
// export function vh(value: number) {
//   if (currentOS() === 'website') {
//     return `${value}vh`;
//   } else {
//     return value * ??;
//   }
// }
// export function vw(value: number) {
//   if (currentOS() === 'website') {
//     return `${value}vw`;
//   } else {
//     return value * ??;
//   }
// }

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
