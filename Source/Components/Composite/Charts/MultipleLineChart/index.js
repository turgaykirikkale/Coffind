import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';
import {useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;

function MultipleLineChart(props) {
  const {theme} = useSelector(state => state.themeStore);
  const {selected, data} = props;

  console.log(data.income);

  const min = selected.income[0].x;
  const max = selected.income[selected.income.length - 1].x;

  console.log('min', min, max);

  const findMaxYAxis = () => {
    let maxYaxis = 0;
    selected.income.map(item => {
      if (item.y > maxYaxis) {
        maxYaxis = item.y;
      }
    });
    let addedStatic = 0;

    addedStatic = (maxYaxis / 100) * 20;

    return maxYaxis + addedStatic;
  };

  return (
    <View
      style={{
        borderWidth: 1,
        marginHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,
        borderColor: theme?.colors?.borderColor,
        borderRadius: 6,
      }}>
      <View
        style={{
          marginHorizontal: 10,
          marginBottom: 10,
        }}>
        <Text style={{color: theme?.colors.textColor, fontWeight: '500'}}>
          {`${selected.name} Gelir Gider Tablosu`}
        </Text>
      </View>
      <Chart
        style={{height: 200, width: windowWidth}}
        padding={{left: 40, bottom: 20, right: 40, top: 5}}
        xDomain={{min: min, max: max}}
        yDomain={{min: 0, max: findMaxYAxis()}}>
        <HorizontalAxis
          tickCount={selected.data.length}
          theme={{labels: {formatter: v => v.toFixed(0)}}}
        />
        <VerticalAxis
          tickCount={selected.data.length + 1}
          theme={{labels: {formatter: v => v.toFixed(0)}}}
        />
        <HorizontalAxis />
        <Area
          theme={{
            gradient: {
              from: {color: 'green', opacity: 0.4},
              to: {color: 'green', opacity: 0.4},
            },
          }}
          smoothing="cubic-spline"
          data={selected?.income}
        />
        <Area
          theme={{
            gradient: {
              from: {color: 'red', opacity: 0.4},
              to: {color: 'red', opacity: 0.4},
            },
          }}
          smoothing="cubic-spline"
          data={selected?.expense}
        />
      </Chart>
    </View>
  );
}

export default MultipleLineChart;
