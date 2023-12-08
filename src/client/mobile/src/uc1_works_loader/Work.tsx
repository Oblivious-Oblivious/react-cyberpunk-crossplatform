import React from 'react';
import {Text, View} from 'react-native';

import {work_styles} from '../../../common/uc1_works_loader';

export function Work({text = ''}) {
  return (
    <View style={work_styles.container}>
      <View style={work_styles.box}>
        <Text style={work_styles.text}>{text}</Text>
      </View>
    </View>
  );
}
