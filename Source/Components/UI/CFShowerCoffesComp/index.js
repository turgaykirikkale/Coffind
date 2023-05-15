import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import {useSelector} from 'react-redux';

function CFShowerCoffesComp({data, header, onPressItem}) {
  const {theme} = useSelector(state => state.themeStore);
  const windowWidth = Dimensions.get('window').width;
  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: theme?.colors?.gradientMiddle,
        marginHorizontal: 10,
        shadowColor: theme?.colors?.shadowColor,
        shadowOffset: {width: 2, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 1,
        marginTop: 10,
      }}>
      <View
        style={{
          paddingVertical: 6,
          paddingLeft: 4,
          borderBottomWidth: 1,
          borderBottomColor: theme?.colors?.textColor,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            letterSpacing: 0.7,
            color: theme?.colors?.textColor,
          }}>
          {header}
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}>
        {_.map(data, item => {
          return (
            <>
              <TouchableOpacity
                onPress={() => onPressItem && onPressItem(item)}
                style={{
                  width: windowWidth / 4,
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <Image
                  resizeMode="stretch"
                  source={item.image}
                  style={{
                    borderRadius: 10,
                    width: windowWidth / 4.5,
                    height: windowWidth / 3.7,
                    marginBottom: 6,
                  }}
                />
                <Text style={{fontSize: 12, color: theme?.colors?.textColor}}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default CFShowerCoffesComp;
