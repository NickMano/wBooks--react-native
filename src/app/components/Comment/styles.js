import {StyleSheet} from 'react-native';
import Colors from '../../../utils/colors';

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 4,
  },
  imageContainer: {
    width: '20%',
    paddingRight: 16,
  },
  commentContainer: {
    width: '80%',
  },
  bookCover: {
    width: '100%',
    aspectRatio: 1,
    height: undefined,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  comment: {
    color: Colors.davisGray,
  },
});

export default styles;
