import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {FONT_BACK_LABEL, width} from '../../constant/COLORS';
import {COLORS, Images} from '../../constant';
import Context from '../../Context/Context';

const ComplaintCard = ({data, type}) => {
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const {AcceptComplaint, SolveComplaint} = Context();

  useEffect(() => {
    let dataTime = moment(data?.compliantCreateTime)
      .add(data?.compliantResolveTimeSec || 0, 'seconds')
      .format('llll');
    setTime(dataTime);
    let profileName = data?.user?.address;
    const address =
      profileName?.houseNo +
      ',' +
      profileName?.state +
      ', ' +
      profileName?.city +
      ', ' +
      profileName?.landmark +
      ', ' +
      profileName?.locality +
      ', ' +
      profileName?.pincode;
    setAddress(address);
    // return () => {
    // }
  }, []);

  // console.log({id: data?._id});

  return (
    <Card style={style.cardStyle}>
      <Card.Content>
        <Text style={{fontSize: FONT_BACK_LABEL, color: COLORS.white}}>
          Complaint
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: FONT_BACK_LABEL - 3,
          }}>{`Time: ${time}`}</Text>
        {/* <Text>Type Of Complaint</Text> */}
      </Card.Content>
      <Card.Content style={{marginTop: 10}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: FONT_BACK_LABEL,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Type Of Complaint
            </Text>
            <Text
              style={{
                fontSize: FONT_BACK_LABEL - 2,
                fontWeight: 'bold',
                color: COLORS.white,
                backgroundColor: COLORS.lightPurple,
                borderRadius: 30,
                paddingHorizontal: 13,
                paddingVertical: 5,
                minWidth: '35%',
                textAlign: 'center',
              }}>
              {data?.type}
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/Group83242x.png')}
              style={{width: 100, height: 100}}
              resizeMode={'center'}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: COLORS.white,
                fontSize: 18,
              }}>
              {data?.user?.username || 'Username'}
            </Text>
          </View>
        </View>
      </Card.Content>
      <Card.Content style={{margin: 0, marginTop: -25}}>
        <Text
          style={{
            fontSize: FONT_BACK_LABEL,
            fontWeight: 'bold',
            color: COLORS.white,
          }}>
          Complaint Location
        </Text>
      </Card.Content>
      <Card.Content
        style={{
          margin: 5,
          backgroundColor: COLORS.lightPurple,
          borderRadius: 18,
          width: '95%',
        }}>
        <Title
          style={{
            fontSize: FONT_BACK_LABEL - 2,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {' '}
          {address}
        </Title>
      </Card.Content>
      <Card.Actions
        style={{
          marginBottom: 20,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        {type == 'new' ? (
          <Button
            onPress={() => {
              AcceptComplaint(data?._id);
            }}
            color={COLORS.white}
            style={{
              backgroundColor: COLORS.creamPink,
              width: 150,
              marginHorizontal: 10,
              borderRadius: 30,
            }}>
            Accept
          </Button>
        ) : (
          <></>
        )}
        {type == 'accept' ? (
          <Button
            onPress={() => {
              SolveComplaint(data?._id);
            }}
            color={COLORS.white}
            style={{
              backgroundColor: COLORS.creamPink,
              width: 150,
              marginHorizontal: 10,
              borderRadius: 30,
            }}>
            Solve
          </Button>
        ) : (
          <></>
        )}
        {/* <Button
          color={COLORS.white}
          onPress={() => {}}
          style={{
            backgroundColor: COLORS.creamPink,
            width: 150,
            marginLeft: 10,
            borderRadius: 30,
          }}>
          Reject
        </Button> */}
      </Card.Actions>
    </Card>
  );
};

export default ComplaintCard;

const style = StyleSheet.create({
  cardStyle: {
    width: width * 0.95,
    paddingHorizontal: width * 0.03,
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
