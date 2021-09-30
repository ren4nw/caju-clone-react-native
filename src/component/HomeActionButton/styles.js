import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingVertical: 12,
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconLabel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    backgroundColor: '#6560f8',
  },
  icon: {
    color: '#fff',
    fontSize: 14,
  },
  label: {
    marginLeft: 8,
  },
  chevron: {
    color: '#6560f8',
    alignSelf: 'center',
  },
});

export default styles;
