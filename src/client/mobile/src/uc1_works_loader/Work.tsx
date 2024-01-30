/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text} from 'react-native';

import {work_styles} from '../../../common/uc1_works_loader';
import {A2AView} from '../../../common/components/A2AView';

function Spacer({height = 16}) {
  return (
    <A2AView
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
    <A2AView
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
    </A2AView>
  );
}

function WorkCreatorQuote({quote = ''}) {
  return (
    <A2AView
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
    </A2AView>
  );
}

export function Work({text = ''}) {
  return (
    <A2AView
      style={{
        left: 16,
      }}>
      <A2AView
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
      </A2AView>
      <A2AView
        style={{
          ...work_styles.box,
          flexDirection: 'row',
          paddingVertical: 24,
        }}>
        <A2AView
          style={{
            flex: 3,
          }}
        />

        <A2AView
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
        </A2AView>
      </A2AView>
    </A2AView>
  );
}
