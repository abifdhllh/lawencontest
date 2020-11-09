import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {BorderlessButton} from 'react-native-gesture-handler';

// Styles
import styles from './Styles/ListScreenStyle';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      usernameFlag: false,
      passwordFlag: false,
      data: [
        {
          name: 'Mogu-Mogu',
          quantity: 5,
          expired_date: '23 Februari 2021',
          price: 10000,
        },
        {
          name: 'Momogi',
          quantity: 6,
          expired_date: '8 Maret 2021',
          price: 2000,
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Transaction List</Text>
          <BorderlessButton>
            <Icon name="plus" size={15} color="#ffffff" />
          </BorderlessButton>
        </View>
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.listView}>
                  <View style={{flex: 2}}>
                    <View style={styles.listInsideView}>
                      <Text style={styles.listTitle}>Name</Text>
                      <Text style={styles.listDesc}>{item.name}</Text>
                    </View>
                    <View style={styles.listInsideView}>
                      <Text style={styles.listTitle}>Quantity</Text>
                      <Text style={styles.listDesc}>{item.quantity}</Text>
                    </View>
                  </View>
                  <View style={{flex: 2}}>
                    <View style={styles.listInsideView}>
                      <Text style={styles.listTitle}>Expired Date</Text>
                      <Text style={styles.listDesc}>{item.expired_date}</Text>
                    </View>
                    <View>
                      <Text style={styles.listTitle}>Price</Text>
                      <Text style={styles.listDesc}>{item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
