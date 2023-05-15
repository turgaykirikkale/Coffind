import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import _ from 'lodash';

function CFBackButton({navigation, type}) {
  const store = useSelector(state => state);
  const {theme} = store?.themeStore;
  const {products} = store?.basketStore;
  console.log('PRODUCTS', products);

  let count = 0;
  _.each(products, item => {
    count = count + item.count;
  });

  console.log('Count', count);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 3,
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: theme?.colors?.gradientBottom,
          width: 30,
          height: 30,
          borderRadius: 15,

          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            marginBottom: 4,
            marginRight: 2,
          }}>
          {'<'}
        </Text>
      </TouchableOpacity>

      {type === 0 ? (
        <TouchableOpacity onPress={() => navigation.navigate('BasketScreen')}>
          {count === 0 ? null : (
            <View
              style={{
                position: 'absolute',
                zIndex: 999,
                right: -5,
                top: 0,
              }}>
              <Text style={{fontSize: 12, fontWeight: '900', color: '#a50606'}}>
                {count}
              </Text>
            </View>
          )}

          <Image
            source={require('../../../Assets/Icons/shoppinBasket2.png')}
            style={{
              width: 35,
              height: 35,
              tintColor: theme?.colors?.textColor,
            }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
export default CFBackButton;
