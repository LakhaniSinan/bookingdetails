import React from "react"
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from "react-native"
import AddToCart from "./src/components/AddToCart"
import Sponsered from "./src/components/Sponsered"
import SavedAddress from "./src/components/SavedAddress"

const App = () => {
  // return <AddToCart/>
  // return <Sponsered />
  return <SavedAddress />
}

export default App