/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Work} from './src/uc1_works_loader/Work';
import {View} from 'react-native';

function Spacer({height = 16}) {
  return (
    <View
      style={{
        marginVertical: height / 2,
      }}
    />
  );
}

function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
      }}>
      <Work text="Vulcan's Hammer" />
      <Spacer height={16} />
      <Work text="The Long Tomorrow" />
    </View>
  );
}

export default App;
