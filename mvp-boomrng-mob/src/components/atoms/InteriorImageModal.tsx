import React, { useState } from "react";
import { Modal, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    image: "../../assets/images/_interior_boomrng_blank.png",
  },
];

function InteriorImageModal({ source }) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <SafeAreaView>
      <View style={styles.modal}>
        <Modal
          style={styles.container}
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          presentationStyle="overFullScreen"
        >
          <View>
            <Image source={source}></Image>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
  }
});
export default InteriorImageModal;
