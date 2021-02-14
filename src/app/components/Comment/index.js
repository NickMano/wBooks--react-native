import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import imgUser from '../../../assets/img_user.png';

const Comment = ({userPhoto, userName, comment}) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.bookCover} source={imgUser} />
      </View>

      <View style={styles.commentContainer}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
};

Comment.propTypes = {
  userPhoto: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Comment;
