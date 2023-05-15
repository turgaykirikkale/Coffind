/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useReducer, useRef, useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
import {Svg, Path} from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';
import Lottie from 'lottie-react-native';
import HomeStackNavigator from '../HomeStackNavigator';
import OrderTrackingNavigator from '../OrderTrackingNavigator';
import ProfileStackNavigator from '../ProfileStackNavigator';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

function AppStackTabNavigator() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{headerShown: false, unmountOnBlur: true}}
        tabBar={props => <AnimatedTabBar {...props} />}>
        <Tab.Screen
          name="HomeStackNavigator"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({ref}) => (
              <Lottie
                ref={ref}
                loop={false}
                source={require('../../../Assets/NavigationAssets/home icon.json')}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="OrderTrackingNavigator"
          component={OrderTrackingNavigator}
          options={{
            tabBarIcon: ({ref}) => (
              <Lottie
                ref={ref}
                loop={false}
                source={require('../../../Assets/NavigationAssets/p6uWnJ7NNt.json')}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStackNavigator"
          component={ProfileStackNavigator}
          options={{
            tabBarIcon: ({ref}) => (
              <Lottie
                ref={ref}
                loop={false}
                source={require('../../../Assets/NavigationAssets/Comp 1.json')}
                style={{width: 22, height: 22}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const AnimatedTabBar = ({
  state: {index: activeIndex, routes},
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const {theme} = useSelector(state => state.themeStore);

  const {bottom} = useSafeAreaInsets();
  const reducer = (state: any, action: {x: number, y: number}) => {
    console.log('ACTOON', action);
    return [...state, {x: action.x, index: action.index}];
  };

  const [layout, dispatch] = useReducer(reducer, []);
  console.log('layout,', layout);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({x: event.nativeEvent.layout.x, index});
    console.log('EVENET', event.nativeEvent.layout.x);
  };

  const xOffset = useDerivedValue(() => {
    if (layout.length !== routes.length) {
      return 0;
    }
    return [...layout].find(({index}) => index === activeIndex).x - 25;
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(xOffset.value, {duration: 250})}],
    };
  });

  return (
    <View
      style={[
        styles.tabBar,
        {
          paddingBottom: bottom,
        },
      ]}>
      <AnimatedSvg
        xmlns="http://www.w3.org/2000/svg"
        width={110}
        height={60}
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animatedStyles]}>
        <Path
          fill={theme?.colors?.gradientBottom}
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const {options} = descriptors[route.key];
          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              onLayout={e => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};
type TabBarComponentProps = {
  active?: boolean,
  onPress: () => void,
  onLayout: (e: LayoutChangeEvent) => void,
};

const TabBarComponent = ({
  active,
  options,
  onLayout,
  onPress,
}: TabBarComponentProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (active && ref?.current) {
      ref.current.play();
    }
  }, [active]);
  const animatedComponentCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, {duration: 250}),
        },
      ],
    };
  });

  const animatedIconContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, {duration: 250}),
    };
  });

  return (
    <Pressable style={styles.component} onPress={onPress} onLayout={onLayout}>
      <Animated.View
        style={[styles.componentCircle, animatedComponentCircleStyle]}
      />
      <Animated.View style={[styles.iconContainer, animatedIconContainerStyle]}>
        {options.tabBarIcon ? options.tabBarIcon({ref}) : <Text>?</Text>}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    // height:
    height: 80,
  },
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  component: {
    width: 60,
    height: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 26,
    width: 26,
  },
  unActiveIcon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
});

export default AppStackTabNavigator;
