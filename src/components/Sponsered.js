import React from "react"
import { View, Text, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity,FlatList } from "react-native"
// import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import img1 from "../images/imagehand.png"
import img2 from "../images/person.jpg"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const width = Dimensions.get("window").width
const data = [
    {
        name: "LG Washing Machine",
        price: "R. 8000.00",
        img: img2
    },
    {
        name: "Anti Femicide Campaign",
        price: "By Lorem Ipsum",
        img: img1
    },
    {
        name: "LG Washing Machine",
        price: "R. 8000.00",
        img: img2
    },
    {
        name: "Anti Femicide Campaign",
        price: "By Lorem Ipsum",
        img: img1
    },
    {
        name: "LG Washing Machine",
        price: "R. 8000.00",
        img: img2
    },
    {
        name: "Anti Femicide Campaign",
        price: "By Lorem Ipsum",
        img: img1
    },
    {
        name: "LG Washing Machine",
        price: "R. 8000.00",
        img: img2
    },
    {
        name: "Anti Femicide Campaign",
        price: "By Lorem Ipsum",
        img: img1
    },
    {
        name: "LG Washing Machine",
        price: "R. 8000.00",
        img: img2
    },
    {
        name: "Anti Femicide Campaign",
        price: "By Lorem Ipsum",
        img: img1
    },
    {
        name: "LG Washing Machine",
        price: "R. 8000.00",
        img: img2
    },
    {
        name: "Anti Femicide Campaign",
        price: "By Lorem Ipsum",
        img: img1
    },

]
const Sponsered = () => {

    const renderItems = ({ item, index }) => {
        console.log(index, "itemsitemsitems");
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: "white" }}>
                    <View style={{ marginLeft: 10, }}>
                        <FontAwesome name="heart-o" color="#a9a9a9" size={13} style={{ marginRight: 2, marginTop: 4 }} />
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Image
                            resizeMode='contain'
                            style={{ height: 108, width: 108 }}
                            source={item.img}

                        />
                    </View>
                </View>
                <View style={{ marginLeft: 5 }}>
                    <Text style={styles.nameStyle}>{item.name}</Text>
                    <Text style={styles.nameStyle}>{item.price}</Text>
                </View>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{color:"white"}}>{index % 2 == 0 ? "Add To Cart" : "Donate"}</Text>
                </TouchableOpacity>
                {/* <Text>{item.name}</Text> */}
            </View>
        )
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginTop: 20, marginLeft: 10 }}>
                    <Text style={{ color: "#3B3B3B", fontSize: 24 }}>Sponsored</Text>
                </View>
                <FlatList
                    data={data}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={renderItems}
                />
                <View style={styles.bottomStyles}>
                    <Image source={require("../images/bottom.png")} />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}
const styles = {
    bottomStyles:{
        justifyContent:"center",flex:1,alignItems:"center",marginVertical:30
    },
    container: {
        flex: 1,
        // alignItems: "center",
        backgroundColor: "#F6F7F9",
        justifyContent: "center",
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#DADADB"
    },
    item: {
        width: (width - 40) / 2 - 10,
        backgroundColor: "#000",
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 10
    },
    title: {
        fontSize: 32,
        color: "#fff",
        alignSelf: "center"
    },
    nameStyle: {
        marginTop: 5, fontSize: 11
    },

    buttonStyle: {
        marginLeft: 5,
        // marginTop: 5,
        backgroundColor:"#558ED4",
        width:"60%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        marginVertical:10,
        paddingVertical:10

    },
}
export default Sponsered