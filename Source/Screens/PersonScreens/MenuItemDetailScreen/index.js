import React, {useState} from 'react';
import {View, Image, SafeAreaView, ScrollView, Text} from 'react-native';
import CFBackButton from '../../../Components/UI/CFBackButton';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';
import {TouchableOpacity} from 'react-native';
import CFCoffeAttributesController from '../../../Components/UI/CFCoffeAttributesController';
import CFAddtoBasketButton from '../../../Components/Composite/CFAddToBasketButton';

function MenuItemDetailScreen(props) {
  const store = useSelector(state => state);
  const {theme} = store?.themeStore;
  const menu = store?.menuStore;
  const {navigation} = props;

  console.log('MEnuuuuu', menu);

  const [coffeAttributes, setCoffeAttributes] = useState({
    id: menu?.navigateItemToDetail?.id,
    name: menu?.navigateItemToDetail?.title,
    image: menu?.navigateItemToDetail?.image,
    imageR: menu?.navigateItemToDetail?.imageR,
    size: null,
    milk: null,
    selectedCoffe: null,
    price: null,
    addedPrice: null,
    count: 0,
    type: menu?.navigateItemToDetail?.type,
  });

  const generateRandomTimeForClock = () => {
    let time = Math.floor(Math.random() * 5);
    return time + 5;
  };

  const controlAddBasketButtonDisabled = () => {
    if (menu?.navigateItemToDetail?.milk?.length <= 0) {
      if (_.isNull(coffeAttributes?.size) || coffeAttributes?.count === 0) {
        return true;
      }
    } else {
      if (
        _.isNull(coffeAttributes?.size) ||
        _.isNull(coffeAttributes?.milk) ||
        coffeAttributes?.count === 0
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <LinearGradient
      colors={[
        theme?.colors?.gradientMiddle,
        theme?.colors?.gradientMiddle,
        theme?.colors?.gradientBottom,
        theme?.colors?.gradientBottom,
        theme?.colors?.gradientBottom,
      ]}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{marginHorizontal: 5}}>
          <CFBackButton navigation={navigation} type={0} />
        </View>
        <ScrollView
          style={{flex: 1}}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View style={{marginVertical: 10, paddingHorizontal: 10}}>
            <Image
              source={
                menu?.navigateItemToDetail?.imageR
                  ? menu?.navigateItemToDetail?.imageR
                  : {
                      uri: menu?.navigateItemToDetail?.image,
                    }
              }
              resizeMode="stretch"
              style={{
                width: '100%',
                height: 200,
                borderRadius: 8,
              }}
            />
          </View>
          <View style={{marginHorizontal: 10, marginBottom: 10}}>
            <Text
              style={{
                color: theme?.colors?.textColor,
                fontWeight: '900',
                letterSpacing: 0.8,
                fontSize: 18,
              }}>
              {menu?.navigateItemToDetail?.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 8,
              }}>
              {_.map(menu?.navigateItemToDetail?.ingredients, itemIn => {
                return (
                  <>
                    <Text
                      style={{
                        fontSize: 14,
                        letterSpacing: 0.7,
                        color: theme?.colors?.textColor,
                        fontWeight: '500',
                      }}>
                      {itemIn}
                    </Text>
                  </>
                );
              })}
            </View>
            <Text style={{color: theme?.colors?.textColor, fontSize: 12}}>
              {menu?.navigateItemToDetail?.description}
            </Text>
          </View>

          {menu?.navigateItemToDetail?.type === 2 ? null : (
            <>
              <CFCoffeAttributesController
                header={'Boyut Tercihi'}
                coffeAttributes={coffeAttributes}
                onPressItem={item =>
                  setCoffeAttributes(prevState => ({
                    ...prevState,
                    size: item.title,
                    addedPrice: item.addPrice,
                  }))
                }
                type={0}
              />
              <CFCoffeAttributesController
                header={'Süt Tercihi'}
                coffeAttributes={coffeAttributes}
                onPressItem={item =>
                  setCoffeAttributes(prevState => ({
                    ...prevState,
                    milk: item.title,
                  }))
                }
                type={1}
              />
            </>
          )}

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
              {store?.languageStore?.language?.localization?.coffeShop}
            </Text>
            <ScrollView
              style={{marginTop: 8, marginHorizontal: 10}}
              horizontal
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}>
              {_.map(menu?.navigateItemToDetail?.shops, item => {
                return (
                  <>
                    <TouchableOpacity
                      style={{
                        marginHorizontal: 5,
                        paddingHorizontal: 5,
                        paddingVertical: 8,
                        width: 100,
                        borderWidth: 1,
                        borderRadius: 8,
                        borderColor:
                          theme?.colors?.menuItemContainerBorderColor,
                      }}>
                      <Text
                        numberOfLines={1}
                        style={{
                          fontWeight: 'bold',
                          fontSize: 12,
                          marginBottom: 4,
                          textAlign: 'center',
                        }}>
                        {item.name}
                      </Text>
                      <Image
                        source={item.image}
                        style={{
                          width: 70,
                          height: 70,
                          borderRadius: 35,
                          alignSelf: 'center',
                        }}
                      />

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          borderBottomWidth: 1,
                          borderColor:
                            theme?.colors?.menuItemContainerBorderColor,
                          paddingBottom: 1,
                        }}>
                        <Image
                          source={require('../../../Assets/Icons/clockSvg.png')}
                          style={{width: 12, height: 12}}
                        />
                        <Text
                          style={{
                            fontSize: 12,
                          }}>{`${generateRandomTimeForClock()} dk`}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 5,
                        }}>
                        <Text
                          style={{
                            fontWeight: '500',
                            letterSpacing: 0.7,
                            fontSize: 12,
                          }}>{`price`}</Text>

                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '500',
                          }}>
                          {`${item?.price + coffeAttributes?.addedPrice} tl`}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </>
                );
              })}
            </ScrollView>
          </View>
        </ScrollView>
        <CFAddtoBasketButton
          disabled={
            menu?.navigateItemToDetail?.type === 2 &&
            coffeAttributes?.count !== 0
              ? false
              : controlAddBasketButtonDisabled()
          }
          coffeAttributes={coffeAttributes}
          onPressDecrease={() =>
            setCoffeAttributes(prevState => ({
              ...prevState,
              count:
                coffeAttributes?.count === 0 ? 0 : coffeAttributes?.count - 1,
            }))
          }
          onPressIncrease={() =>
            setCoffeAttributes(prevState => ({
              ...prevState,
              count: coffeAttributes?.count + 1,
            }))
          }
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

export default MenuItemDetailScreen;
