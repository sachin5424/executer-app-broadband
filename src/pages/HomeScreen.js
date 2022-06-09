import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {COLORS, Images} from '../constant';
import {FONT_BACK_LABEL, width} from '../constant/COLORS';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewComplaints from './Complaints/NewComplaints';
import TabBar from '../Navigation/TabBar';
import Context from '../Context/Context';
import AcceptComplainScreen from './Complaints/AcceptComplainScreen';
import { useSelector } from 'react-redux';
import { selectProfile } from '../redux/UserSlice';
import SolveComlaintScreen from './Complaints/SolveComlaintScreen';
import { CustomStatusBar } from '../partials';

export default function HomeScreen({navigation}) {
  const {GetNewComplaintApi, GetAcceptComplaintApi, GetSolveComplaintApi} = Context();
  const profileData = useSelector(selectProfile)

  useEffect(() => {
    GetNewComplaintApi();
    GetAcceptComplaintApi();
    GetSolveComplaintApi();
  }, []);

  const Tab = createMaterialTopTabNavigator();
  //   console.log({navigation});
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.purple}}>
      <CustomStatusBar bgColor={COLORS.purple} content={'light-content'} />
      <View style={{backgroundColor: COLORS.purple}}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          {/* header */}
          <View
            style={{
              width: width * 0.9,
              //   height: 90,
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 30
            }}>
            <View style={{borderRadius: 30, width: 50, height: 50, marginRight: 19}}>
              <Image
                source={Images.userProfile}
                style={{width: 50, height: 50}}
                resizeMode="cover"
              />
            </View>
            <View style={{}}>
              <Text style={{fontSize: FONT_BACK_LABEL+3, color: COLORS.white}}>Welcome </Text>
              <Text
                style={{fontSize: FONT_BACK_LABEL, fontWeight: 'bold', color: COLORS.white, marginLeft: 5}}>
                {profileData?.username || "User"}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            width: width * 0.9,
            alignSelf: 'center',
            // paddingLeft: 19,
            paddingTop: 10,
            flexDirection: 'row',
            // backgroundColor: COLORS.black,
            alignItems: 'center',
          }}>
          <Text style={{color: COLORS.white, fontSize: FONT_BACK_LABEL + 5}}>
            We have
          </Text>
          <Text
            style={{
              fontSize: FONT_BACK_LABEL + 5,
              fontWeight: 'bold',
              // marginLeft: 2,
              color: COLORS.white,
            }}>
            {' Awesome'}
          </Text>
        </View>
        <View style={{width: width * 0.9, alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: FONT_BACK_LABEL + 6,
              color: COLORS.white,
              //   paddingLeft: 28,
              letterSpacing: 2,
              paddingTop: 2,
            }}>
            Opportunities
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Tab.Navigator
          initialRouteName="New Components"
          tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name="New Components" component={NewComplaints} />
          <Tab.Screen
            name="Accepted Complaints"
            component={AcceptComplainScreen}
          />
          <Tab.Screen name="Complete Complaints" component={SolveComlaintScreen} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}
