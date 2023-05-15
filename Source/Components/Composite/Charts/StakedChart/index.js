import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {StackedBarChart} from 'react-native-chart-kit';
import {useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;

const data = {
  labels: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ],
  data: [
    [17300],
    [8000],
    [12000],
    [19099],
    [9321],
    [12387],
    [12332],
    [19832],
    [13233],
    [31233],
    [13276],
    [14754],
  ],
  barColors: ['green'],
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

function StakedChartComp(props) {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <View>
      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 10,
          padding: 10,
          borderColor: theme?.colors?.borderColor,
          borderRadius: 6,
        }}>
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: theme?.colors.textColor, fontWeight: '500'}}>
            Net Kar
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <StackedBarChart
              data={data}
              width={850}
              height={190}
              chartConfig={chartConfig}
              showLegend={false}
              decimalPlaces={0}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default StakedChartComp;
