import React, {useState} from 'react';
import {View, Text, SafeAreaView, Dimensions, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import CFShowerCoffesComp from '../../../Components/UI/CFShowerCoffesComp';

function StoreScreen() {
  const {theme} = useSelector(state => state.themeStore);
  const store = useSelector(state => state);
  const windowWidth = Dimensions.get('window').width;

  const nearCoffeShop = [
    {
      name: 'Line Coffe',
      image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
      address: null,
      star: 2,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Bardak Coffe',
      image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
      address: null,
      star: 4,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Simento Coffe',
      image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
      address: null,
      star: 5,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Saudade Coffe',
      image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
      address: null,
      star: 5,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Water Coffe',
      image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
      address: null,
      star: 5,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Casca Coffe',
      image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
      address: null,
      star: 5,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
  ];

  const mostStarsHasCoffe = [
    {
      name: 'Saudade Coffe',
      image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
      address: null,
      star: 5,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Water Coffe',
      image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
      address: null,
      star: 5,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Casca Coffe',
      image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
      address: null,
      star: 5,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Line Coffe',
      image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
      address: null,
      star: 4.7,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Bardak Coffe',
      image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
      address: null,
      star: 4,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Simento Coffe',
      image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
      address: null,
      star: 4.5,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
  ];

  const newJoinedCoffe = [
    {
      name: 'Saudade Coffe',
      image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
      address: null,
      star: 5,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Water Coffe',
      image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
      address: null,
      star: 5,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Casca Coffe',
      image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
      address: null,
      star: 5,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Line Coffe',
      image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
      address: null,
      star: 4.7,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Bardak Coffe',
      image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
      address: null,
      star: 4,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
    {
      name: 'Simento Coffe',
      image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
      address: null,
      star: 4.5,
      menü: [
        {
          title: 'Black',
          description:
            store?.languageStore?.language?.localization?.blackCoffeDesc,
          ingredients: ['Coffee'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
          id: 1,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Latte',
          description: store?.languageStore?.language?.localization?.latteDesc,
          ingredients: ['Espresso', 'Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg',
          id: 2,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Cappuccino',
          description:
            store?.languageStore?.language?.localization?.cappuccinoDes,
          ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
          id: 3,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Americano',
          description:
            store?.languageStore?.language?.localization?.americanoDesc,
          ingredients: ['Espresso', 'Hot Water'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
          id: 4,
          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Espresso',
          description:
            store?.languageStore?.language?.localization?.espressoDesc,
          ingredients: ['1oz Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
          id: 5,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [],
        },
        {
          title: 'Cortado',
          description:
            store?.languageStore?.language?.localization?.cortadoDesc,
          ingredients: ['1oz Espresso', '1oz Steamed Milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
          id: 7,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
        {
          title: 'Galão',
          description: store?.languageStore?.language?.localization?.galaoDesc,
          ingredients: ['Espresso', 'Foamed milk'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg',
          id: 9,

          size: [
            {
              title: store?.languageStore?.language?.localization?.small,
              addPrice: 0,
            },
            {
              title: store?.languageStore?.language?.localization?.middle,
              addPrice: 5,
            },
            {
              title: store?.languageStore?.language?.localization?.Big,
              addPrice: 10,
            },
          ],
          milk: [
            {title: store?.languageStore?.language?.localization?.StandartMilk},
            {title: store?.languageStore?.language?.localization?.Skimmedmilk},
            {
              title:
                store?.languageStore?.language?.localization?.LactoseFreeMilk,
            },
            {
              title: store?.languageStore?.language?.localization?.AlmondMilk,
            },
          ],
        },
      ],
    },
  ];

  const [header, setHeader] = useState('Bulunduğunuz Lokasyon');
  const [routeLocation, setRouteLocation] = useState(null);
  
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
        <View
          style={{
            alignSelf: 'center',
            width: windowWidth - 20,
            height: windowWidth / 1.5,
            backgroundColor: 'red',
            marginVertical: 10,
            borderRadius: 10,
            marginHorizontal: 10,
          }}>
          <View style={{position: 'absolute'}}>
            <Text>{header}</Text>
          </View>
        </View>
        <ScrollView
          scrollEnabled={true}
          style={{marginBottom: 10}}
          showsVerticalScrollIndicator={false}>
          <>
            <CFShowerCoffesComp
              onPressItem={item => alert(item.name)}
              data={nearCoffeShop}
              header={'Yakınınızdaki Kafeler'}
            />
          </>
          <>
            <CFShowerCoffesComp
              onPressItem={item => alert(item.name)}
              data={mostStarsHasCoffe}
              header={'En Çok Yıldız Sahip Kafeler'}
            />
          </>
          <>
            <CFShowerCoffesComp
              onPressItem={item => alert(item.name)}
              data={newJoinedCoffe}
              header={'Aramıza Yeni Katılan Kafeler'}
            />
          </>
          <>
            <CFShowerCoffesComp
              onPressItem={item => alert(item.name)}
              data={newJoinedCoffe}
              header={'En Çok Tercih Edilen Kafeler'}
            />
          </>
          <>
            <CFShowerCoffesComp
              onPressItem={item => alert(item.name)}
              data={newJoinedCoffe}
              header={'En Çok Favoriye Alınan Kafeler'}
            />
          </>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default StoreScreen;
