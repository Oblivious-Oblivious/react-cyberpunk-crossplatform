export function currentOS() {
  let os = '';

  try {
    const {Platform} = require('react-native');
    os = Platform.OS;
  } catch (e) {
    os = 'website';
  }

  return os;
}
