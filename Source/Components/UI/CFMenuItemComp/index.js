import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {setSelectedMenuItem} from '../../../Utils/StoreGeneralControl/SetState';
import _ from 'lodash';
import {useSelector} from 'react-redux';
function CFMenuItemComp({navigation, data}) {
  const store = useSelector(state => state);
  const {theme} = store?.themeStore;
  const windowWidth = Dimensions.get('window').width;
  const containerWidth = (windowWidth - 20) / 2;

  const navigateMenuDetailScreen = item => {
    setSelectedMenuItem(item);
    navigation.navigate('MenuItemDetailScreen');
  };
  return (
    <View style={{alignItems: 'center', marginBottom: 10, flex: 1}}>
      <FlatList
        key={data ? '_' : '#'}
        keyExtractor={item => '_' + item.id}
        showsVerticalScrollIndicator={false}
        data={data}
        scrollEnabled={true}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => navigateMenuDetailScreen(item)}
            style={{
              marginVertical: 10,
              width: containerWidth,
              paddingVertical: 10,

              marginTop: 2,
              marginHorizontal: 4,
              backgroundColor: theme?.colors?.menuItemContainerBackroundColor,
              borderWidth: 1,
              borderColor: theme?.colors?.menuItemContainerBorderColor,
              borderRadius: 10,
            }}>
            <View
              style={{
                alignSelf: 'center',
                marginHorizontal: 10,
                marginBottom: 10,
              }}>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                {item?.title}
              </Text>
            </View>
            <Image
              style={{
                width: containerWidth / 1.5,
                height: containerWidth / 1.5,
                alignSelf: 'center',
                borderRadius: containerWidth / 3,
              }}
              source={item?.imageR ? item?.imageR : {uri: item?.image}}
            />
            <View
              style={{
                marginHorizontal: 10,
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {_.map(item?.ingredients, itemIn => {
                return (
                  <>
                    <Text
                      style={{
                        fontSize: 8,
                        fontWeight: '900',
                        marginLeft: 5,
                        letterSpacing: 0.7,
                      }}>
                      {itemIn}
                    </Text>
                  </>
                );
              })}
            </View>
            <View style={{marginHorizontal: 10, marginTop: 10}}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 10,
                  letterSpacing: 0.7,
                  fontWeight: '500',
                }}>
                {item?.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
}

export default CFMenuItemComp;
