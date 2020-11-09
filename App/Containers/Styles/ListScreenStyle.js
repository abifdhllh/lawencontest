import {StyleSheet} from 'react-native';
import {ApplicationStyles} from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  headerView: {
    height: 50,
    backgroundColor: '#4d91ff',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  listView: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    padding: 15,
  },
  listInsideView: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  listTitle: {
    color: '#4d91ff',
    fontSize: 16,
    marginBottom: 5,
  },
  listDesc: {
    fontSize: 15,
  }
});
