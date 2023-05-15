import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {addProductsToBasket} from '../../../Utils/StoreGeneralControl/SetState';
import CFAddtoBasketButtonDecInc from '../../UI/CFAddToBasketButtonDecandInc';
function CFAddtoBasketButton({
  coffeAttributes,
  onPressIncrease,
  onPressDecrease,
  disabled,
}) {
  const store = useSelector(state => state);
  const {theme} = store?.themeStore;

  const onPressAddBasketBasketButton = () => {
    // console.log('GENERREEATE ID', guidGenerator());
    // coffeAttributes.id = guidGenerator();
    // console.log('COFFEEATRTUBUSTE', coffeAttributes);

    coffeAttributes.generatedId = `${coffeAttributes.name}${coffeAttributes.size}${coffeAttributes.milk}`;

    addProductsToBasket(coffeAttributes);
  };

  return (
    <View
      style={{
        backgroundColor: theme?.colors?.menuItemContainerBackroundColor,
        marginVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        borderRadius: 8,
      }}>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => onPressAddBasketBasketButton()}
        style={{
          paddingVertical: 8,
          backgroundColor: disabled ? `rgb(36, 145, 81)` : 'green',
          flex: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          {store?.languageStore?.language?.localization?.AddtoBasket}
        </Text>
      </TouchableOpacity>

      <CFAddtoBasketButtonDecInc
        disabled={disabled}
        coffeAttributes={coffeAttributes}
        onPressIncrease={() => onPressIncrease && onPressIncrease()}
        onPressDecrease={() => onPressDecrease && onPressDecrease()}
      />
    </View>
  );
}

export default CFAddtoBasketButton;
