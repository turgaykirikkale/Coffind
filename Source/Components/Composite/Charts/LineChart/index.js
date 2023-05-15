import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
  Tooltip,
} from 'react-native-responsive-linechart';
import {useSelector} from 'react-redux';

function LineChart(props) {
  const windowWidth = Dimensions.get('window').width;
  const {data, selectGraphicTime, selected} = props;
  const {theme} = useSelector(state => state.themeStore);

  const min = selected.data[0].x;
  const max = selected.data[selected.data.length - 1].x;

  console.log('min', min, max);

  const findMaxYAxis = () => {
    let maxYaxis = 0;
    selected.data.map(item => {
      if (item.y > maxYaxis) {
        maxYaxis = item.y;
      }
    });
    let addedStatic = 0;

    addedStatic = (maxYaxis / 100) * 20;

    return maxYaxis + addedStatic;
  };

  console.log(findMaxYAxis());

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {data.map(item => {
          return (
            <TouchableOpacity
              onPress={() => selectGraphicTime && selectGraphicTime(item)}
              key={item.id}
              style={{
                alignItems: 'center',
                flex: 1,
                borderWidth: 1,
                marginHorizontal: 9,
                borderRadius: 6,
                borderColor: theme?.colors.borderColor,
                paddingVertical: 2,
              }}>
              <Text
                style={{
                  color: theme?.colors?.textColor,
                  fontSize: 10,
                  fontWeight: 'bold',

                  paddingHorizontal: 10,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
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
            {`${selected.name} Satılan Adet Tablosu`}
          </Text>
        </View>

        <Chart
          style={{height: 200, width: windowWidth}}
          data={selected?.data}
          padding={{left: 40, bottom: 20, right: 40, top: 5}}
          xDomain={{min: min, max: max}}
          yDomain={{min: 0, max: findMaxYAxis()}}>
          <VerticalAxis
            tickCount={selected.data.length + 1}
            theme={{labels: {formatter: v => v.toFixed(0)}}}
          />
          <HorizontalAxis
            tickCount={selected.data.length}
            theme={{labels: {formatter: v => v.toFixed(0)}}}
          />
          <Area
            theme={{
              gradient: {
                from: {color: '#ffa502'},
                to: {color: '#ffa502', opacity: 0.2},
              },
            }}
          />

          <Line
            tooltipComponent={<Tooltip />}
            theme={{
              stroke: {color: '#ffa502', width: 3},
              scatter: {
                default: {width: 3, height: 3, rx: 1, color: '#44ad32'},
                selected: {color: 'red'},
              },
            }}
          />
        </Chart>
      </View>
    </View>
  );
}

export default LineChart;
