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
      <View style={styles.container}>
        <View style={styles.featuredContainer}>
          <CardList></CardList>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}
        >
        <Text
          style={{
            fontWeight: "bold",
            marginHorizontal: 18,
            marginTop: 10,
            textAlign: "left",
            color: 'blue',
            opacity: 0.6
          }}
          >
          Create Your Card
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            borderColor: "grey",
            opacity: 0.6,
            borderWidth: 1.5,
            borderRadius: 1.5,
            marginHorizontal: 18,
            marginVertical: 4,
          }}
        ><View style={{ 
          flex: 3, 
          alignItems: 'center', 
          justifyContent: 'center'}}>
          <TouchableOpacity 
            style={{
                borderRadius: 8,
                borderWidth: 3,
                width: 50,
                height: 50,
                opacity: 0.3,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onPress={() => navigation.navigate("Add")} 
          >
            <Text style={{ 
              borderRadius: 20, 
              borderWidth: 2,
              width: 30,
              height: 30,
              borderColor: 'grey',
              fontSize: 19,
              textAlign: 'center',
              textAlignVertical: 'center'
            }}
            >+</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 6, padding: 8,}}>
          <Text style={{ fontSize: 12, color: "grey", textAlign: 'center' }}>
            Create your design or pick a designer card and customize your
            message, or upload your already designed card to have them printed,
            address, and mailed for you!
          </Text>
        </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("BrowseCards")}>
          <Text>Browse area</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AppDrawer")}>
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
          <View style={{ flexDirection: "row-reverse", alignItems: "flex-start" }}>
            <Button title="Sign Out" color="#02ADED" onPress={signOut} />
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
  featuredContainer: {
    flex: 3,
    backgroundColor: "#CCCCCC",
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
