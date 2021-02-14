import {StyleSheet} from 'react-native';
import Colors from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 6,
    paddingHorizontal: 8,
    paddingVertical: 16,
    height: 92,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  bookCover: {
    resizeMode: 'contain',
    height: 64,
    width: undefined,
    aspectRatio: 1,
    marginHorizontal: 8,
  },
  rowContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '70%',
    height: '100%',
  },
  title: {
    color: Colors.davisGray,
    fontWeight: 'bold',
    fontSize: 16,
  },
  author: {
    color: Colors.davisGray,
    fontWeight: 'normal',
    fontSize: 14,
  },
});
