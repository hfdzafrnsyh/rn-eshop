import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons, FontAwesome, AntDesign, Entypo } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={TabNavs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Router;

export const TabNavs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Product" component={ProductScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="shop" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}