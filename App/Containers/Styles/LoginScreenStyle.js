import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: '#4d91ff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
  },
  inputView: {
    marginBottom: 30,
    width: '70%'
  },
  inputTitle: {
    fontSize: 14,
    color: 'white',
  },
  inputStyle: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  buttonView: {
    backgroundColor: 'white',
    width: '70%',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#4d91ff',
    fontSize: 15,
    fontWeight: 'bold'
  }
})
