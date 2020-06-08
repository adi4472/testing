import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));
  console.log("App Executed");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: "100%", height: "30%" }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
