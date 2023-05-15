import React from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import CFBackButton from '../../../Components/UI/CFBackButton';

function HomeScreenItemDeailScreen(props) {
  const {theme} = useSelector(state => state.themeStore);

  const {navigation} = props;
  const item = props?.route?.params?.item;
  console.log('item', item);
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
        <View style={{marginHorizontal: 5}}>
          <CFBackButton navigation={navigation} />
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 10, flex: 1}}>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <Image
                resizeMode="stretch"
                style={{
                  width: '100%',
                  height: 200,
                  borderRadius: 10,
                }}
                source={item?.image}
              />
            </View>
            <View style={{marginVertical: 10, marginHorizontal: 8}}>
              <Text
                style={{
                  color: theme?.colors?.textColor,
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginBottom: 8,
                }}>
                {item?.title}
              </Text>
              <Text
                style={{
                  marginHorizontal: 6,
                  color: theme?.colors?.textColor,
                  fontSize: 13,
                  letterSpacing: 0.9,
                }}>
                {item?.description}
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default HomeScreenItemDeailScreen;
