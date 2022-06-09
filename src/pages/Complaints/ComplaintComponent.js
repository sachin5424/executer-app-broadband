import React, {useEffect, useState} from 'react';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  View,
  Image,
} from 'react-native-paper';
import {Text, StyleSheet} from 'react-native';
import {width} from '../../constant/COLORS';
import {COLORS, Images} from '../../constant';

const ComplaintComponent = () => {
  return (
    <Card style={style.cardStyle}>
      <Card.Content>
        <Title style={{fontSize: 21, color: COLORS.white}}>Complaint</Title>
        <Paragraph style={{color: COLORS.white}}>{'time'}</Paragraph>
        {/* <Text>Type Of Complaint</Text> */}
      </Card.Content>
      <Card.Content style={{marginTop: 10}}>
        {/* <Avatar.Image
          size={106}
          style={{marginLeft: 235, bottom: 2, position: 'absolute'}}
          source={}
        /> */}
        <Image
          source={Images.userProfile}
          style={{width: width * 0.04, aspectRation: 1}}
          resizeMode={'center'}
        />
        <Title
          style={{
            marginLeft: 245,
            top: 74,
            fontWeight: 'bold',
            color: COLORS.white,
            fontSize: 18,
            position: 'absolute',
          }}>
          Complaint
        </Title>
        <Title style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>
          Type Of Complaint
        </Title>
        <Card.Content
          style={{
            margin: 0,
            width: 140,
            marginTop: 5,
            backgroundColor: COLORS.lightPurple,
            borderRadius: 10,
          }}>
          <Title style={{fontSize: 11, fontWeight: 'bold', color: 'white'}}>
            {' '}
            Fiber Issue Fold
          </Title>
        </Card.Content>
      </Card.Content>
      <Card.Content style={{margin: 0, marginTop: 20}}>
        <Title style={{fontSize: 17, fontWeight: 'bold', color: COLORS.white}}>
          Complaint Location
        </Title>
      </Card.Content>
      <Card.Content
        style={{
          margin: 20,
          backgroundColor: COLORS.lightPurple,
          borderRadius: 10,
        }}>
        <Title style={{fontSize: 11, fontWeight: 'bold', color: 'white'}}>
          {' '}
          18, Vaishali Enclave, Pitampura, New Delhi- 110034
        </Title>
      </Card.Content>
      <Card.Actions style={{marginBottom: 20}}>
        <Button
          style={{
            backgroundColor: COLORS.creamPink,
            color: COLORS.white,
            width: 150,
            marginLeft: 10,
            borderRadius: 30,
          }}>
          Accept
        </Button>
        <Button
          style={{
            backgroundColor: COLORS.creamPink,
            color: COLORS.white,
            width: 150,
            marginLeft: 10,
            borderRadius: 30,
          }}>
          Reject
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default ComplaintComponent;

const style = StyleSheet.create({
  cardStyle: {
    width: width * 0.95,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 30,
    backgroundColor: '#432B79',
    shadowColor: '#470000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
});
