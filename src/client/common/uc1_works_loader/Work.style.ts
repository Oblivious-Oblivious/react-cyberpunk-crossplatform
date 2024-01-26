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
    width: '65%',
    // height: rem(10),
    maxHeight: rem(10),
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderWidth: 2,
    borderRadius: 8,
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
