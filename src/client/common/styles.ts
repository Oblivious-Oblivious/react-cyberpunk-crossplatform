import {
  rem,
  iosStyles,
  androidStyles,
  mobileStyles,
  webStyles,
} from './styles_helpers';

const styles: any = {
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderWidth: 10,

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
  },

  text: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
};

export default styles;
