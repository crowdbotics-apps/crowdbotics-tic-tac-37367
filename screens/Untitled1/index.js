import { Text } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = () => {
  return <View style={_styles.tThhAQye}>
      <Text style={_styles.SVNYlGnq}>It's player X's turn.</Text><Text style={_styles.gHtSVJNP}>It's player Y's turn.</Text></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  tThhAQye: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  SVNYlGnq: {
    left: 104,
    top: 12,
    position: "absolute",
    width: 150,
    height: 22,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    textAlign: "center",
    fontFamily: "Lato",
    color: "#bd25ff"
  },
  gHtSVJNP: {
    left: 104,
    top: 44,
    position: "absolute",
    width: 150,
    height: 22,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    textAlign: "center",
    fontFamily: "Lato",
    color: "#faa365"
  }
});