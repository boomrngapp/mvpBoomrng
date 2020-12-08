import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialSearchBarWithBackground1 from "../components/MaterialSearchBarWithBackground1";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialSearchBarWithBackground1
        style={styles.materialSearchBarWithBackground1}
      ></MaterialSearchBarWithBackground1>
      <FeatherIcon name="search" style={styles.icon1}></FeatherIcon>
      <View style={styles.rectStack}>
        <View style={styles.rect}></View>
        <Text style={styles.browseCards1}>
          End Sun, Nov 29 |. Code FREECARDS
        </Text>
        <Text style={styles.browseCards2}>
          10 FREE CARDS (20 FREE ON ORDERS OF 100+)
        </Text>
        <View style={styles.rect1}></View>
      </View>
      <View style={styles.group}>
        <View style={styles.icon2Row}>
          <EntypoIcon name="home" style={styles.icon2}></EntypoIcon>
          <IoniconsIcon
            name="md-cloud-upload"
            style={styles.icon7}
          ></IoniconsIcon>
          <FontAwesomeIcon name="plus" style={styles.icon10}></FontAwesomeIcon>
          <MaterialCommunityIconsIcon
            name="account"
            style={styles.icon8}
          ></MaterialCommunityIconsIcon>
          <FontAwesomeIcon
            name="shopping-cart"
            style={styles.icon9}
          ></FontAwesomeIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  materialSearchBarWithBackground1: {
    height: 54,
    width: 330,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 85,
    backgroundColor: "rgba(155,155,155,0.14)",
    marginTop: 899,
    marginLeft: -1482
  },
  icon1: {
    color: "rgba(74,74,74,1)",
    fontSize: 25,
    height: 30,
    width: 26,
    marginTop: -893,
    marginLeft: 315
  },
  rect: {
    top: 51,
    left: 0,
    width: 375,
    height: 385,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  browseCards1: {
    top: 28,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 28,
    width: 345,
    fontSize: 12,
    textAlign: "center",
    left: 15
  },
  browseCards2: {
    top: 11,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    height: 28,
    width: 345,
    fontSize: 12,
    textAlign: "center",
    left: 15
  },
  rect1: {
    top: 0,
    left: 0,
    width: 375,
    height: 51,
    position: "absolute",
    backgroundColor: "rgba(155,155,155,0.05)"
  },
  rectStack: {
    width: 375,
    height: 436,
    marginTop: 16
  },
  group: {
    width: 315,
    height: 40,
    flexDirection: "row",
    marginTop: 193,
    marginLeft: 30
  },
  icon2: {
    color: "rgba(155,155,155,1)",
    fontSize: 30,
    marginTop: 1
  },
  icon7: {
    color: "rgba(155,155,155,1)",
    fontSize: 35,
    marginLeft: 35
  },
  icon10: {
    color: "rgba(155,155,155,1)",
    fontSize: 35,
    marginLeft: 48,
    marginTop: 3
  },
  icon8: {
    color: "rgba(155,155,155,1)",
    fontSize: 35,
    marginLeft: 46,
    marginTop: 1
  },
  icon9: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    marginLeft: 32,
    marginTop: 3
  },
  icon2Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  }
});

export default HomeScreen;