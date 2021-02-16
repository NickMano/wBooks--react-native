import React, {useState} from 'react';
import {View, FlatList, Button} from 'react-native';
import Comment from '../Comment';
import styles from './styles';

const CommentList = () => {
  const commentStruct = {
    userPhoto: '',
    userName: 'John Appleseed',
    comment:
      "It was greet to see you again earlier. Let's definitely get that coffee.",
  };

  const [comments, setComments] = useState([
    commentStruct,
    commentStruct,
    commentStruct,
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <Comment
            userPhoto={item.userPhoto}
            userName={item.userName}
            comment={item.comment}
          />
        )}
        keyExtractor={(item) =>
          Math.floor(Math.random() * (999999 - 0) + 0).toString()
        }
      />
      <Button title="View All" />
    </View>
  );
};

export default CommentList;
