import React from 'react';
import {Text, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import _ from 'lodash';
import {useSelector} from 'react-redux';

const width = Dimensions.get('window').width;
function CFTabs({tabs, index, onPress}) {
  const store = useSelector(state => state);
  const {theme} = store?.themeStore;

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
      {_.map(tabs, item => {
        return (
          <>
            <TouchableOpacity
              onPress={() => onPress && onPress(item.index)}
              style={{
                width: width / 3.3,
                borderWidth: 1,
                marginRight: 5,
                alignItems: 'center',
                borderColor:
                  item.index === index
                    ? theme?.colors?.gradientBottom
                    : theme?.colors?.menuItemContainerBorderColor,
                paddingVertical: 4,
                backgroundColor:
                  item.index === index ? theme?.colors?.gradientBottom : null,
                borderRadius: 100,
                marginLeft: item.index === 0 ? 5 : 0,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  letterSpacing: 0.8,
                  color: theme?.colors?.textColor,
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          </>
        );
      })}
    </ScrollView>
  );
}
export default CFTabs;
