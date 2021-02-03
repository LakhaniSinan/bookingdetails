import React from 'react'
import { View, Text, SafeAreaView } from "react-native"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialIconsPayment from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

const CheckoutHeader = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "white" }}>
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 24 }}>Checkout</Text>
            </View>
         
            <View style={{ backgroundColor: "white", flexDirection: "row", marginBottom: 20, marginTop: 10 }}>

                <View>
                <View style={{borderBottomWidth:1,position:"absolute"}} />
                    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#F1F6FC", height: 50, width: 50, borderRadius: 1000 }}>
                       
                        <MaterialIcons name="local-shipping" size={20} />
                    </View>
                    <Text style={{ color: "#2185D0" }}>Shipping</Text>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default CheckoutHeader