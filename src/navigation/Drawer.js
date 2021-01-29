import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import DrawerItems from './Custom'
import { ScrollView } from 'react-native-gesture-handler';


function DrawerContent(props) {

    const renderNav = [
        "SUPPORT",
        "About Us",
        "My Profile",
        "MANAGE BUSINESS",
        "USD",
        "English",

    ];

    const renderNav2 = [
        "Pending in Total",
        "Areas in Total",
        "Lay Buys in Total",
        "Pre-orders in Total",
        "Donations",
        "Wishlist",
        "My Contacts"
    ];

    const innerCurrency = [
        "US Dollar",
        "Pound",
        "Euro",
        "US Dollar",
        "Pound",
        "Euro",
    ]

    // const innerCurrency = [
    //     "US Dollar",
    //     "Pound",
    //     "Euro"
    // ]

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

            <DrawerContentScrollView {...props} >

                <View style={styles.drawerContent}>

                    <View style={{ backgroundColor: "#558ED4", height: 60, flex: 1, justifyContent: 'center' }} >
                        <View style={{ flexDirection: 'row' }}>
                            <View >
                                <Image
                                    source={require("../images/sidebar/home.png")}
                                    style={{ height: 25, width: 25 }}
                                />
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', color: "#FFFFFF", marginLeft: 5, fontSize: 14, fontWeight: '600' }}>HOME</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => props.navigation.closeDrawer()}
                                style={{ flex: 1, marginRight: 20, alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Image

                                    source={require("../images/sidebar/group.png")}
                                    style={{ width: 25, height: 25, marginLeft: 5 }}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ marginTop: 0 }}>
                        {renderNav.map((item, index) => {
                            return (
                                <DrawerItems
                                    innerCurrency={innerCurrency}
                                    title={item}
                                    key={index}
                                    navigation={props.navigation}
                                    focused={props.state.index === index ? true : false}
                                    props={props}
                                />
                            );
                        })}
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#C6CCC8" }} />
                    <Text style={{ marginLeft: Dimensions.get("window").width * 0.06, fontSize: 14, color: "#202020", paddingVertical: 10 }}>MANAGE</Text>
                    <View style={{ marginTop: 0, backgroundColor: "#E8EDF3" }}>
                        {renderNav2.map((item, index) => {
                            return (
                                <DrawerItems
                                    title={item}
                                    key={index}
                                    navigation={props.navigation}
                                    focused={props.state.index === index ? true : false}
                                    props={props}
                                />
                            );
                        })}
                    </View>
                </View>
                <View
                    style={{ borderWidth: StyleSheet.hairlineWidth, borderColor: "#C6CCC8" }}
                />
                <Text style={{ marginLeft: Dimensions.get("window").width * 0.06, fontSize: 14, color: "#202020", paddingVertical: 10 }}>Merchant's  NPO's Followed</Text>
                <View style={{ marginTop: 1 }}>
                    <DrawerItems title="ProdTest@DeleteLater" navigation={props.navigation} />
                    <DrawerItems title="Accousticsplace@oxfordstreet" navigation={props.navigation} />
                    <DrawerItems title="Lorem Ipsum" navigation={props.navigation} />
                </View>
                <TouchableOpacity style={{ borderRadius: 5, marginLeft: Dimensions.get("window").width * 0.06, paddingVertical: 10, backgroundColor: "#E8EDF3", width: 100, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 14, color: "#6D6D6D", }}>View All</Text>
                </TouchableOpacity>
                <View
                    style={{ marginTop: 10, marginBottom: 10, borderWidth: StyleSheet.hairlineWidth, borderColor: "#C6CCC8" }}
                />
                <TouchableOpacity style={{ borderRadius: 5, marginBottom: 10, marginLeft: Dimensions.get("window").width * 0.06, paddingVertical: 10, backgroundColor: "#E8EDF3", width: 200, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 14, color: "#6D6D6D", }}>Show/Hide Statistics</Text>
                </TouchableOpacity>
            </DrawerContentScrollView>
            {/* <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { firebase.auth().signOut() }}
                />

            </Drawer.Section> */}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
     
    },
    underline: {
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "white"
    },
    userInfoScreen: {
        alignItems: 'center',
        marginTop: 10
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,

    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    prefence: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})

export default DrawerContent






