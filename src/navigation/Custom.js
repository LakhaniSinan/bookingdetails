import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'
// import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler';
// import Collapsible from 'react-native-collapsible';

class DrawerItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showCur: false,
            showLang: false

        }
    }

    renderIcon = () => {
        const { title, focused } = this.props;
        // alert(focused)
        switch (title) {
            case "SUPPORT":
                return (
                    // <Icon
                    //     name="home-outline"
                    //     // color={focused ? "#009C84" : "white"}
                    //     size={20}
                    // />
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );
            case "About Us":
                return (
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );

            case "My Profile":
                return (
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );

            case "MANAGE BUSINESS":
                return (
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );
            case "USD":
                return (
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );
            case "Pending in Total":
                return (
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );
            case "Areas in Total":
                return (
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );
            case "Lay Buys in Total":
                return (
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );
            case "Pre-orders in Total":
                return (
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );
            case "Donations":
                return (
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );
            case "Wishlist":
                return (
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );
            case "My Contacts":
                return (
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );

            case "English":
                return (
                    <Image
                        source={require("../images/sidebar/settings.png")}
                        style={{ width: 20, height: 20 }}
                    />
                );

            default:
                return null;
        }
    };

    renderImages = () => {
        const { title, focused } = this.props;
        // alert(focused)
        switch (title) {
            case "Lay Buys in Total":
                return (
                    <View style={{ alignItems: "center", borderRadius: 5, justifyContent: "center", backgroundColor: "#558ED4", height: 17, width: 24 }}>
                        <Text style={{ color: "white" }}>3</Text>
                    </View>
                );
            case "USD":
                if (!this.state.showCur) {
                    return (
                        <View style={{ alignItems: "center", borderRadius: 5, justifyContent: "center", }}>
                            <AntDesign onPress={() => this.setState({ showCur: true })} size={12} name="caretdown" />
                        </View>
                    );
                } else {
                    return (
                        <View style={{ alignItems: "center", borderRadius: 5, justifyContent: "center", }}>
                            <AntDesign onPress={() => this.setState({ showCur: false })} size={12} name="caretup" />
                        </View>
                    );
                }
            case "English":
                if (!this.state.showLang) {
                    return (
                        <View style={{ alignItems: "center", borderRadius: 5, justifyContent: "center", }}>
                            <AntDesign onPress={() => this.setState({ showLang: true })} size={12} name="caretdown" />
                        </View>
                    );
                } else {
                    return (
                        <View style={{ alignItems: "center", borderRadius: 5, justifyContent: "center", }}>
                            <AntDesign onPress={() => this.setState({ showLang: false })} size={12} name="caretup" />
                        </View>
                    );
                }
            case "Wishlist":
                return (
                    <View style={{ alignItems: "center", borderRadius: 5, justifyContent: "center", backgroundColor: "#558ED4", height: 17, width: 24 }}>
                        <Text style={{ color: "white" }}>3</Text>
                    </View>
                );
            case "My Contacts":
                return (
                    <View style={{ alignItems: "center", borderRadius: 5, justifyContent: "center", backgroundColor: "#558ED4", height: 17, width: 24 }}>
                        <Text style={{ color: "white" }}>3</Text>
                    </View>
                );
            case "Accousticsplace@oxfordstreet":
                return (
                    <View style={{ alignItems: "center", borderRadius: 5, justifyContent: "center", backgroundColor: "#558ED4", height: 17, width: 24 }}>
                        <Text style={{ color: "white" }}>3</Text>
                    </View>
                );
            case "Lorem Ipsum":
                return (
                    <View style={{ alignItems: "center", borderRadius: 5, justifyContent: "center", backgroundColor: "#558ED4", height: 17, width: 24 }}>
                        <Text style={{ color: "white" }}>3</Text>
                    </View>
                );
        }
    }

    render() {
        const { focused, title, navigation, props, innerCurrency } = this.props;

        return (
            <TouchableOpacity
                style={{ height: 50 }}
                onPress={() =>
                    title == "Log Out" ? navigation.navigate("Login") : title == "Inbox" ? navigation.navigate("Message")
                        : navigation.navigate(title)
                }
            >
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                    <View style={[(focused) ? styles.viewActive : styles.viewInActive]}>
                        {this.renderIcon()}
                        {/* {title="USD"  ? 
                        <Collapsible collapsed={this.state.showCur} >
                        {innerCurrency.map((data)=>{
                            return <Text>hi</Text>
                        })}
                        </Collapsible>
                        :
                        <Text
                        style={[(focused) ? styles.activeStyle : styles.inactive]}
                    >
                        {title}
                        </Text>
                        } */}
                        <Text
                            style={[(focused) ? styles.activeStyle : styles.inactive]}
                        >
                            {title}
                            {/* <View style={{flex:1,flexDirection:"column"}}>
                                {title == "USD" && this.state.show ?
                                    innerCurrency.map((data) => {
                                        return (
                                                <Text style={{ position: "relative" }}>{data}</Text>
                                          
                                        )
                                    })
                                    : null
                                }
                            </View> */}
                        </Text>
                        <View style={{ flex: 1, alignItems: "flex-end" }}>
                            {this.renderImages()}
                        </View>


                    </View>
                </View>


            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    inactive: {
        color: '#6D6D6D',
        marginTop: 2,
        marginLeft: 10
    },

    activeIcon: {
        color: "#6D6D6D",
        height: 15,
        width: 15
    },
    inActiveIcon: {
        color: "white",
        height: 15,
        width: 15
    },

    activeStyle: {
        borderRadius: 30,
        marginTop: 2,
        color: "#6D6D6D",
        marginLeft: 10
    },
    viewActive: {
        flexDirection: 'row',
        alignContent: 'stretch',
        // backgroundColor: 'white',
        flex: 1,
        height: 40,
        alignItems: 'center',
        borderRadius: 20,
        paddingLeft: 15,
        marginHorizontal: 10
    },
    viewInActive: {
        flexDirection: 'row',
        alignContent: 'stretch',
        flex: 1,
        height: 40,
        alignItems: 'center',
        paddingLeft: 15,
        marginHorizontal: 10
    }

});

export default DrawerItem;