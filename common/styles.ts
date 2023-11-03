import {pixels, rem} from './styles_helpers';

const styles: StyleProp<ViewStyle> = {
  container: {
    flex: 1,
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    width: pixels(160),
    height: rem(10),
    backgroundColor: 'blue',
  }
};

export default styles;
