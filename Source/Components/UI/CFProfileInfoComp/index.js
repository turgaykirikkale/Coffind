import React from 'react';
import {View, Text} from 'react-native';

function CFProfileInfoCom({title, value}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
      }}>
      <Text
        style={{
          fontSize: 10,
          flex: 0.7,
        }}>
        {title}
      </Text>
      <Text style={{fontSize: 10, flex: 1}}>{value}</Text>
    </View>
  );
}

export default CFProfileInfoCom;
