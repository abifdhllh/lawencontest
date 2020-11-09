import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

// Styles
import styles from './Styles/LoginScreenStyle';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      usernameFlag: false,
      passwordFlag: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>LOGIN</Text>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Username</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(username) => this.setState({username})}
            placeholder={this.state.usernameFlag ? 'Username is Required' : ''}
            placeholderTextColor="red"
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.inputStyle}
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
            placeholder={this.state.passwordFlag ? 'Password is Required' : ''}
            placeholderTextColor="red"
          />
        </View>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => {
            if (!this.state.username) {
              this.setState({usernameFlag: true});
            }
            if (!this.state.password) {
              this.setState({passwordFlag: true});
            }
            if (this.state.username && this.state.password) {
              this.props.navigation.navigate('ListScreen');
            }
          }}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
