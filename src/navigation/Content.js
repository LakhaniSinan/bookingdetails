import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image, useWindowDimensions, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './Drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Test from "./screens"

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const Tab = createMaterialTopTabNavigator();


// function TopNavigation() {

//   return <Tab.Navigator>
//     <Tab.Screen name="All" component={All} />
//     <Tab.Screen name="Trending" component={Trending} />
//   </Tab.Navigator>

// }

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <EvilIcons
          name="navicon"
          color="black"
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
}





function ContentForDrawer({ navigation }) {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // drawerType={isLargeScreen ? 'permanent' : 'back'}
        drawerStyle={isLargeScreen ? null : { width: '80%' }}
        drawerContent={props => <CustomDrawerContent {...props} />}

      >
        <Drawer.Screen
          name="SUPPORT"
          options={{
            headerShown: false,
          }}
          component={Test}

        />
        <Drawer.Screen
          name="About Us"
          options={{
            headerShown: false,
          }}
          component={Test}
        />
        <Drawer.Screen
          name="My Profile"
          options={{
            headerShown: false
          }}
          component={Test}
        />
        <Drawer.Screen
          name="MANAGE BUSINESS"
          component={Test}
        />
        <Drawer.Screen
          name="USD"
          options={{
            headerShown: false,
          }}
          component={Test}
        />
        <Drawer.Screen
          name="Pending in Total"
          component={Test}
          options={{
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="Arears in Total"
          component={Test}
          options={{
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="Pre-orders in Total"
          component={Test}
          options={{
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="Donations"
          component={Test}
          options={{
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="Wishlist"
          component={Test}
          options={{
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="My Contacts"
          component={Test}
          options={{
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="ProdTest@DeleteLater"
          component={Test}
          options={{
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="Accousticsplace@oxfordstreet"
          component={Test}
          options={{
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="Lorem Ipsum"
          component={Test}
          options={{
            headerShown: false
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default ContentForDrawer;