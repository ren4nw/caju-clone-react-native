import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
    backgroundColor: 'red',
  },
  extractDetails: {
    flex: 1,
    marginHorizontal: 12,
  },
  icon: {
    color: '#fff',
  },
});

export default styles;
