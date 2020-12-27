import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

const DATA = [
  {
    key: "1",
    title: "Strolling",
    dimensions: "5 x 7",
    coverImage: "https://images.unsplash.com/photo-1584440947558-3dfab599ef44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1906&q=80",
    innerImage: "https://unsplash.com/photos/mJPGlOkPtl4",
  },
  {
    key: "2",
    title: "Red Framed",
    dimensions: "5 x 7",
    coverImage: "https://images.unsplash.com/photo-1607077517902-f2cdcdf71a59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    innerImage: '../../assets/images/_interior_boomrng_blank.png',
  },
  {
    key: "3",
    title: "Stamping Out",
    dimensions: "5 x 7",
    coverImage: "https://images.unsplash.com/photo-1591607138259-fe11f4bf7e6d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1952&q=80",
    innerImage: "https://unsplash.com/photos/1wzMMXKcRvM",
  },
  {
    key: "4",
    title: "Happy New Year",
    dimensions: "5 x 7",
    coverImage: "https://images.unsplash.com/photo-1578073273382-f847b29d2192?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1862&q=80",
    innerImage: "https://unsplash.com/photos/1wzMMXKcRvM",
  },
  {
    key: "5",
    title: "Blue Framed",
    dimensions: "5 x 7",
    coverImage: "https://images.unsplash.com/photo-1607077374876-706ab1630773?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    innerImage: "https://unsplash.com/photos/1wzMMXKcRvM",
  },
];

function CardList() {
  const [selectedId, setSelectedId] = useState(null);

  function CardDetail({ item, onPress }) {
    return (
      <TouchableOpacity 
        style={styles.card} 
        onPress={() => console.log('Selected ' + item.title + ' card')}
    >
        <View style={{ alignItems: "center" }}>
          <Text style={{ alignContent: "center", fontWeight: 'bold' }}>{item.title}</Text>
          <View>
            <Image
              source={{ uri: item.coverImage }}
              width={width / 2}
              height={width / 1.5}
              style={styles.innerImage}
            />
          </View>
          <Text style={styles.dims}>{item.dimensions}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <CardDetail item={item} onPress={null}></CardDetail>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Animated.FlatList
        style={{ flex: 1 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={true}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

export default CardList;

const styles = StyleSheet.create({
  card: {
    width: width *  2 / 3 ,
    height: height / 2,
    resizeMode: "contain",
    marginHorizontal: 10,
    paddingHorizontal: 30,
    borderColor: "red",
  },
  container: {
    borderColor: "black",
  },
  dims: {
      opacity: .5,
  },
  innerImage: {
    width: width / 2,
    height: width / 1.5,
    marginVertical: 12,
    borderColor: "#CA32CA",
    borderBottomWidth: 20,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    shadowColor: '#202020',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    overflow: 'visible',
    shadowRadius: 5
  },
  safe: {
    flex: 1,
  },
});
