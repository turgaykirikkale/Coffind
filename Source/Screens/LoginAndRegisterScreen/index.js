import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import CFTextInput from '../../Components/UI/CFTextInput';
import {loginUserControl} from '../../Utils/StoreGeneralControl/SetState';
import CFLoginAndRegisterModal from '../../Components/UI/CFLoginAndRegisterModal';
//3rd party packages
import Video from 'react-native-video';
import _ from 'lodash';

//Storage Control

import {
  getDataFromStorage,
  setDataToStorage,
  removeDataFromStorage,
} from '../../Utils/Storage';

function LoginAndRegisterScreen({navigation}) {
  const height = Dimensions.get('window').height;
  const store = useSelector(state => state);

  const [loginOrRegister, setLoginOrRegister] = useState(0);
  const [AccountType, setAccountType] = useState(0);
  const [userCredentials, setUserCredentials] = useState({
    email: null,
    name: null,
    surname: null,
    password: null,
    type: 0,
  });
  const [companyCredentials, setCompanyCredentials] = useState({
    email: null,
    companyTaxNumber: null,
    companyName: null,
    password: null,
    type: 1,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [fullScreenLoader, setFullScreenLoader] = useState(false);
  const [error, setError] = useState(false);
  const [showFirsLoadingLoader, setShowFirstLoadingLoader] = useState(true);

  useEffect(() => {
    async function fetchMyUser() {
      let inComingData = await getDataFromStorage('LoginedUser');
      const user = JSON.parse(inComingData);

      if (user) {
        if (user.type === 0) {
          loginUserControl(user);
          setTimeout(() => {
            navigation.navigate('AppStackTabNavigator');
          }, 2000);
        } else {
          loginUserControl(user);
          setTimeout(() => {
            navigation.navigate('CompanyAppStackNavigator');
          }, 2000);
        }
      } else {
        setTimeout(() => {
          setShowFirstLoadingLoader(false);
        }, 2000);
      }
    }
    fetchMyUser();
  }, []);
  const onBuffer = () => {
    console.log('ONBUFFER');
  };
  const videoError = data => {
    console.log('VIDEOERROR', data);
  };

  const controlAccountType = () => {
    setLoginOrRegister(0);
    setAccountType(AccountType === 0 ? 1 : 0);
  };

  const controlEmail = value => {
    if (AccountType === 0) {
      setUserCredentials(prevState => ({
        ...prevState,
        email: value,
      }));
    } else {
      setCompanyCredentials(prevState => ({
        ...prevState,
        email: value,
      }));
    }
  };
  const controlPassword = value => {
    if (AccountType === 0) {
      setUserCredentials(prevState => ({
        ...prevState,
        password: value,
      }));
    } else {
      setCompanyCredentials(prevState => ({
        ...prevState,
        password: value,
      }));
    }
  };

  const loginRequest = async () => {
    // let requesBody = {};
    if (AccountType === 0) {
      const DataFromStorage = await getDataFromStorage('Users');
      const users = JSON.parse(DataFromStorage);

      if (_.isNull(users)) {
        setError(true);
        setModalText(
          'User does not exist. Please register to use the application.',
        );
        setModalVisible(true);
      } else {
        const filteredUser = users.filter(
          e => e.email === userCredentials.email,
        );
        if (filteredUser.length > 0) {
          if (filteredUser[0].password !== userCredentials.password) {
            setError(true);
            setModalText(
              'Password does not match please control your password.',
            );
            setModalVisible(true);
          } else {
            setFullScreenLoader(true);
            await setDataToStorage(
              'LoginedUser',
              JSON.stringify(filteredUser[0]),
            );
            loginUserControl(filteredUser[0]);
            setTimeout(() => {
              setFullScreenLoader(false);
            }, 3000);

            navigation.navigate('AppStackTabNavigator');
          }
        } else {
          setError(true);
          setModalText(
            'User does not exist. Please register to use the application.',
          );
          setModalVisible(true);
        }
      }
    } else {
      const DataFromStorage = await getDataFromStorage('Companies');
      const companies = JSON.parse(DataFromStorage);

      if (_.isNull(companies)) {
        setError(true);
        setModalText(
          'Company does not exist. Please register to use the application.',
        );
        setModalVisible(true);
      } else {
        const filteredUser = companies.filter(
          e => e.email === companyCredentials.email,
        );
        if (filteredUser.length > 0) {
          if (filteredUser[0].password !== companyCredentials.password) {
            setError(true);
            setModalText(
              'Password does not match please control your password.',
            );
            setModalVisible(true);
          } else {
            setFullScreenLoader(true);
            await setDataToStorage(
              'LoginedCompany',
              JSON.stringify(filteredUser[0]),
            );
            loginUserControl(filteredUser[0]);
            setTimeout(() => {
              setFullScreenLoader(false);
            }, 3000);

            navigation.navigate('CompanyAppStackNavigator');
          }
        } else {
          setError(true);
          setModalText(
            'Company does not exist. Please register to use the application.',
          );
          setModalVisible(true);
        }
      }
    }
  };

  const reqisterRequest = async () => {
    if (AccountType === 0) {
      const DataFromStorage = await getDataFromStorage('Users');
      const users = JSON.parse(DataFromStorage);

      if (users !== null) {
        if (users.filter(e => e.email === userCredentials.email).length > 0) {
          setError(true);
          setModalText('User exist. Please try different e-mail.');
          setModalVisible(true);
        } else {
          users.push(userCredentials);

          await setDataToStorage('Users', JSON.stringify(users));
          setError(false);
          setModalText('You have registered succesfully. You can login.');
          setModalVisible(true);
        }
      } else {
        const userData = [];
        userData.push(userCredentials);
        await setDataToStorage('Users', JSON.stringify(userData));
        setError(false);
        setModalText('You have registered succesfully. You can login.');
        setModalVisible(true);
      }
    } else {
      console.log('ASDASDAD');
      const DataFromStorage = await getDataFromStorage('Companies');
      const companies = JSON.parse(DataFromStorage);

      if (companies !== null) {
        if (
          companies.filter(e => e.email === companyCredentials.email).length > 0
        ) {
          setError(true);
          setModalText('Company exist. Please try different e-mail.');
          setModalVisible(true);
        } else {
          companies.push(companyCredentials);

          await setDataToStorage('Companies', JSON.stringify(companies));
          setError(false);
          setModalText('You have registered succeffuly. You can login.');
          setModalVisible(true);
        }
      } else {
        const companiesData = [];
        companiesData.push(companyCredentials);
        await setDataToStorage('Companies', JSON.stringify(companiesData));
        setError(false);
        setModalText('You have registered succeffuly. You can login.');
        setModalVisible(true);
      }
    }
  };

  const buttonDisabledControl = () => {
    if (AccountType === 0) {
      if (loginOrRegister === 0) {
        if (
          _.isNull(userCredentials.email) ||
          _.isNull(userCredentials.password) ||
          _.isEmpty(userCredentials.email) ||
          _.isEmpty(userCredentials.password)
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        if (
          _.isNull(userCredentials.email) ||
          _.isNull(userCredentials.name) ||
          _.isNull(userCredentials.surname) ||
          _.isNull(userCredentials.password) ||
          _.isEmpty(userCredentials.email) ||
          _.isEmpty(userCredentials.name) ||
          _.isEmpty(userCredentials.surname) ||
          _.isEmpty(userCredentials.password)
        ) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      if (loginOrRegister === 0) {
        if (
          _.isNull(companyCredentials.email) ||
          _.isNull(companyCredentials.companyTaxNumber) ||
          _.isNull(companyCredentials.password) ||
          _.isEmpty(companyCredentials.email) ||
          _.isEmpty(companyCredentials.companyTaxNumber) ||
          _.isEmpty(companyCredentials.password)
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        if (
          _.isNull(companyCredentials.email) ||
          _.isNull(companyCredentials.companyTaxNumber) ||
          _.isNull(companyCredentials.companyName) ||
          _.isNull(companyCredentials.password) ||
          _.isEmpty(companyCredentials.email) ||
          _.isEmpty(companyCredentials.companyTaxNumber) ||
          _.isEmpty(companyCredentials.companyName) ||
          _.isEmpty(companyCredentials.password)
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <CFLoginAndRegisterModal
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(false)}
        text={modalText}
        error={error}
      />

      <Video
        repeat={true}
        source={require('../../Assets/LoginScreenBackgroundVideo/pexels-solodsha-8604822.mp4')} // Can be a URL or a local file.
        onBuffer={onBuffer} // Callback when remote video is buffering
        onError={videoError} // Callback when video cannot be loaded
        resizeMode={'cover'}
        style={{
          height: '100%',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />
      {fullScreenLoader || showFirsLoadingLoader ? (
        <View
          style={{
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
            flex: 1,
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <>
          <View
            style={{
              backgroundColor: 'rgba(52, 52, 52, 0.5)',
              paddingTop: height / 2.5,
            }}
          />
          <View
            style={{
              height: '100%',
              backgroundColor: 'rgba(52, 52, 52, 0.5)',
            }}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
              }}>
              <View style={{width: '80%', marginBottom: 2}}>
                <TouchableOpacity
                  onPress={() =>
                    setLoginOrRegister(loginOrRegister === 0 ? 1 : 0)
                  }
                  style={{
                    backgroundColor: '#872121',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    width: 100,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      marginHorizontal: 5,
                      fontWeight: '400',
                      color: 'white',
                      letterSpacing: 0.8,
                    }}>
                    {loginOrRegister === 0 ? 'Üye Ol' : 'Giriş Yap'}
                  </Text>
                </TouchableOpacity>
              </View>
              <CFTextInput
                value={
                  AccountType === 0
                    ? userCredentials.email
                    : companyCredentials.email
                }
                placeholder={'Email'}
                onChangeText={value => controlEmail(value)}
                containerStyle={{
                  borderWidth: 2,
                  borderColor: 'white',
                  width: '80%',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  marginTop: 5,
                }}
                textStyle={{
                  fontSize: 16,
                  fontWeight: '400',
                  letterSpacing: 0.8,
                  color: 'white',
                }}
              />

              {loginOrRegister === 1 && AccountType === 0 ? (
                <CFTextInput
                  value={userCredentials.name}
                  placeholder={'Adınız'}
                  onChangeText={value => {
                    setUserCredentials(prevState => ({
                      ...prevState,
                      name: value,
                    }));
                  }}
                  containerStyle={{
                    borderWidth: 2,
                    borderColor: 'white',
                    width: '80%',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                  textStyle={{
                    fontSize: 16,
                    fontWeight: '400',
                    letterSpacing: 0.8,
                    color: 'white',
                  }}
                />
              ) : null}
              {loginOrRegister === 1 && AccountType === 0 ? (
                <CFTextInput
                  value={userCredentials.surname}
                  placeholder={'Soyadınız'}
                  onChangeText={value => {
                    setUserCredentials(prevState => ({
                      ...prevState,
                      surname: value,
                    }));
                  }}
                  containerStyle={{
                    borderWidth: 2,
                    borderColor: 'white',
                    width: '80%',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                  textStyle={{
                    fontSize: 16,
                    fontWeight: '400',
                    letterSpacing: 0.8,
                    color: 'white',
                  }}
                />
              ) : null}
              {AccountType === 0 ? null : (
                <CFTextInput
                  value={companyCredentials.companyTaxNumber}
                  placeholder={'İşletme Vergi Numarası'}
                  onChangeText={value => {
                    setCompanyCredentials(prevState => ({
                      ...prevState,
                      companyTaxNumber: value,
                    }));
                  }}
                  containerStyle={{
                    borderWidth: 2,
                    borderColor: 'white',
                    width: '80%',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                  textStyle={{
                    fontSize: 16,
                    fontWeight: '400',
                    letterSpacing: 0.8,
                    color: 'white',
                  }}
                />
              )}
              {AccountType === 1 && loginOrRegister === 1 ? (
                <CFTextInput
                  value={companyCredentials.companyName}
                  placeholder={'İşletme Adı'}
                  onChangeText={value => {
                    setCompanyCredentials(prevState => ({
                      ...prevState,
                      companyName: value,
                    }));
                  }}
                  containerStyle={{
                    borderWidth: 2,
                    borderColor: 'white',
                    width: '80%',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                  textStyle={{
                    fontSize: 16,
                    fontWeight: '400',
                    letterSpacing: 0.8,
                    color: 'white',
                  }}
                />
              ) : null}
              <CFTextInput
                secureTextEntry={true}
                value={
                  AccountType === 0
                    ? userCredentials.password
                    : companyCredentials.password
                }
                placeholder={'Password'}
                onChangeText={value => controlPassword(value)}
                containerStyle={{
                  borderWidth: 2,
                  borderColor: 'white',
                  width: '80%',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  marginTop: 5,
                }}
                textStyle={{
                  fontSize: 16,
                  fontWeight: '400',
                  letterSpacing: 0.8,
                  color: 'white',
                }}
              />
              <View
                style={{
                  width: '80%',
                  borderRadius: 10,
                  flexDirection: 'row',
                  marginTop: 14,
                }}>
                <TouchableOpacity
                  disabled={buttonDisabledControl()}
                  onPress={
                    loginOrRegister === 0
                      ? () => loginRequest()
                      : () => reqisterRequest()
                  }
                  style={{
                    flex: 1,
                    paddingHorizontal: 10,
                    backgroundColor: buttonDisabledControl()
                      ? `rgb(36, 145, 81)`
                      : 'green',
                    paddingVertical: 5,
                    alignItems: 'center',
                    borderRadius: 6,
                  }}>
                  <Text
                    style={{
                      marginHorizontal: 10,
                      fontWeight: 'bold',
                      color: 'white',
                      marginVertical: 2,
                      letterSpacing: 0.8,
                    }}>
                    {loginOrRegister === 0 ? 'Giriş Yap' : 'Üye Ol'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => controlAccountType()}
              style={{
                marginTop: 20,
                borderBottomWidth: 1,
                borderBottomColor: 'white',
                paddingBottom: 2,
                alignSelf: 'center',
                alignItems: 'center',
                width: '80%',
              }}>
              <Text
                style={{color: 'white', fontWeight: '300', letterSpacing: 0.8}}>
                {AccountType === 1
                  ? 'Bireysel hesabınızla giriş yap ya da üye ol.'
                  : 'İşletme hesabınızla giriş yap ya da üye ol.'}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

export default LoginAndRegisterScreen;
