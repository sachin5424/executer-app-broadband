import React, { useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS, Images} from '../../constant';
import {width, height} from '../../constant/COLORS';
import {selectProfile, USERTOKEN} from '../../redux/UserSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from '../../Context/Context';

export default function Index({navigation}) {
  const profileName = useSelector(selectProfile);
  const {ProfileApi} = Context();
  const dispatch = useDispatch();
  // console.log({profileName});

  useEffect(() => {
    if (!profileName?.username) {
      ProfileApi();
    }
  }, []);

  const Logout = async () => {
    await AsyncStorage.removeItem('userToken');
    dispatch(USERTOKEN({userToken: null}));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.purple}}>
      <ScrollView style={{backgroundColor: COLORS.purple}}>
        <View
          style={{flexDirection: 'row', paddingTop: 20, alignItems: 'center'}}>
          <View
            style={{
              paddingHorizontal: 20,
              alignItems: 'center',
              width: width * 0.95,
              //   alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}>
            <View
              style={{
                paddingLeft: 0,
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
                // backgroundColor: 'blue',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}>
                <View style={{marginLeft: 2, alignItems: 'center'}}>
                  <Image
                    source={Images.userProfile}
                    style={{width: 100, height: 100, borderRadius: 30}}
                    resizeMode="contain"
                  />

                  {/* <Avatar.Image
          size={94}
          source={{uri: 'https://picsum.photos/200/300'}}
        /> */}
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 23,
                      // padding: 10,
                      color: COLORS.white,
                    }}>
                    Vaccinated
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={{flex: 1, alignItems: 'center', marginBottom: 45}}>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: 'bold',
                    color: COLORS.white,
                  }}>
                  {profileName?.username || 'userName'}
                </Text>
              </View>
              {/* <Text style={{fontSize:23,fontWeight:"bold"}}>Shanaya</Text> */}
            </View>
          </View>
        </View>

        {/* CONTENT */}
        <View
          style={[
            styles.shadow,
            {
              paddingVertical: 20,
              paddingLeft: 40,
              backgroundColor: COLORS.lightPurple,
              marginBottom: 10,
              width: width * 0.93,
              minHeight: height * 0.75,
              marginTop: height * 0.04,
              alignSelf: 'center',
              borderRadius: 20,
              // flex: 1
            },
          ]}>
          <View
            style={{
              marginLeft: 0,
              flexDirection: 'row',
              borderWidth: 0,
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Image
              source={require('../../../assets/broadban.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Text
              style={{
                marginLeft: 20,
                textAlign: 'center',
                color: COLORS.white,
              }}>
              Better Network
            </Text>
          </View>

          <View
            style={{
              marginLeft: 0,
              flexDirection: 'row',
              borderWidth: 0,
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Image
              source={require('../../../assets/profile_name.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Text
              style={{
                marginLeft: 20,
                textAlign: 'center',
                color: COLORS.white,
              }}>
              {profileName?.username || "user"}
            </Text>
          </View>

          <View
            style={{
              marginLeft: 0,
              flexDirection: 'row',
              borderWidth: 0,
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Image
              source={require('../../../assets/id_icon.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Text
              style={{
                marginLeft: 20,
                textAlign: 'center',
                color: COLORS.white,
              }}>
              {profileName?._id || "id"}
            </Text>
          </View>

          <View
            style={{
              marginLeft: 0,
              flexDirection: 'row',
              borderWidth: 0,
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Image
              source={require('../../../assets/contact_icon.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Text
              style={{
                marginLeft: 20,
                textAlign: 'center',
                color: COLORS.white,
              }}>
              {profileName?.phone || "phone"}
            </Text>
          </View>

          <View
            style={{
              marginLeft: 0,
              flexDirection: 'row',
              borderWidth: 0,
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Image
              source={require('../../../assets/internet_info.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Text
              style={{
                marginLeft: 20,
                textAlign: 'center',
                color: COLORS.white,
              }}>
              {profileName?.email || "email"}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Logout();
            }}
            style={{
              flexDirection: 'row',
              borderWidth: 0,
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 5,
            }}>
            <Entypo
              name="log-out"
              style={{fontSize: 27, color: COLORS.purple}}
            />
            {/* <Image
                  source={require('../../../assets/location.png')}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                /> */}
            <Text
              style={{
                marginLeft: 20,
                textAlign: 'center',
                color: COLORS.white,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View>
          <CardScreen />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 4,
  },
  downBox: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    padding: 20,
    justifyContent: 'flex-start',
    marginVertical: 10,
    width: width * 0.93,
    borderRadius: 10,
    alignItems: 'center',
  },
});
