import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingVertical: 12,
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    backgroundColor: '#6560f8',
  },
  labelIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
  },
  icon: {
    fontSize: 14,
    color: '#fff',
  },
  chevron: {
    alignSelf: 'center',
    color: '#6560f8',
  },
});

export default styles;
