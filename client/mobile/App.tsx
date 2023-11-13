/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Box} from './src/Box';
import {FlatList, SafeAreaView, View} from 'react-native';

const data = [
  {id: 1, text: 'Item 1'},
  {id: 2, text: 'Item 2'},
  {id: 3, text: 'Item 3'},
  {id: 4, text: 'Item 4'},
  {id: 5, text: 'Item 5'},
  {id: 6, text: 'Item 6'},
  {id: 7, text: 'Item 7'},
  {id: 8, text: 'Item 8'},
  {id: 9, text: 'Item 9'},
];

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              margin: 16,
            }}>
            <Box text={item.text} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default App;
