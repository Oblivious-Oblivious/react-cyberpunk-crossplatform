function currentOS() {
  let os = '';

  try {
    const {Platform} = require('react-native');
    os = Platform.OS;
  }
  catch(e) {
    os = 'website';
  }

  return os;
}

export function pixels(value: number) {
  if(currentOS() === 'website') {
    return `${value}px`;
  }
  else {
    return value;
  }
}

export function rem(value: number) {
  if(currentOS() === 'website') {
    return `${value}rem`;
  }
  else {
    return value * 16;
  }
}
