import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import _ from 'lodash';

function CFCoffeAttributesController(props) {
  const store = useSelector(state => state);
  const {theme} = store?.themeStore;
  const menu = store?.menuStore;
  const {onPressItem, coffeAttributes, header, type} = props;

  if (type === 1 && _.isEmpty(menu?.navigateItemToDetail?.milk)) return null;
  return (
    <View>
      <View
        style={{
          marginHorizontal: 10,
          borderColor: theme?.colors?.menuItemContainerBorderColor,
          paddingVertical: 10,
          marginVertical: 8,
          borderRadius: 8,
          backgroundColor: theme?.colors?.menuItemContainerBackroundColor,
          shadowColor: theme?.colors?.shadowColor,
          shadowOffset: {width: 2, height: 5},
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 1,
        }}>
        <Text
          style={{
            marginHorizontal: 8,
            fontWeight: 'bold',
            color: theme?.colors?.textColor,
          }}>
          {header}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          {_.map(
            type === 0
              ? menu?.navigateItemToDetail?.size
              : menu?.navigateItemToDetail?.milk,
            item => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => onPressItem && onPressItem(item)}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                      paddingVertical: 2,
                      flex: 1,
                      marginHorizontal: 3,
                      marginTop: 5,
                      borderColor:
                        coffeAttributes?.size === item?.title ||
                        coffeAttributes?.milk === item?.title
                          ? theme?.colors?.menuItemContainerBorderColor
                          : theme?.colors?.gradientBottom,
                      borderRadius: 8,
                      backgroundColor:
                        coffeAttributes?.size === item?.title ||
                        coffeAttributes?.milk === item?.title
                          ? theme?.colors?.menuItemContainerBorderColor
                          : null,
                    }}>
                    {item?.addPrice ? (
                      <Text
                        style={{
                          fontSize: 8,
                          fontWeight: '600',
                          letterSpacing: 0.7,
                          color:
                            coffeAttributes?.size === item?.title ||
                            coffeAttributes?.milk === item?.title
                              ? theme?.colors?.gradientMiddle
                              : theme?.colors?.textColor,
                        }}>{`+${item?.addPrice}tl`}</Text>
                    ) : null}

                    <Text
                      style={{
                        marginLeft: 5,
                        color:
                          coffeAttributes?.size === item?.title ||
                          coffeAttributes?.milk === item?.title
                            ? theme?.colors?.gradientMiddle
                            : theme?.colors?.textColor,
                        fontSize: 8,
                        fontWeight: '600',
                        letterSpacing: 0.7,
                      }}>
                      {item?.title}
                    </Text>
                  </TouchableOpacity>
                </>
              );
            },
          )}
        </View>
      </View>
    </View>
  );
}

export default CFCoffeAttributesController;
