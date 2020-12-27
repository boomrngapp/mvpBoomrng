import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Auth } from "aws-amplify";
import { TouchableOpacity } from "react-native-gesture-handler";
import CardList from "../../components/molecules/CardList";

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
        <View style={{ flex: 2, alignItems: 'center' }}>
          <CardList></CardList>
        </View>
        <View style={{ flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate("BrowseCards")}
          >
          <Text>Browse area</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AppDrawer")}
          >
          <Text>Account</Text>
          </TouchableOpacity>
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
