import {
  rem,
  iosStyles,
  androidStyles,
  mobileStyles,
  webStyles,
} from './styles_helpers';

const styles: StyleProp<ViewStyle> = {
  container: {
    flex: 1,
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    width: 160,
    height: rem(10),
    backgroundColor: 'blue',
    borderWidth: pixels(10),

    ...iosStyles({
      borderColor: 'orange',
    }),

    ...androidStyles({
      borderColor: 'green',
    }),

    ...webStyles({
      borderColor: 'purple',
      borderStyle: 'solid',
    }),

    ...mobileStyles({
      borderStyle: 'dotted',
    }),
  }
};

export default styles;
