import React from 'react';
import {Text, View} from 'react-native';

import styles from '../../../common/styles';

export function Work({text = ''}) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}
