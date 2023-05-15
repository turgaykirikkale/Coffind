import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import CFBackButton from '../../../Components/UI/CFBackButton';
import _ from 'lodash';
import CFAddtoBasketButtonDecInc from '../../../Components/UI/CFAddToBasketButtonDecandInc';
import {
  deleteAllProduct,
  deleteItemFromBasketControl,
  addItemFromBasketScreenControl,
  clearItemFromBasketScreenControl,
} from '../../../Utils/StoreGeneralControl/SetState';
function BasketScreen(props) {
  const store = useSelector(state => state);
  const {theme} = store?.themeStore;
  const {navigation} = props;

  console.log('ASD', store?.basketStore?.products);

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
          <CFBackButton navigation={navigation} />
        </View>

        {store?.basketStore?.products.length <= 0 ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{letterSpacing: 0.7, color: theme?.colors?.textColor}}>
              Sepetinizde Ürün Bulunmamaktadır
            </Text>
          </View>
        ) : (
          <View style={{flex: 1}}>
            <View
              style={{
                alignItems: 'flex-end',
                marginHorizontal: 8,
                marginBottom: 8,
              }}>
              <TouchableOpacity
                onPress={() => deleteAllProduct()}
                style={{backgroundColor: '#a50606', borderRadius: 6}}>
                <Text
                  style={{
                    fontWeight: '500',
                    color: 'white',
                    fontSize: 12,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                  }}>
                  Sepeti Temizle
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              {_.map(store?.basketStore?.products, (item, index) => {
                console.log('İTEM', item);
                return (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 8,
                        borderRadius: 10,
                        paddingHorizontal: 5,
                        paddingVertical: 4,
                        marginVertical: 4,
                        backgroundColor:
                          theme?.colors?.menuItemContainerBackroundColor,
                        shadowColor: theme?.colors?.shadowColor,
                        shadowOffset: {width: 2, height: 5},
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                        elevation: 1,
                      }}>
                      <View>
                        <Image
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            marginRight: 4,
                          }}
                          source={
                            item?.imageR
                              ? item.imageR
                              : {
                                  uri: item?.image,
                                }
                          }
                        />
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold', fontSize: 12}}>
                          {item?.name}
                        </Text>
                        <View style={{marginTop: 3, flexDirection: 'row'}}>
                          <Text style={{fontWeight: '400', fontSize: 9}}>
                            {`Adet: ${item?.count}  `}
                          </Text>
                          {item?.type === 2 ? null : (
                            <Text style={{fontWeight: '400', fontSize: 9}}>
                              {`Boy: ${item?.size}  `}
                            </Text>
                          )}

                          {item?.milk !== null ? (
                            <Text style={{fontWeight: '400', fontSize: 9}}>
                              {`Süt: ${item?.milk}  `}
                            </Text>
                          ) : null}
                        </View>
                        <Text
                          style={{fontWeight: '400', fontSize: 8}}
                          numberOfLines={1}>
                          {`Coffe Shop: ${item?.selectedCoffe}`}
                        </Text>
                        <Text
                          style={{fontWeight: '400', fontSize: 8}}
                          numberOfLines={1}>
                          {`Ücret: ${item?.count * 2} TL`}
                        </Text>
                      </View>
                      <View>
                        <CFAddtoBasketButtonDecInc
                          type
                          disabled={item.count <= 1 ? true : false}
                          coffeAttributes={item}
                          onPressDecrease={() =>
                            deleteItemFromBasketControl(item)
                          }
                          onPressIncrease={() =>
                            addItemFromBasketScreenControl(item)
                          }
                          onPressClearItem={() =>
                            clearItemFromBasketScreenControl(item.generatedId)
                          }
                        />
                      </View>
                    </View>
                  </>
                );
              })}
            </ScrollView>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 15,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  color: theme?.colors?.textColor,
                  fontWeight: '500',
                  letterSpacing: 0.7,
                  fontSize: 10,
                }}>
                Toplam :
              </Text>
              <Text
                style={{
                  color: theme?.colors?.textColor,
                  fontWeight: '500',
                  fontSize: 12,
                  letterSpacing: 0.7,
                  marginLeft: 10,
                }}>
                227.8 TL
              </Text>
            </View>
            <TouchableOpacity
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                paddingVertical: 8,
                backgroundColor: 'green',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Siparişi Onayla
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

export default BasketScreen;
