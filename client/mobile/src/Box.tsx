import React from 'react';
import {Text, View} from 'react-native';

import styles from '../../../app/styles';

export function Box({text = ''}) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}
