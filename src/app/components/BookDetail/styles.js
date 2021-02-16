import {StyleSheet} from 'react-native';
import Colors from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.aliceBlue,
  },
  cardContainer: {
    marginHorizontal: 16,
    marginTop: 32,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 4,
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
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
    height: 108,
    width: undefined,
    aspectRatio: 1 / 1.6,
    marginRight: 24,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  bookInfo: {
    width: '72%',
  },
  title: {
    color: Colors.davisGray,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 4,
  },
  author: {
    color: Colors.davisGray,
    fontWeight: 'normal',
    fontSize: 14,
    marginBottom: 2,
  },
  availability: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
});
