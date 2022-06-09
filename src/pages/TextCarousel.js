import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'New Complaints',
          text: 'Text 1',
        },
        {
          title: 'Accepted Complaints',
          text: 'Text 2',
        },
        {
          title: 'Completed Complaints',
          text: 'Text 3',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: '#e8aeae',
          borderRadius: 15,
          height: 40,
          padding: 10,
          margin: 10,
          marginLeft: 25,
          marginRight: 15,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, paddingTop: 50}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={210}
            itemWidth={260}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
      </SafeAreaView>
    );
  }
}
