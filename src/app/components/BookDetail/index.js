import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import bookImage from '../../../assets/img_book1.png';
import {ButtonGradient, ButtonOutline} from '../Buttons';
import Colors from '../../../utils/colors';

const BookDetail = ({book}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.rowContainer}>
        <Image style={styles.bookCover} source={bookImage} />
        <View style={styles.bookInfo}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.availability}>Available</Text>
          <Text style={styles.author}>{book.author}</Text>
          <Text style={styles.author}>{book.year}</Text>
          <Text style={styles.author}>{book.genre}</Text>
        </View>
      </View>
      <View style={styles.columnContainer}>
        <ButtonOutline
          borderColor={Colors.blueJeans}
          text="ADD TO WISHLIST"
          textColor={Colors.blueJeans}
        />
        <ButtonGradient
          mainColor={Colors.blueJeans}
          secondColor={null}
          text="RENT"
          textColor={Colors.white}
        />
      </View>
    </View>
  );
};

BookDetail.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }),
};

BookDetail.defaultProps = {
  book: {title: '', author: ''},
};

export default BookDetail;
