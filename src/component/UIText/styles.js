import { StyleSheet } from "react-native";

export const colors = StyleSheet.create({
  black: {
    color: '#000',
  },
  white: {
    color: '#fff',
  },
  mediumgray: {
    color: '#858585',
  },
  gray: {
    color: '#bdbdbd',
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

export const transform = StyleSheet.create({
  none: {
    textTransform: 'none',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
});

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 22,
    color: '#fff',
  },
});

export default styles;
