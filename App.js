import React from "react"
import { View, Text, Image, TouchableOpacity, Platform, ScrollView, StyleSheet } from "react-native"

const App = () => {
  return (
    <ScrollView style={{ backgroundColor: "#323234" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#69625B" }}>
        <TouchableOpacity style={{ marginLeft: 10, marginTop: Platform.OS === "ios" ? 50 : 10, }}>
          <Image source={require("./src/images/backarrow.png")} />
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginTop: Platform.OS === "ios" ? 60 : 10, fontSize: 16, color: "white", fontWeight: "bold" }}>Driver Details</Text>
        <TouchableOpacity style={{ marginBottom: 10, marginRight: 10, marginTop: Platform.OS === "ios" ? 40 : 10, }}>
          <Image source={require("./src/images/bell.png")} />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", backgroundColor: "#262629", padding: 15, marginTop: 5 }}>
        <Image source={require("./src/images/person.jpg")} style={{ height: 50, width: 50, borderRadius: 10 }} />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 15, color: "white" }}>Muhammad Arsalan</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ justifyContent: "center" }}>
              <Image source={require("./src/images/start.png")} />
            </View>
            <Text style={{ fontSize: 15, color: "white", marginLeft: 5 }}>4.5 stars</Text>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "#323234", }}>
        <View style={{ height: 200, width: null, backgroundColor: "#69625B", marginHorizontal: 10, marginTop: 20, borderRadius: 20 }}>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ marginTop: 5, color: "white", fontSize: 14, fontWeight: "bold" }}>Trip Details</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10, borderRadius: 10, height: 50, width: 60, backgroundColor: "#262629" }}>
                <Image source={require("./src/images/radio.png")} />
              </View>
              <View style={{ justifyContent: "center", flex: 1, marginTop: 10, marginLeft: 5 }}>
                <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>Pick Up</Text>
                <Text style={{ color: "#B4B4B4", fontSize: 12 }}>115 st., Haydar Aliyev. Caspian Studio city, Dubai, United Arab Emirates</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10, borderRadius: 10, height: 50, width: 60, backgroundColor: "#262629" }}>
                <Image source={require("./src/images/location.png")} />
              </View>
              <View style={{ justifyContent: "center", flex: 1, marginTop: 10, marginLeft: 5 }}>
                <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>Drop Off</Text>
                <Text style={{ color: "#B4B4B4", fontSize: 12 }}>115 st., Haydar Aliyev. Caspian Studio city, Dubai, United Arab Emirates</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "#323234" }}>
        <View style={{ marginTop: 30, flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#0089FF", paddingHorizontal: 40, paddingVertical: 20, borderRadius: 20 }}>
            <Image
              source={require("./src/images/chat.png")} />
            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>Chat</Text>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#50D86F", paddingHorizontal: 40, paddingVertical: 20, borderRadius: 20 }}>
            <Image
              source={require("./src/images/call.png")} />
            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>Call</Text>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#F0F0F0", paddingHorizontal: 40, paddingVertical: 20, borderRadius: 20 }}>
            <Image
              source={require("./src/images/speaker.png")} />
            <Text style={{ color: "#9FA0A4", fontSize: 12, fontWeight: "bold" }}>Support</Text>
          </View>
        </View>
      </View>


      <View style={{ backgroundColor: "#323234", }}>
        <View style={{ height: 100, width: null, backgroundColor: "#69625B", marginHorizontal: 10, marginTop: 20, borderRadius: 20 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ marginTop: 10, color: "white", fontSize: 15, fontWeight: "bold" }}>Car details</Text>

            <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 10 }} />
          </View>
          <View style={{ marginTop: 10, marginHorizontal: 15, flexDirection: "row", justifyContent: "space-around" }}>
            <View>
              <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>Car Number</Text>
              <Text style={{ color: "#B4B4B4", fontSize: 11 }}>1265 DXB</Text>
            </View>

            <View>
              <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>Car Model</Text>
              <Text style={{ color: "#B4B4B4", fontSize: 11 }}>Bentaly Premier</Text>
            </View>

          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "#323234" }}>
        <View style={{ height: 100, width: null, backgroundColor: "#69625B", marginHorizontal: 10, marginTop: 20, borderRadius: 20 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ marginTop: 10, color: "white", fontSize: 15, fontWeight: "bold" }}>Payment details</Text>
            <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 10 }} />
          </View>
          <View style={{ marginTop: 10, marginHorizontal: 15, flexDirection: "row", justifyContent: "space-around" }}>
            <View>
              <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>Trip Fare</Text>
              <Text style={{ color: "#B4B4B4", fontSize: 11 }}>1000-3000 AED</Text>
            </View>
            <View>
              <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>Payment method</Text>
              <Text style={{ color: "#B4B4B4", fontSize: 11 }}>Visa **** **** 3645</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "#323234", flex: 1 }}>
        <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={{ backgroundColor: "#F7CE8E", padding: 20, borderRadius: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Share Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "#9FCECB", padding: 20, borderRadius: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Share OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  )
}

export default App