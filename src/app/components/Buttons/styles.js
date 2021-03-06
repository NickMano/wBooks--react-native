import {StyleSheet} from 'react-native';

const styles = (textColor, borderColor) =>
  StyleSheet.create({
    textButton: {
      fontWeight: '900',
      textAlign: 'center',
      fontSize: 16,
      color: textColor,
    },
    button: {
      width: '100%',
      paddingVertical: 12,
      borderRadius: 40,
      marginVertical: 6,
    },
    buttonOutline: {
      borderColor: borderColor,
      borderWidth: 1.6,
    },
  });

export default styles;
