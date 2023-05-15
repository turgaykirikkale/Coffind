import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import LineChart from '../../../Components/Composite/Charts/LineChart';
import PieChartComp from '../../../Components/Composite/Charts/PieChart';
import StakedChartComp from '../../../Components/Composite/Charts/StakedChart';
import MultipleLineChart from '../../../Components/Composite/Charts/MultipleLineChart';
const sellingInfoGrafikData = [
  {
    name: 'Saatlik',
    id: 0,
    data: [
      {x: 10, y: 16},
      {x: 11, y: 12},
      {x: 12, y: 12},
      {x: 13, y: 22},
      {x: 14, y: 32},
      {x: 15, y: 43},
      {x: 16, y: 21},
      {x: 17, y: 53},
      {x: 18, y: 87},
      {x: 19, y: 76},
      {x: 20, y: 80},
      {x: 21, y: 81},
      {x: 22, y: 63},
      {x: 23, y: 43},
      {x: 24, y: 0},
    ],
    sellingRatio: [
      {
        name: 'Sıcak İçecekler',
        population: 123,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Soguk İçecekler',
        population: 234,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Yiyecekler',
        population: 80,
        color: 'rgb(229, 215, 61)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
    ],
    expensesFaces: [
      {
        name: 'Çalışan Giderleri',
        population: 12343,
        color: 'rgb(153, 24, 24)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },

      {
        name: 'Kaynak Giderleri',
        population: 9328,
        color: 'rgb(11, 99, 163)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Beklenmedik Giderler',
        population: 9328,
        color: 'rgb(216, 144, 0)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
    ],
    income: [
      {x: 10, y: 16},
      {x: 11, y: 12},
      {x: 12, y: 12},
      {x: 13, y: 22},
      {x: 14, y: 32},
      {x: 15, y: 43},
      {x: 16, y: 21},
      {x: 17, y: 53},
      {x: 18, y: 87},
      {x: 19, y: 76},
      {x: 20, y: 80},
      {x: 21, y: 81},
      {x: 22, y: 63},
      {x: 23, y: 43},
      {x: 24, y: 0},
    ],
    expense: [
      {x: 10, y: 8},
      {x: 11, y: 9},
      {x: 12, y: 15},
      {x: 13, y: 6},
      {x: 14, y: 12},
      {x: 15, y: 56},
      {x: 16, y: 16},
      {x: 17, y: 34},
      {x: 18, y: 54},
      {x: 19, y: 85},
      {x: 20, y: 54},
      {x: 21, y: 81},
      {x: 22, y: 42},
      {x: 23, y: 21},
      {x: 24, y: 0},
    ],
  },
  {
    name: 'Günlük',
    id: 1,
    data: [
      {x: 1, y: 200},
      {x: 2, y: 400},
      {x: 3, y: 312},
      {x: 4, y: 212},
      {x: 5, y: 675},
      {x: 6, y: 534},
      {x: 7, y: 423},
    ],
    sellingRatio: [
      {
        name: 'Sıcak İçecekler',
        population: 900,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Soguk İçecekler',
        population: 1231,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Yiyecekler',
        population: 574,
        color: 'rgb(229, 215, 61)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
    ],
    expensesFaces: [
      {
        name: 'Çalışan Giderleri',
        population: 12343,
        color: 'rgb(153, 24, 24)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },

      {
        name: 'Kaynak Giderleri',
        population: 9328,
        color: 'rgb(11, 99, 163)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Beklenmedik Giderler',
        population: 9328,
        color: 'rgb(216, 144, 0)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
    ],
    income: [
      {x: 1, y: 1000},
      {x: 2, y: 1345},
      {x: 3, y: 1567},
      {x: 4, y: 3456},
      {x: 5, y: 1983},
      {x: 6, y: 4985},
      {x: 7, y: 1621},
    ],
    expense: [
      {x: 1, y: 536},
      {x: 2, y: 235},
      {x: 3, y: 2300},
      {x: 4, y: 1235},
      {x: 5, y: 842},
      {x: 6, y: 1087},
      {x: 7, y: 674},
    ],
  },
  {
    name: 'Aylık',
    id: 2,
    data: [
      {x: 1, y: 8000},
      {x: 2, y: 7093},
      {x: 3, y: 6893},
      {x: 4, y: 12873},
      {x: 5, y: 12373},
      {x: 6, y: 15988},
      {x: 7, y: 13982},
      {x: 8, y: 12388},
      {x: 9, y: 11736},
      {x: 10, y: 8973},
      {x: 11, y: 9282},
      {x: 12, y: 7892},
    ],
    sellingRatio: [
      {
        name: 'Sıcak İçecekler',
        population: 12343,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Soguk İçecekler',
        population: 14832,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Yiyecekler',
        population: 9328,
        color: 'rgb(229, 215, 61)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
    ],
    expensesFaces: [
      {
        name: 'Çalışan Giderleri',
        population: 12343,
        color: 'rgb(153, 24, 24)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },

      {
        name: 'Kaynak Giderleri',
        population: 9328,
        color: 'rgb(11, 99, 163)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },

      {
        name: 'Kira Giderleri',
        population: 14832,
        color: 'rgb(88, 50, 186)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Fatura Giderleri',
        population: 9328,
        color: 'rgb(112, 79, 102)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Beklenmedik Giderler',
        population: 9328,
        color: 'rgb(216, 144, 0)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
    ],
    income: [
      {x: 1, y: 53723},
      {x: 2, y: 64231},
      {x: 3, y: 55832},
      {x: 4, y: 53782},
      {x: 5, y: 67892},
      {x: 6, y: 49999},
      {x: 7, y: 72983},
      {x: 8, y: 58213},
      {x: 9, y: 68982},
      {x: 10, y: 39832},
      {x: 11, y: 53982},
      {x: 12, y: 61873},
    ],
    expense: [
      {x: 1, y: 21983},
      {x: 2, y: 25832},
      {x: 3, y: 38212},
      {x: 4, y: 31298},
      {x: 5, y: 23833},
      {x: 6, y: 18231},
      {x: 7, y: 42012},
      {x: 8, y: 28321},
      {x: 9, y: 41231},
      {x: 10, y: 12832},
      {x: 11, y: 21398},
      {x: 12, y: 35891},
    ],
  },

  {
    name: 'Yıllık',
    id: 2,
    data: [
      {x: 1, y: 124300},
      {x: 2, y: 159900},
    ],
    sellingRatio: [
      {
        name: 'Sıcak İçecekler',
        population: 69321,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Soguk İçecekler',
        population: 54212,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Yiyecekler',
        population: 21233,
        color: 'rgb(229, 215, 61)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
    ],
    expensesFaces: [
      {
        name: 'Çalışan Giderleri',
        population: 12343,
        color: 'rgb(153, 24, 24)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },

      {
        name: 'Kaynak Giderleri',
        population: 9328,
        color: 'rgb(11, 99, 163)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },

      {
        name: 'Kira Giderleri',
        population: 14832,
        color: 'rgb(88, 50, 186)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Fatura Giderleri',
        population: 9328,
        color: 'rgb(112, 79, 102)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
      {
        name: 'Beklenmedik Giderler',
        population: 9328,
        color: 'rgb(216, 144, 0)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      },
    ],
    income: [
      {x: 1, y: 1238737},
      {x: 2, y: 1574233},
      {x: 3, y: 1412377},
      {x: 4, y: 1183123},
    ],
    expense: [
      {x: 1, y: 698831},
      {x: 2, y: 729832},
      {x: 3, y: 731233},
      {x: 4, y: 812383},
    ],
  },
];

function HomeScreen(props) {
  const {theme} = useSelector(state => state.themeStore);
  const [selectedSellingGraphic, setselectedSellingGraphic] = useState(
    sellingInfoGrafikData[0],
  );

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
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 10}}>
            <LineChart
              data={sellingInfoGrafikData}
              selectGraphicTime={item => setselectedSellingGraphic(item)}
              selected={selectedSellingGraphic}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <MultipleLineChart
              selected={selectedSellingGraphic}
              data={sellingInfoGrafikData}
            />
          </View>
          <View>
            <PieChartComp
              title={`${selectedSellingGraphic.name} Satış Yüzdeleri`}
              data={selectedSellingGraphic.sellingRatio}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <PieChartComp
              title={`${selectedSellingGraphic.name} Gider Yüzdeleri`}
              data={selectedSellingGraphic.expensesFaces}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <StakedChartComp />
          </View>

          <View style={{marginVertical: 10}} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default HomeScreen;
