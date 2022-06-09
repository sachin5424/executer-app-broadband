import * as React from 'react';
import {Avatar, Button, Card, Title, Text, Paragraph} from 'react-native-paper';
import {ImageBackground, Image, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS, Images} from '../../constant';
import {selectProfile} from '../../redux/UserSlice';
import {useSelector} from 'react-redux';

const TestScreen = () => {
  return (
    <>
      <View>
        <DrawerItemList
          style={{backgroundColor: 'white', padding: 10, marginTop: 23}}
          {...props}
        />
      </View>
    </>
  );
};
const CustomDrawer = props => {
  const profileData = useSelector(selectProfile);
  return (
    <DrawerContentScrollView style={{backgroundColor: COLORS.purple}}>
      <ImageBackground style={{padding: 17, opacity: 2, backgroundColor: ''}}>
        <View style={{marginLeft: 2, width: 100, alignItems: 'center'}}>
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
            {profileData?.username || 'user'}
          </Text>
        </View>
      </ImageBackground>
      <DrawerItemList
        style={{
          backgroundColor: 'white',
          padding: 10,
          marginTop: 23,
          color: COLORS.white,
        }}
        {...props}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
