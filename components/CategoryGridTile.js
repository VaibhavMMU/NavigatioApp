import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable style={styles.button}>
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: Platform.select({ ios: "white", android: "none" }),
    shadowColor: Platform.select({ ios: "black", android: "none" }),
    shadowRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
