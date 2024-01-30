export const A2AView = (props: any) => {
  try {
    const {View} = require('react-native');
    return <View {...props} />;
  } catch (e) {
    return <div {...props} />;
  }
};
