import React, {useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';
import {useSelector} from 'react-redux';

function HomeScreen(props) {
  const {theme} = useSelector(state => state.themeStore);
  const store = useSelector(state => state);
  console.log('Store', store);
  const {navigation} = props;

  const homePageNews = [
    {
      title:
        'Kahvelerinizi artık online sipariş vererek kapınızda getirebiliriz.',
      image: require('../../../Assets/HomePageImages/transport.jpeg'),
      description:
        'Anlaşmalı olduğumuz taşıma şirketleriyle kahvelerinizi size iletiyoruz. Ve siz hiç zorlanmadan oturduğunuz yerden kahvenizi içebilirsiniz. Siparişinizi tamamlarken oradan taşıma firmasını seçebilirsiniz. Ve kahvenizi rahat bir şekilde yudumlayabilirsiniz.',
    },
    {
      title: 'Kahve içtikçe coffind puan kazandıran siparişler.',
      image: require('../../../Assets/HomePageImages/coffe2.jpeg'),
      description:
        'Coffind ile kahve içimenin en güzel yönlerinden biri siparişlerinizden ekstra Coffind Puan kazanabilir ve bu puanlarla içeceklerinizi bedavaya getirebilirsinz. İçtekçe kazanmak için anlaşmalı olduğumuz noktalar ve anlaşmalı olduğumuz noktalardan puan elde edebilirsiniz.',
    },
    {
      title: 'Kendi kahvenizi yaparak, sosyalleşebileceğiniz workshoplar.',
      image: require('../../../Assets/HomePageImages/TheBestTimeCoffe.jpeg'),
      description:
        'Vizyonumuz ve kültürümüz gereği kahve içmeyi sosyalleşmenin bir parçası olarak gördüğümüz için bizde ekstra olarak workshoplar yapmaya karar verdik. Bu kararımızı destekleyen kafeler ve baristalar tarafından kahve yapımı ve tadımı workshopları yapılacaktır. Belirli ücretler karşılığın ve belirli kontenjanlarla sınırlı olan workshoplar için lütfen takipte kalınız.',
    },
    {
      title: 'Bir kahve alarak sokak hayvanlarına desteğini gösterebilirsin.',
      image: require('../../../Assets/HomePageImages/coffe1.jpeg'),
      description:
        'Uygulamamızın üzerinden verilen bazı siparişler üzerinden sokak hayvanlarına ve sokak hayvanları derneklerine destek verilerek onların hayatlarına dokunulmaya çalışılmaktadır.',
    },
    {
      title:
        'Uygulamamızda Gold ve Silver alarak ayrıcalıklara sahip olabilirsiniz',
      image: require('../../../Assets/HomePageImages/coffe6.jpeg'),
      description:
        'Gold ve Silver üyeler olarak yapacağınız alışverilerinizide indirim ve bunlara ek olarak belirli dönemlerde hazırlanan kampayalardan yararlanma imkanı sağlanmaktadır.',
    },
    {
      title:
        'Bir bardak bir tohum kampanyasına dahil resturantlardan kahvenizi alarak siz de tohum bağışçısı olabilirsiniz.',
      image: require('../../../Assets/HomePageImages/coffe4.jpeg'),
      description:
        'Tema vakfı ile karşılıklı yürüttüğümüz kampanya ile bizim de anlaşmalı oldugğumuz kafelerden alışverişlerinizi, siparişlerinizi oluştururak tohum kampanyalarına katkıda bulunabilirsiniz. ',
    },
    {
      title:
        'Bir kahve bir bağış kampanyasıyla lösemili çoçuklar için bağışta bulunabilirsiniz.',
      image: require('../../../Assets/HomePageImages/losev.jpeg'),
      description:
        'Lösev ile birlikte yürütttüğümüz kampanya dahilnde oluşturacagınız siparişlerinizden belirli miktarlar Lösev hesaplarına aktarılacaktır. Ve bunların takipleri belirli denetim şirketleri tarafından denetimi yapılacaktır.',
    },
    {
      title:
        'Referansınıza sahip arkadaşlarınızdan ekstra puanlar kazanır, ayrıca onlar harcadıkça sizin de puanlarınız artar.',
      image: require('../../../Assets/HomePageImages/coffeShop2.jpeg'),
      description:
        'Referans kodu oluşturup bunları arkadaşlarınıza dagıtabilirsiniz. Maksimum 5 arkadaşınıza referans olabilirsiniz. Referenslarınız silme işlemleri yapabilirsiniz. Bu referanslarınızın harcamalarından ekstra kazançlar sağlayabilirsiniz. Ve bunları harcamalarınızda kullanabilirsiniz.',
    },
  ];

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 10}}>
          {_.map(homePageNews, item => {
            return (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('HomeScreenItemDeailScreen', {
                      item,
                    })
                  }
                  style={{
                    marginVertical: 8,
                    marginHorizontal: 10,
                    shadowColor: theme?.colors?.shadowColor,
                    shadowOffset: {width: 2, height: 5},
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    elevation: 1,
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      resizeMode="stretch"
                      style={{
                        width: '100%',
                        height: 200,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      source={item?.image}
                    />
                  </View>
                  <View
                    style={{
                      backgroundColor: theme?.colors?.gradientMiddle,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    }}>
                    <Text
                      style={{
                        color: theme?.colors?.textColor,
                        fontSize: 16,
                        fontWeight: '500',
                        letterSpacing: 0.7,
                        marginLeft: 15,
                        marginVertical: 10,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            );
          })}
        </ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('MapScreen')}
            style={{
              backgroundColor: 'green',
              marginBottom: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Text>Navigate Harita TestScreen</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default HomeScreen;
