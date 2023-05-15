import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';
import {
  themeHandle,
  languageHandle,
  deleteUser,
} from '../../../Utils/StoreGeneralControl/SetState';
import CFQrModal from '../../../Components/UI/CFQrModal';
import {removeDataFromStorage} from '../../../Utils/Storage';
import {CommonActions} from '@react-navigation/native';
function ProfileScreen(props) {
  const {theme} = useSelector(state => state.themeStore);
  const {language} = useSelector(state => state.languageStore);
  const {user} = useSelector(state => state.userStore);
  const [showQrModal, setShowQrModal] = useState(false);
  const [fullScreenLoader, setFullScreenLoader] = useState(false);

  console.log('ACCOUNT', user);

  const {navigation} = props;

  const themeArray = [
    {
      name: 'Decent',
      color: '#e0e0e0',
    },
    {
      name: 'Royal',
      color: '#141e30',
    },
    {
      name: 'OceanDeep',
      color: '#192f6a',
    },
  ];

  const languageArray = [
    {
      type: 'TR',
      flag: require('../../../Assets/Flags/TRFlag.png'),
    },
    {
      type: 'EN',
      flag: require('../../../Assets/Flags/gbFlag.png'),
    },
  ];

  console.log('Language', language);

  const windowWidth = Dimensions.get('window').width;
  const userStatic = {
    email: user?.email,
    surname: user?.companyTaxNumber || user?.surname,
    name: user?.companyName || user?.name,
    gender: 'Erkek',
    location: 'Türkiye', //BURASI HARITALARDAN KONUM ALINACAK VE TURKIYE
    balance: '221.18',
  };

  const logout = async () => {
    const value = await removeDataFromStorage('LoginedUser');
    if (value) {
      deleteUser();
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'LoginAndRegisterScreen'}],
        }),
      );
    } else {
      alert(
        'Çıkış yaparken beklenmedik hata oluştu lütfen sonra tekrar deneyin.',
      );
    }
  };

  const logoutWithNavigate = async () => {
    const value = await removeDataFromStorage('LoginedUser');
    if (value) {
      deleteUser();
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'LoginAndRegisterScreen', params: {type: 1}}],
        }),
      );
    } else {
      alert(
        'Çıkış yaparken beklenmedik hata oluştu lütfen sonra tekrar deneyin.',
      );
    }
  };

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
      {fullScreenLoader ? (
        <View
          style={{
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
            flex: 1,
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 999,
            width: '100%',
            height: '100%',
          }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : null}
      <CFQrModal
        modalVisible={showQrModal}
        setModalVisible={() => setShowQrModal(false)}
      />
      <View
        style={{
          marginTop: 50,
          flex: 1,
          backgroundColor: theme?.colors?.gradientMiddle,
        }}>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <TouchableOpacity onPress={() => alert('Image Yukleme Acılacak')}>
            <Image
              style={{
                width: windowWidth / 2.5,
                height: windowWidth / 2.5,
                backgroundColor: 'red',
                borderRadius: windowWidth / 5,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginVertical: 5,
              fontSize: 18,
              fontWeight: 'bold',
              color: theme?.colors?.textColor,
            }}>{`${userStatic?.name} ${userStatic.surname}`}</Text>
          <Text style={{fontSize: 12, color: theme?.colors?.textColor}}>
            {userStatic?.email}
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 5,
              color: theme?.colors?.textColor,
            }}>
            {userStatic?.location}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: theme?.colors?.gradientBottom,
            borderTopLeftRadius: 70,
            borderTopRightRadius: 70,
            marginHorizontal: 3,
          }}>
          <ScrollView>
            <View style={{marginVertical: 20}}>
              {user?.type === 0 ? (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      // borderWidth: 0.4,
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                      borderRadius: 20,
                      alignItems: 'center',
                      marginHorizontal: windowWidth / 10,
                      backgroundColor: theme?.colors?.gradientMiddle,
                    }}>
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 16,
                        color: theme?.colors?.textColor,
                      }}>
                      {`${language?.localization?.Balance}`}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 16,
                          color: theme?.colors?.textColor,
                        }}>{`${userStatic?.balance} TL`}</Text>
                      <TouchableOpacity
                        style={{
                          marginHorizontal: 10,
                          paddingHorizontal: 8,
                          backgroundColor: 'green',
                          justifyContent: 'center',
                          borderRadius: 20,
                          width: 40,
                          height: 40,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 20,
                            marginTop: -3,
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                      borderRadius: 12,
                      marginTop: 10,
                      alignItems: 'center',
                      marginHorizontal: windowWidth / 40,
                      backgroundColor: theme?.colors?.gradientMiddle,
                    }}>
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 16,
                        color: theme?.colors?.textColor,
                      }}>
                      {`Qr Kodla Öde`}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => setShowQrModal(true)}
                        style={{
                          marginHorizontal: 10,
                          justifyContent: 'center',
                          borderRadius: 15,
                          width: 30,
                          paddingLeft: 0.5,
                          height: 30,
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../../Assets/Icons/qrIcon.png')}
                          resizeMode="stretch"
                          style={{
                            width: 26,
                            height: 26,
                            borderRadius: 13,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              ) : null}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 12,
                  marginTop: 20,
                  alignItems: 'center',
                  marginHorizontal: windowWidth / 40,
                  backgroundColor: theme?.colors?.gradientMiddle,
                }}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 16,
                    color: theme?.colors?.textColor,
                  }}>
                  {`Ödeme Kabul Et`}
                </Text>
                <TouchableOpacity
                  style={{
                    marginHorizontal: 10,
                    paddingHorizontal: 8,
                    backgroundColor: 'gray',
                    justifyContent: 'center',
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../../Assets/Icons/cameraIcon.png')}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 17.5,
                      alignSelf: 'center',
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 12,
                  marginTop: 10,
                  alignItems: 'center',
                  marginHorizontal: windowWidth / 40,
                  backgroundColor: theme?.colors?.gradientMiddle,
                }}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 16,
                    color: theme?.colors?.textColor,
                  }}>
                  {`Menü Düzenle`}
                </Text>
                <TouchableOpacity
                  style={{
                    marginHorizontal: 10,
                    paddingHorizontal: 8,
                    backgroundColor: 'gray',
                    justifyContent: 'center',
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../../Assets/Icons/resMenu.png')}
                    style={{
                      width: 20,
                      height: 20,
                      alignSelf: 'center',
                      marginRight: 3,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 12,
                  marginTop: 10,
                  alignItems: 'center',
                  marginHorizontal: windowWidth / 40,
                  backgroundColor: theme?.colors?.gradientMiddle,
                }}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 16,
                    color: theme?.colors?.textColor,
                  }}>
                  {`${language?.localization?.Theme}`}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {_.map(themeArray, item => {
                    return (
                      <>
                        <TouchableOpacity
                          onPress={() => themeHandle(item.name)}
                          style={{
                            marginHorizontal: 10,
                            paddingHorizontal: 8,
                            backgroundColor: item?.color,
                            justifyContent: 'center',
                            borderRadius: 15,
                            width: 30,
                            height: 30,
                            alignItems: 'center',
                            borderWidth: item?.name === theme?.Name ? 2 : 0,
                            borderColor:
                              item?.name === theme?.Name ? 'green' : null,
                          }}
                        />
                      </>
                    );
                  })}
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 12,
                  marginTop: 10,
                  alignItems: 'center',
                  marginHorizontal: windowWidth / 40,
                  backgroundColor: theme?.colors?.gradientMiddle,
                }}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 16,
                    color: theme?.colors?.textColor,
                  }}>
                  {`${language?.localization?.Language}`}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {_.map(languageArray, item => {
                    return (
                      <>
                        <TouchableOpacity
                          onPress={() => languageHandle(item.type)}
                          style={{
                            marginHorizontal: 10,
                            justifyContent: 'center',
                            borderRadius: 15,
                            width: 30,
                            paddingLeft: 0.5,
                            height: 30,
                            alignItems: 'center',
                            borderWidth: item?.type === language?.type ? 3 : 0,
                            borderColor:
                              item?.type === language?.type ? 'green' : null,
                          }}>
                          <Image
                            source={item?.flag}
                            resizeMode="stretch"
                            style={{
                              width: 26,
                              height: 26,
                              borderRadius: 13,
                            }}
                          />
                        </TouchableOpacity>
                      </>
                    );
                  })}
                </View>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => logoutWithNavigate()}
            style={{
              paddingVertical: 10,
              marginBottom: 3,
              marginHorizontal: 10,
              borderRadius: 40,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme?.colors?.gradientMiddle,
            }}>
            <Text
              style={{
                color: theme?.colors?.textColor,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Bireysel Hesaba Geç
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => logout()}
            style={{
              paddingVertical: 10,
              marginBottom: 10,
              marginHorizontal: 10,
              borderRadius: 40,

              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme?.colors?.logoutButtonBackgroundColor,
            }}>
            <Text
              style={{
                color: theme?.colors?.logoutButtonTextColor,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              {`${language?.localization?.Logout}`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

export default ProfileScreen;
