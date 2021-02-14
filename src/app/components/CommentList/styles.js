import {StyleSheet} from 'react-native';
import Colors from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: Colors.white,
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default styles;
