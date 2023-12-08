import {
  rem,
  ios_styles,
  android_styles,
  mobile_styles,
  web_styles,
} from '../styles_helpers';

export const work_styles: any = {
  box: {
    display: 'flex',
    width: 160,
    height: rem(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderWidth: 10,

    ...ios_styles({
      borderColor: 'orange',
    }),

    ...android_styles({
      borderColor: 'green',
    }),

    ...web_styles({
      borderColor: 'purple',
      borderStyle: 'solid',
    }),

    ...mobile_styles({
      borderStyle: 'dotted',
    }),
  },

  container: {
    flex: 1,
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
};
