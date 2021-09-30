import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  iconContainer: {
    alignSelf: 'center',
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    backgroundColor: 'red',
  },
  extractDetails: {
    flex: 1,
    paddingHorizontal: 12,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
