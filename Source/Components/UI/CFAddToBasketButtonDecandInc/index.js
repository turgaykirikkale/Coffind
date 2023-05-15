import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';

function CFAddtoBasketButtonDecInc({
  coffeAttributes,
  onPressIncrease,
  onPressDecrease,
  onPressClearItem,
  disabled,
  type,
}) {
  const store = useSelector(state => state);
  const {theme} = store?.themeStore;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
      }}>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => onPressDecrease && onPressDecrease()}
        style={{
          paddingVertical: 5,
          backgroundColor: disabled
            ? theme?.colors?.gradientMiddle
            : theme?.colors?.gradientBottom,
          borderRadius: 10,
          width: 30,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
          -
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          marginHorizontal: 8,
          width: 15,
          textAlign: 'center',
          fontSize: 10,
        }}>
        {coffeAttributes?.count}
      </Text>
      <TouchableOpacity
        onPress={() => onPressIncrease && onPressIncrease()}
        style={{
          paddingVertical: 5,
          backgroundColor: theme?.colors?.gradientBottom,
          borderRadius: 10,
          width: 30,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
          +
        </Text>
      </TouchableOpacity>

      {type ? (
        <TouchableOpacity
          onPress={() => onPressClearItem && onPressClearItem()}
          style={{
            marginLeft: 5,
            height: 30,
            width: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 10, height: 10, tintColor: '#a50606'}}
            source={require('../../../Assets/Icons/waste3.png')}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

export default CFAddtoBasketButtonDecInc;
