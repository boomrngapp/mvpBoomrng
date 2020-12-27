//listCalender
import { StylesProvider } from "@material-ui/core";
import React from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.42;

const DATA = [
    {
        id: 1,
        dayName: 'Mon',
        date: 10/14/2020
    },
    {
        id: 2,
        dayName: 'Tue',
        date: 10/15/2020
    },
    {
        id: 3,
        dayName: 'Wed',
        date: 10/16/2020
    },
    {
        id: 4,
        dayName: 'Thu',
        date: 10/17/2020
    },
]

function ListCalendar() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={}
          ></FlatList>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'scroll'
  },
});
