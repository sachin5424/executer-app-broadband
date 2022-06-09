import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {CustomButton, CustomTextInput} from '../../components';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
// import axiosBaseUrl from '../../baseUrl/AxsiosBaseUrl';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USERTOKEN} from '../../redux/UserSlice';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {COLORS, Images} from '../../constant';
import {CustomHeader, CustomStatusBar, GetLogo} from '../../partials';
import Entypo from 'react-native-vector-icons/Entypo';
import {FONT_BACK_LABEL, height, width} from '../../constant/COLORS';
import Styles from '../../Style/Styles';
import {api_url, getError, _httpPostRequest} from '../../../master.service';

const Login = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const loginAccount = () => {
    setLoading(true);
    // alert("Create Account")
    let loginDetail = {
      phone,
      password: password,
    };
    _httpPostRequest(api_url.login, loginDetail)
      .then(async res => {
        setLoading(false);
        console.log('Sucess>>>>>>', res);
        await AsyncStorage.setItem('userToken', res?.token);
        dispatch(USERTOKEN({userToken: res?.token}));
      })
      .catch(err => {
        setLoading(false);
        console.log('Erroir ', err);
        getError(err, 'Login');
      });
  };

  const forget = () => {
    // Alert.alert('Forget Password');
    navigation.navigate('forget');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.purple}}>
      <CustomStatusBar bgColor={COLORS.purple} content={'light-content'} />
      <ScrollView
        style={{flex: 1, backgroundColor: COLORS.purple}}
        contentContainerStyle={{justifyContent: 'space-between'}}>
        {/* <CustomHeader
          title={' '}
          showBackButton={false}
          backHandler={() => navigation?.goBack()}
          BackIcon={Images.backIcon}
          showCartButton={false}
          // cartNavigation={() => navigation?.navigate('Checkout')}
          textStying={{color: COLORS.pink}}
          containerStyle={{marginTop: height * 0.03}}
        /> */}
        <View style={{flex: 1}}>
          <View
            style={{
              // backgroundColor: COLORS.purple,
              flex: 1,
              width: width,
              alignItems: 'center',
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <GetLogo marginTop={height * 0.12} />

              <Text
                style={{
                  color: '#fff',
                  fontWeight: '700',
                  justifyContent: 'center',
                  borderWidth: 0,
                  textAlign: 'center',
                  marginTop: height * 0.03,
                  fontSize: FONT_BACK_LABEL + 4,
                }}>
                Login
              </Text>

              <View
                style={{
                  width: '100%',
                  marginTop: height * 0.03,
                  // marginBottom: 3,
                  flex: 1,
                }}>
                <CustomTextInput
                  placeholder={'Phone'}
                  value={phone}
                  valueSetter={setPhone}
                  haveImage={false}
                  placeHolderColor={COLORS.white}
                  containerStyles={Styles.feildStyle}
                  imageUrl={Images.phoneIcon}
                  imageStyling={{width: 20, aspectRatio: 1, tintColor: 'blue'}}
                />

                <CustomTextInput
                  placeholder={'Paswword'}
                  value={password}
                  valueSetter={setPassword}
                  inputStyling={{flex: 1, width: '100%'}}
                  secure={showPassword}
                  placeHolderColor={COLORS.white}
                  setSecure={setShowPassword}
                  passwordField={true}
                  containerStyles={Styles.feildStyle}
                />
              </View>

              {/* <View style={{marginLeft: 40, width: '100%', marginTop: 10}}> */}
              <CustomButton
                title={'Login'}
                containerStyles={Styles.loginButton}
                eventHandler={() => loginAccount()}
                loading={loading}
              />
              <View style={{width,height: height*0.03}}/>
              {/* </View> */}

              {/* <TouchableOpacity
                onPress={forget}
                style={{marginTop: 20, justifyContent: 'center'}}>
                <Text style={styles.urlTextStyle}>Forget Password</Text>
              </TouchableOpacity> */}
            </View>
          </View>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('newConnection')}
            style={Styles.newConnectionContainer}>
            <Text style={Styles.newConnection}>Get a new Connection</Text>
            <Entypo
              name="chevron-thin-down"
              style={{color: COLORS.white, fontSize: FONT_BACK_LABEL - 2}}
            />
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  urlTextStyle: {
    color: COLORS.white,
    textAlign: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.white,
    fontWeight: '700',
    paddingBottom: 0.6,
  },
});
