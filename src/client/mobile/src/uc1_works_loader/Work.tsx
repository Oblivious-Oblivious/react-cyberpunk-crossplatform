/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';

import {work_styles} from '../../../common/uc1_works_loader';

function Spacer({height = 16}) {
  return (
    <View
      style={{
        marginVertical: height / 2,
      }}
    />
  );
}

function WorkTitle({text = ''}) {
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: 'bold',
      }}>
      {text}
    </Text>
  );
}

function WorkSubtitle({text = ''}) {
  return (
    <View
      style={{
        paddingRight: 24,
      }}>
      <Text
        style={{
          fontSize: 14,
          color: 'gray',
        }}>
        {text}
      </Text>
    </View>
  );
}

function WorkCreatorQuote({quote = ''}) {
  return (
    <View
      style={{
        alignItems: 'flex-end',
        paddingRight: 24,
      }}>
      <Text
        style={{
          fontSize: 14,
          fontStyle: 'italic',
        }}>
        {`- ${quote}`}
      </Text>
    </View>
  );
}

export function Work({text = ''}) {
  return (
    <View
      style={{
        left: 16,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 15,
          left: -48,
          width: 100,
          height: 130,
          backgroundColor: 'red',
          borderWidth: 2,
          borderRadius: 6,
          zIndex: 1,
        }}>
        <Image
          style={{
            flex: 1,
            margin: 8,
            borderWidth: 1,
            borderRadius: 4,
          }}
          source={{
            uri: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
          }}
        />
        {/* </View> */}
      </View>
      <View
        style={{
          ...work_styles.box,
          flexDirection: 'row',
          paddingVertical: 24,
        }}>
        <View
          style={{
            flex: 3,
          }}
        />

        <View
          style={{
            flex: 10,
          }}>
          <WorkTitle text={text} />
          <Spacer height={4} />
          <WorkSubtitle
            text={
              "Life isn't about about waiting for the storm to pass, it's about learning to dance in the rain."
            }
          />
          <Spacer height={4} />
          <WorkCreatorQuote quote={'Philip K. Dick'} />
        </View>
      </View>
    </View>
  );
}
