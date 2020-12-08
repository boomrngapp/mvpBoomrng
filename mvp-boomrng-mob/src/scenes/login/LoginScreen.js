import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialSearchBarWithBackground1 from "../components/MaterialSearchBarWithBackground1";
import MaterialButtonPink from "../components/MaterialButtonPink";

function LogInScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}></View>
        <Text style={styles.email}>Email</Text>
      </View>
      <MaterialSearchBarWithBackground1
        style={styles.materialSearchBarWithBackground1}
      ></MaterialSearchBarWithBackground1>
      <Text style={styles.logIn}>Log in</Text>
      <Text style={styles.or}>or</Text>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}></View>
        <Text style={styles.password}>Password</Text>
      </View>
      <MaterialButtonPink style={styles.logInButton1}></MaterialButtonPink>
      <Text style={styles.forgetPassword}>Forget Password?</Text>
      <Image
        source={require("../assets/images/boomrng-ICON-193x220.png")}
        resizeMode="contain"
        style={styles.image4}
      ></Image>
      <View style={styles.group}>
        <View style={styles.image5Row}>
          <Image
            source={require("../assets/images/FB_Icon1.png")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
          <Image
            source={require("../assets/images/Google_2274401.png")}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
          <Image
            source={require("../assets/images/apple_104447.png")}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
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
  rect: {
    top: 0,
    left: 0,
    width: 234,
    height: 40,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    borderRadius: 15
  },
  email: {
    top: 9,
    left: 14,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 39,
    width: 154,
    fontSize: 14
  },
  rectStack: {
    width: 234,
    height: 48,
    marginTop: 434,
    marginLeft: 70
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
    marginTop: 417,
    marginLeft: -1482
  },
  logIn: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 47,
    width: 187,
    fontSize: 24,
    textAlign: "center",
    marginTop: -689,
    marginLeft: 94,
    alignSelf: "center"
  },
  or: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 47,
    width: 187,
    fontSize: 20,
    textAlign: "center",
    marginTop: 76,
    marginLeft: 91
  },
  rect1: {
    top: 0,
    left: 0,
    width: 234,
    height: 40,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    borderRadius: 15
  },
  password: {
    top: 10,
    left: 11,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    height: 39,
    width: 154,
    fontSize: 14
  },
  rect1Stack: {
    width: 234,
    height: 49,
    marginTop: 58,
    marginLeft: 70
  },
  logInButton1: {
    height: 40,
    width: 140,
    borderRadius: 10,
    marginTop: 12,
    marginLeft: 120
  },
  forgetPassword: {
    fontFamily: "roboto-regular",
    color: "rgba(2,164,233,1)",
    height: 47,
    width: 187,
    fontSize: 12,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 94
  },
  image4: {
    width: 100,
    height: 125,
    marginTop: -555,
    marginLeft: 140
  },
  group: {
    width: 200,
    height: 60,
    flexDirection: "row",
    marginTop: 92,
    marginLeft: 85
  },
  image5: {
    width: 67,
    height: 55,
    opacity: 0.6,
    marginTop: 2
  },
  image6: {
    width: 55,
    height: 55,
    opacity: 0.6,
    marginLeft: 11,
    marginTop: 2
  },
  image7: {
    width: 55,
    height: 55,
    opacity: 0.6,
    marginLeft: 16
  },
  image5Row: {
    height: 57,
    flexDirection: "row",
    flex: 1,
    marginRight: 2,
    marginLeft: -6
  }
});

export default LogInScreen;