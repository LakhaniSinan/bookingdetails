import React from "react"
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from "react-native"
import img from "../images/person.jpg"
// import { scaleHeight, scaleWidth } from "./Dimensions"
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { ScrollView } from "react-native-gesture-handler";

const data = [
  {
    name: "LG Washing Machine",
    seller: "Seller Name",
    stock: 'In stock',
    price: "R. 8000.00",
    image: img,
    reduced: "R. 8500.00",
  },
  {
    name: "LG Washing Machine",
    seller: "Seller Name",
    stock: 'In stock',
    price: "R. 8000.00",
    image: img,
    reduced: "R. 8500.00",
  },
  {
    name: "LG Washing Machine",
    seller: "Seller Name",
    stock: 'In stock',
    price: "R. 8000.00",
    image: img,
    reduced: "R. 8500.00",
  },
  {
    name: "LG Washing Machine",
    seller: "Seller Name",
    stock: 'In stock',
    price: "R. 8000.00",
    reduced: "R. 8500.00",
    image: img
  },
]

const AddToCart = () => {

  return (
    // <ContentForDrawer />
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 24 }}> My Cart</Text>
        </View>
        <FlatList
          data={data}
          style={{ marginTop: 20 }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            console.log(item, "ITESS");
            return (
              <View style={{ backgroundColor: "#F6F6F6", marginTop: 15 }} >
                <View style={{ marginLeft: 5, flexDirection: "row", justifyContent: "space-between", }}>
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ marginTop: 2 }}>{item.name}</Text>
                    <Text style={{ marginTop: 2 }}>{item.seller}</Text>
                    <Text style={{ color: "#009D5DDE", marginTop: 2 }}>{item.stock}</Text>
                  </View>

                  <View style={{ marginTop: 10, borderRadius: 5, paddingHorizontal: 20, paddingVertical: 10, marginRight: 20, backgroundColor: 'white' }}>
                    <Image source={item.image} style={{ height: 55, width: 43 }}

                    />
                  </View>
                  {/* <View>
                <Text>{item.price}</Text>
              </View> */}
                </View>
                <View style={{ marginLeft: 5, marginBottom: 20, flexDirection: "row", justifyContent: "space-between" }}>
                  <View>
                    <Text>{item.price}</Text>
                    <Text style={{ color: "#B12A00DE", textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 12 }}>
                      {item.reduced}</Text>
                  </View>
                  <View style={styles.dropDownStyle}>
                    <Text>1</Text>
                    <AntDesign name="caretdown" size={8} />
                  </View>
                </View>
                {/* <View style={{ paddingVertical: 10, flexDirection: "row", justifyContent: "space-around", borderTopWidth: 0.5, borderTopColor: "#a9a9a9" }}> */}

                <View style={styles.container}>
                  <TouchableOpacity style={{ ...styles.addRemoveStyle, borderRightWidth: 1 }}>
                    <FontAwesome name="heart-o" size={13} style={{marginRight:2}} />
                    <Text>Add To Wishlist</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.addRemoveStyle}>
                    <Image source={require("../images/delete.png")} />
                    <Text>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        />
        <View style={{ backgroundColor: "#F1F6FC", marginTop: 20, }}>
          <View style={styles.placeOrderStyles}>
            <Text>
              R. 22,500.00
          </Text>
            <TouchableOpacity style={styles.placeOrderButtonStyle}>
              <Text style={{ color: "white" }}>Place Order</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 10, borderBottomWidth: 0.4, borderBottomColor: "#C6CCC8" }}>
            <View style={styles.afterPlaceOrderStyles}>
              <Text>Items Subtotal</Text>
              <Text>24,000</Text>
            </View>
            <View style={styles.afterPlaceOrderStyles}>
              <Text>Coupon</Text>
              <Text>0</Text>
            </View>
            <View style={{ ...styles.afterPlaceOrderStyles, marginBottom: 10 }}>
              <Text>Your Saving</Text>
              <Text>1500</Text>
            </View>
          </View>
          <View style={{ marginTop: 20, marginBottom: 20, flexDirection: "row", justifyContent: "space-around" }}>
            <Text>Total</Text>
            <Text>22,500</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = {
  dropDownStyle: {
    width: 50,
    paddingHorizontal: 3,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DEDEDF",
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 3
  },
  addRemoveStyle: {

    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#a9a9a9",

  },
  buttonContainer: {
    flex: 1,
  },
  afterPlaceOrderStyles: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },
  placeOrderStyles: {
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10
  },
  placeOrderButtonStyle: {
    backgroundColor: "#558ED4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  }
}

export default AddToCart