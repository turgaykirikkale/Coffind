import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const orders = [
  {
    customerId: 1239312,
    totalPriceForPaying: 216,
    orderID: 123,
    orderDetails: [
      {
        productId: 12,
        title: 'Mocha',
        size: 'Small',
        count: 3,
        Price: 44,
        milk: 'Standart Milk',
      },
      {
        productId: 13,
        title: 'Americano',
        size: 'Small',
        count: 2,
        Price: 42,
        milk: null,
      },
    ],
  },
  {
    customerId: 3123211,
    totalPriceForPaying: 128,
    orderID: 124,
    orderDetails: [
      {
        productId: 12,
        title: 'Latte',
        size: 'Small',
        count: 1,
        Price: 44,
        milk: 'Standart Milk',
      },
      {
        productId: 13,
        title: 'Americano',
        size: 'Small',
        count: 2,
        Price: 42,
        milk: null,
      },
    ],
  },
  {
    customerId: 3123563,
    totalPriceForPaying: 204,
    orderID: 125,
    orderDetails: [
      {
        productId: 12,
        title: 'Cappuccino',
        size: 'Middle',
        count: 4,
        Price: 30,
        milk: 'Steamed Milk',
      },
      {
        productId: 13,
        title: 'Americano',
        size: 'Filtre K',
        count: 2,
        Price: 42,
        milk: null,
      },
    ],
  },
];

function MenüTrackingScreen(props) {
  const {theme} = useSelector(state => state.themeStore);

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
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Text
            style={{
              color: theme?.colors?.textColor,
              fontSize: 18,
              letterSpacing: 0.8,
              fontWeight: 'bold',
              alignSelf: 'flex-end',
            }}>
            ORDER TRACKING
          </Text>
        </View>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              marginHorizontal: 10,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 6,
              borderColor: theme?.colors?.borderColor,
            }}>
            <Text
              style={{
                color: theme?.colors.textColor,
                fontWeight: '500',
                letterSpacing: 0.8,
                marginBottom: 10,
              }}>
              Şu anda
            </Text>
            <View style={{flexDirection: 'row', flex: 1}}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: theme?.colors?.borderColor,
                  marginRight: 10,
                  borderRadius: 6,
                }}>
                <Text
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 2,
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: theme?.colors?.fontColor,
                  }}>
                  Waiters
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginVertical: 5,
                  }}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: 'red',
                      borderRadius: 20,
                      marginRight: 20,
                    }}></View>

                  <Text>6 Persons</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderWidth: 1,
                  marginLeft: 10,
                  borderColor: theme?.colors?.borderColor,
                  borderRadius: 6,
                }}>
                <Text
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 2,
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: theme?.colors?.fontColor,
                  }}>
                  Machines
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginVertical: 5,
                  }}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: 'red',
                      borderRadius: 20,
                      marginRight: 20,
                    }}></View>

                  <Text>2 Persons</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                marginTop: 10,
                color: theme?.colors.textColor,
                fontWeight: '500',
                letterSpacing: 0.8,
              }}>
              Sıradaki sipariş teslim etme süresi ortalama 8 dakikadır.
            </Text>
          </View>

          {orders.map(item => {
            return (
              <View
                key={item.customerId}
                style={{
                  borderWidth: 1.5,
                  marginVertical: 10,
                  marginHorizontal: 10,
                  paddingHorizontal: 10,
                  borderColor: theme?.colors?.borderColor,
                  borderRadius: 6,
                  paddingVertical: 5,
                }}>
                <Text
                  style={{
                    color: theme?.colors?.textColor,
                    fontWeight: '600',
                    letterSpacing: 0.8,
                  }}>{`Order ID: ${item.orderID}`}</Text>
                {item.orderDetails.map(orderItem => {
                  return (
                    <View
                      key={orderItem.id}
                      style={{
                        marginVertical: 5,
                        borderWidth: 0.5,
                        borderRadius: 6,
                        paddingHorizontal: 5,
                        borderColor: theme?.colors?.borderColor,
                        paddingVertical: 4,
                        flexDirection: 'row',
                      }}>
                      <View style={{flex: 1}}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: theme?.colors?.textColor,
                          }}>{`Name : ${orderItem.title}`}</Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: theme?.colors?.textColor,
                          }}>{`Count : ${orderItem.count}`}</Text>
                      </View>
                      <View style={{flex: 1, marginLeft: 6}}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: theme?.colors?.textColor,
                          }}>{`Size : ${orderItem.size}`}</Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: theme?.colors?.textColor,
                          }}>{`Price : ${orderItem.Price} TL`}</Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: theme?.colors?.textColor,
                          }}>{`Milk : ${orderItem.milk}`}</Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'green',
                          }}>
                          Hazırlanıyor...
                        </Text>
                      </View>
                    </View>
                  );
                })}
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: theme?.colors?.textColor,
                    padding: 6,
                    borderRadius: 6,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'green',
                      flex: 1.2,
                      alignItems: 'center',
                      paddingVertical: 2,
                      borderRadius: 6,
                    }}>
                    <Text
                      style={{
                        fontWeight: '500',
                        letterSpacing: 0.8,
                        color: theme?.colors?.textColor,
                      }}>
                      Ready
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 5,
                      borderRadius: 6,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                      }}>{`Total Price: ${item.totalPriceForPaying}`}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default MenüTrackingScreen;
