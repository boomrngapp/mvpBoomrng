import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Auth } from "aws-amplify";

function HomeScreen({ updateAuthState, navigation }) {
  async function signOut() {
    try {
      await Auth.signOut();
      updateAuthState("loggedOut");
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row-reverse", alignItems: "flex-start" }}>
        <Button title="Sign Out" color="#02ADED" onPress={signOut} />
      </View>
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <Text>Highlight area</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center'}}>
          <Text>Browse area</Text>
          <Button
            title="Browse"
            onPress={() => navigation.navigate("BrowseCards")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
});

export default HomeScreen;
