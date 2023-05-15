import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
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

function PieChartComp(props) {
  const {theme} = useSelector(state => state.themeStore);
  const {title, data} = props;

  const calculate = value => {
    let total = 0;
    data.map(item => {
      total += item.population;
    });

    let ratio = (value * 100) / total;

    return ratio.toFixed(1);
  };

  return (
    <View
      style={{
        marginHorizontal: 10,
        borderWidth: 1,
        paddingVertical: 10,
        borderColor: theme?.colors?.borderColor,
        borderRadius: 6,
        paddingHorizontal: 6,
      }}>
      <Text style={{color: theme?.colors.textColor, fontWeight: '500'}}>
        {title}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <PieChart
          data={data}
          width={windowWidth}
          height={140}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          hasLegend={false}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          right: 0,
          top: 20,
          bottom: 0,
          justifyContent: 'center',
          width: 200,
        }}>
        {data.map(item => {
          return (
            <TouchableOpacity
              key={item.color}
              style={{
                marginLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: item.color,
                  width: 15,
                  height: 15,
                  marginRight: 10,
                  borderRadius: 7.5,
                }}
              />
              <View>
                <Text
                  style={{
                    color: item.legendFontColor,
                    fontSize: item.legendFontSize,
                  }}>
                  {`%${calculate(item.population)} `}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: item.legendFontColor,
                    fontSize: item.legendFontSize,
                  }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={{marginBottom: 20}} />
      </View>
    </View>
  );
}

export default PieChartComp;
