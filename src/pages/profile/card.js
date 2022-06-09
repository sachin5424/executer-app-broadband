import React from 'react';
import { Avatar, Button, Card, Title, Paragraph,View } from 'react-native-paper';
import {Text,StyleSheet} from 'react-native'
import { Chip } from 'react-native-paper';
import Form from './Form'
const MyComponent1 = () => (
    <>
       <Card style={style.cardStyle}>
      <Card.Content style={{marginTop:10}}>
        <Title style={{fontSize:18,fontWeight:"bold",color:"black",}}>Type Of Complaint</Title>
        <Chip style={{backgroundColor:"#e8aeae",width:100,color:"#fffff",}}  onPress={() => console.log('Pressed')}>
        Fiber Issue
        </Chip>
      </Card.Content>
      <Card.Content style={{flexDirection:"row",margin:0,marginRight:2}}>
      <Card.Content style={{marginTop:20}}>
        <Title style={{fontSize:15,fontWeight:"bold",color:"black",}}> 
        Available on week off
        </Title>
        <Chip style={{backgroundColor:"#e8aeae",width:50,color:"#fffff",}}  onPress={() => console.log('Pressed')}>
        Yes
        </Chip>
      </Card.Content>
      <Card.Content style={{marginTop:20}}>
        <Title style={{fontSize:15,fontWeight:"bold",color:"black",}}> 
        Leave Request
        </Title>
        <Chip style={{backgroundColor:"#e8aeae",color:"#fffff",}}  onPress={() => console.log('Pressed')}>
        Leave Request
        </Chip>
      </Card.Content>
      </Card.Content>
      <Card.Content style={{marginTop:20}}>
        <Title style={{fontSize:15,fontWeight:"bold",color:"black",}}> 
        Present address
        </Title>
        <Chip style={{backgroundColor:"#e8aeae",color:"#fffff",}}  onPress={() => console.log('Pressed')}>
        18, Vaishali Enclave, Pitampura, New Delhi- 110034
        </Chip>
      </Card.Content>
     
      <Card.Content style={{marginTop:20}}>
        <Title style={{fontSize:15,fontWeight:"bold",color:"black",}}> 
        Present address
        </Title>
        <Chip style={{backgroundColor:"#c022ac",color:"white",}}  onPress={() => console.log('Pressed')}>
        18, Vaishali Enclave, Pitampura, New Delhi- 110034
        </Chip>
      </Card.Content>
        <Form/>
    </Card>
  
    </>
 
  );

  const style = StyleSheet.create({
    cardStyle:{margin:10,borderRadius:30,backgroundColor:"#f7f7f7",shadowColor:'#470000',shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 2,
    
  }
  })
  
  export default MyComponent1;