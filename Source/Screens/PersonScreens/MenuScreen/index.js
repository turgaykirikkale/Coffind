import React, {useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import CFTabs from '../../../Components/UI/ CFTabs';
import CFMenuItemComp from '../../../Components/UI/CFMenuItemComp';
function MenuScreen(props) {
  const store = useSelector(state => state);
  const {theme} = store?.themeStore;
  const {navigation} = props;

  const hotCoffeData = [
    {
      title: 'Black',
      description: store?.languageStore?.language?.localization?.blackCoffeDesc,
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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
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
          title: store?.languageStore?.language?.localization?.LactoseFreeMilk,
        },
        {
          title: store?.languageStore?.language?.localization?.AlmondMilk,
        },
      ],
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Cappuccino',
      description: store?.languageStore?.language?.localization?.cappuccinoDes,
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
          title: store?.languageStore?.language?.localization?.LactoseFreeMilk,
        },
        {
          title: store?.languageStore?.language?.localization?.AlmondMilk,
        },
      ],
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Americano',
      description: store?.languageStore?.language?.localization?.americanoDesc,
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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Espresso',
      description: store?.languageStore?.language?.localization?.espressoDesc,
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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Doppio',
      description: store?.languageStore?.language?.localization?.doppioDesc,
      ingredients: ['2oz Espresso'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Doppio.jpg/2560px-Doppio.jpg',
      id: 6,

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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Cortado',
      description: store?.languageStore?.language?.localization?.cortadoDesc,
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
          title: store?.languageStore?.language?.localization?.LactoseFreeMilk,
        },
        {
          title: store?.languageStore?.language?.localization?.AlmondMilk,
        },
      ],
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Red Eye',
      description: store?.languageStore?.language?.localization?.redEyeDesc,
      ingredients: ['Coffee', 'Espresso'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Linea_doubleespresso.jpg',
      id: 8,

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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
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
          title: store?.languageStore?.language?.localization?.LactoseFreeMilk,
        },
        {
          title: store?.languageStore?.language?.localization?.AlmondMilk,
        },
      ],
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Lungo',
      description: store?.languageStore?.language?.localization?.lungoDesc,
      ingredients: ['Long pulled espresso'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/Caff%C3%A8_lungo.JPG',
      id: 10,

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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Macchiato',
      description: store?.languageStore?.language?.localization?.macchiatoDesc,
      ingredients: ['Espresso', 'Foam'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/07/Caff%C3%A8_Espresso_Macchiato_Schiumato.jpg',
      id: 11,

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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Mocha',
      description: store?.languageStore?.language?.localization?.mochaDesc,
      ingredients: ['Espresso', 'Steamed Milk', 'Chocolate'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/f6/Mocaccino-Coffee.jpg',
      id: 12,

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
          title: store?.languageStore?.language?.localization?.LactoseFreeMilk,
        },
        {
          title: store?.languageStore?.language?.localization?.AlmondMilk,
        },
      ],
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Ristretto',
      description: store?.languageStore?.language?.localization?.ristrettoDesc,
      ingredients: ['Short pulled espresso'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/1/12/Doppio_ristretto_Chiang_Mai.jpg',
      id: 13,

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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Flat White',
      description: store?.languageStore?.language?.localization?.flatWhiteDesc,
      ingredients: ['Espresso', 'Steamed Milk'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg',
      id: 14,

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
          title: store?.languageStore?.language?.localization?.LactoseFreeMilk,
        },
        {
          title: store?.languageStore?.language?.localization?.AlmondMilk,
        },
      ],
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Affogato',
      description: store?.languageStore?.language?.localization?.affogatoDesc,
      ingredients: ['Espresso', 'Ice cream'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/1/17/Vinoteca%2C_Smithfield%2C_London_%284485849609%29.jpg',
      id: 15,

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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Café au Lait',
      description: store?.languageStore?.language?.localization?.caféauLaitDesc,
      ingredients: ['Coffee', 'Steamed Milk'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/06/Latte_art.jpg',
      id: 16,

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
          title: store?.languageStore?.language?.localization?.LactoseFreeMilk,
        },
        {
          title: store?.languageStore?.language?.localization?.AlmondMilk,
        },
      ],
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Irish',
      description: store?.languageStore?.language?.localization?.IrishDesc,
      ingredients: ['Coffee', 'Whiskey', 'Sugar', 'Cream'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/61/Irish_coffee_glass.jpg',
      id: 17,

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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Guayoyo',
      description: store?.languageStore?.language?.localization?.GuayoyoDesc,
      ingredients: ['Coffee', 'Traditional', 'Hot Water'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
      id: 18,

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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Cortadito',
      description: store?.languageStore?.language?.localization?.CortaditoDesc,
      ingredients: ['Coffee', 'Traditional', 'Sugar', 'Milk'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/9b/Cuban_coffee-_2013-04-05_14-30.jpg',
      id: 19,

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
          title: store?.languageStore?.language?.localization?.LactoseFreeMilk,
        },
        {
          title: store?.languageStore?.language?.localization?.AlmondMilk,
        },
      ],
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Aguapanela Coffee',
      description:
        store?.languageStore?.language?.localization?.AguapanelaCoffeeDesc,
      ingredients: ['Coffee', 'Sweet', 'Panela', 'Traditional'],
      image:
        'https://commons.wikimedia.org/wiki/File:Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_(5617496209).jpg#/media/File:Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_(5617496209).jpg',
      id: 20,
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
          title: store?.languageStore?.language?.localization?.LactoseFreeMilk,
        },
        {
          title: store?.languageStore?.language?.localization?.AlmondMilk,
        },
      ],
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
  ];

  const icedCoffeData = [
    {
      title: 'Strawberry Acai',
      description:
        'Çilek taneleriyle tatlandıırılmıış yazları en fresh içeceklerden.',
      ingredients: ['çilek'],
      imageR: require('../../../Assets/IcedCooffeImages/strawBerryAcai.webp'),
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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Berry Hibiscus',
      description:
        'Sizi serinletecek donmuş taze böğürtlenlerle yapılan berry hibiscus 70 kCal içermektedir.',
      ingredients: ['Böğürtlen'],
      imageR: require('../../../Assets/IcedCooffeImages/berryHibiscus.webp'),
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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Cool Lime',
      description:
        'Yazın gözdesi cool lime, lime ile tatlandırılmış fresh bir içecektir.',
      ingredients: ['lime'],
      imageR: require('../../../Assets/IcedCooffeImages/coolLime.webp'),
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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Chai Tee Latte',
      description:
        'Baharat ve çayın en güzel karışmış halinin soğuk versiyonunu içmeye hazar mısınız?',
      ingredients: ['Çay, Baharat, Süt'],
      imageR: require('../../../Assets/IcedCooffeImages/chaiTeaLatte.webp'),
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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Karamel Frappuccino',
      description:
        'Gelenekselleşmiş lezzet olan frappuccinolarımızdan denemelisiniz.',
      ingredients: ['Karamel, Kahve, Süt'],
      imageR: require('../../../Assets/IcedCooffeImages/caramelFrappucino.webp'),
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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Frappuccino',
      description:
        'Gelenekselleşmiş lezzet olan frappuccinolarımızdan denemelisiniz.',
      ingredients: ['Kahve, Süt'],
      imageR: require('../../../Assets/IcedCooffeImages/CoffeFrappuccino.webp'),
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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Cold Brew',
      description:
        'Kahvenin en sade ve en soğuk hali Cold Brew içerken damaklarınızda kahvenin soguklugunu hissedeceksiniz.',
      ingredients: ['Kahve'],
      imageR: require('../../../Assets/IcedCooffeImages/ColdBreww.webp'),
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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      title: 'Iced Cappucino',
      description:
        'Geleneksel kahvelerimizden olan cappucinonun soğuk halini sizlere sunmaktan mutluluk duyuyoruz.',
      ingredients: ['Kahve, Süt'],
      imageR: require('../../../Assets/IcedCooffeImages/IcedCappucino.webp'),
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
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
  ];

  const foodData = [
    {
      type: 2,
      title: 'Havuçlu Kek',
      description:
        'Ceviz parçaları ile süslenmiş arası peynirli kremalı havuçlu kek katları ',
      ingredients: ['Ceviz, Havuç'],
      imageR: require('../../../Assets/FoodDataImages/havucluKek.webp'),
      id: 1,
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      type: 2,
      title: 'Misto Cookie',
      description:
        'Kavrulmuş fındık ve bitter çikolatalı Misto Cookie kahve molanıza çok yakışacak.',
      ingredients: ['Fındık, Bitter Çikolata'],
      imageR: require('../../../Assets/FoodDataImages/mistoCookie.webp'),
      id: 1,
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      type: 2,
      title: 'Mozaik Pasta',
      description:
        'Bilinen ve sevilen lezzet! Bisküvi parçacıklı ve çikolatalı mozaik pasta, tam bir kahve arkadaşı.',
      ingredients: ['Çikolata, Bisküvi'],
      imageR: require('../../../Assets/FoodDataImages/mozaikPasta.webp'),
      id: 1,
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      type: 2,
      title: 'Limonlu Cheescake',
      description:
        'Kahve molanızın vazgeçilmezi, çıtır bisküvi tabanıyla birleşen özel peynir dolgusu ve limon sosu ile süslenmiş cheesecake.',
      ingredients: ['Peynir, Limon'],
      imageR: require('../../../Assets/FoodDataImages/LimonluCheescake.webp'),
      id: 1,
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      type: 2,
      title: 'Kahveli Pasta',
      description:
        'Pandispanya ve kahveli kremanın beyaz çikolata ile buluştuğu fındık parçacıklarıyla kaplı pasta.',
      ingredients: ['Pandispanya, Fındık, Çikolata'],
      imageR: require('../../../Assets/FoodDataImages/kahveliPasta.webp'),
      id: 1,
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      type: 2,
      title: 'Pane Sandviç',
      description:
        'Tam buğday unlu kare ciabatta sandviç ekmeği içerisinde fesleğen soslu çıtır pane ve peynire alternatif bitkisel lezzet.(Vegan Tüketime Uygun).',
      ingredients: ['Pane, Vegatables, Buğday'],
      imageR: require('../../../Assets/FoodDataImages/PaneSandvich.webp'),
      id: 1,
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      type: 2,
      title: 'Vegan Salata',
      description:
        'Marul, falafel, kiraz domates, roka, kurutulmuş dereotu, havuç ve zeytinyağlı, limonlu sos.',
      ingredients: ['Marul, Falafel, Domates'],
      imageR: require('../../../Assets/FoodDataImages/VeganSalata.webp'),
      id: 1,
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      type: 2,
      title: 'Peynirli Kruvasan',
      description: 'İçerisinde kaşar peyniri bulunan klasik kruvasan lezzeti',
      ingredients: ['Kaşar Peyniri'],
      imageR: require('../../../Assets/FoodDataImages/peynirliKruvasan.webp'),
      id: 1,
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
    {
      type: 2,
      title: 'Çikolatalı Kruvasan',
      description: 'Klasik çikolatalı kruvasan lezzeti',
      ingredients: ['Çikolata'],
      imageR: require('../../../Assets/FoodDataImages/cikolataliKruvasan.webp'),
      id: 1,
      shops: [
        {
          name: 'Line Coffe',
          price: 29,
          image: require('../../../Assets/CoffeShopImages/cafeDeFlore.jpeg'),
        },
        {
          name: 'Bardak Coffe',
          price: 32,
          image: require('../../../Assets/CoffeShopImages/leepoque.jpeg'),
        },
        {
          name: 'Simento Coffe',
          price: 30,
          image: require('../../../Assets/CoffeShopImages/lePetit.jpeg'),
        },
        {
          name: 'Saudade Coffe',
          price: 28,
          image: require('../../../Assets/CoffeShopImages/londonCoffeShop3.jpeg'),
        },
        {
          name: 'Water Coffe',
          price: 36,
          image: require('../../../Assets/CoffeShopImages/Mourgane.jpeg'),
        },
        {
          name: 'Casca Coffe',
          price: 26,
          image: require('../../../Assets/CoffeShopImages/kolnRoyal.jpeg'),
        },
      ],
    },
  ];

  const tabs = [
    {title: 'Sıcak İçecekler', index: 0},
    {title: 'Soğuk İçecekler', index: 1},
    {title: 'Yiyecekler', index: 2},
  ];
  const [tabIndex, setTabIndex] = useState(0);

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
        <View style={{flex: 1}}>
          <View style={{marginVertical: 10}}>
            <CFTabs
              index={tabIndex}
              tabs={tabs}
              onPress={index => setTabIndex(index)}
            />
          </View>
          {tabIndex === 0 ? (
            <CFMenuItemComp data={hotCoffeData} navigation={navigation} />
          ) : null}

          {tabIndex === 1 ? (
            <CFMenuItemComp data={icedCoffeData} navigation={navigation} />
          ) : null}
          {tabIndex === 2 ? (
            <CFMenuItemComp data={foodData} navigation={navigation} type={2} />
          ) : null}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default MenuScreen;
