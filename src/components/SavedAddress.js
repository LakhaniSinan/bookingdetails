import React from "react"
import { View, Text, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity } from "react-native"
import CheckoutHeader from "./CheckoutHeader"

const data = [
    {
        heading: "Address 1",
        address1: "H No 0192",
        address2: "Lorem ipsum",
        address3: "AB ADBHAD HOWF ADASDASD",
        address4: "ADHDA  DS"
    },
    {
        heading: "Address 2",
        address1: "H No 0192",
        address2: "Lorem ipsum",
        address3: "AB ADBHAD HOWF ADASDASD",
        address4: "ADHDA  DS"
    }
]
const SavedAddress = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "#558ED421" }}>
            <CheckoutHeader />
            <View style={{ marginHorizontal: 20}}>
                <Text style={{ fontSize: 20 }}>Saved Addresses</Text>
            </View>
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                {data.map((addresses, index) => {
                    return (
                        <View key={index} style={{ paddingHorizontal: 15, paddingVertical: 10, marginTop: 20, backgroundColor: "white", elevation: 10, borderColor: "#DADADB", borderWidth: 0.5 }}>
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{addresses.heading}</Text>
                            </View>
                            <View>
                                <Text style={{ marginTop: 10 }}>
                                    {addresses.address1}
                                </Text>
                                <Text style={{ marginTop: 2 }}>
                                    {addresses.address2}
                                </Text>
                                <Text style={{ marginTop: 2 }}>
                                    {addresses.address3}
                                </Text>
                                <Text style={{ marginTop: 2 }}>
                                    {addresses.address4}
                                </Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: "row" }}>
                                <TouchableOpacity style={{ backgroundColor: "#E8EDF3", paddingVertical: 10, paddingHorizontal: 40, borderRadius: 5 }}>
                                    <Text >Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginLeft: 10, backgroundColor: "#558ED4", paddingVertical: 10, paddingHorizontal: 30, borderRadius: 5 }}>
                                    <Text style={{ color: "white" }}>Use This</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
            </View>


        </SafeAreaView>
    )
}

export default SavedAddress