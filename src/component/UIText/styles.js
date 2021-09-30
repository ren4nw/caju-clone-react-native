import { StyleSheet } from "react-native";

export const colors = StyleSheet.create({
  black: {
    color: '#000',
  },
  gray: {
    color: '#bdbdbd',
  },
  mediumgray: {
    color: '#858585',
  },
  white: {
    color: '#fff',
  },
});

export const weight = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  normal: {
    fontWeight: 'normal',
  },
});

export const transform = StyleSheet.create({
  uppercase: {
    textTransform: 'uppercase',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  none: {
    textTransform: 'none',
  },
});

export const sizes = StyleSheet.create({
  small: {
    fontSize: 12,
  },
  label: {
    fontSize: 14,
  },
  medium: {
    fontSize: 16,
  },
  title: {
    fontSize: 28,
  },
});

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 22,
  },
});

export default styles;
