import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Profile = () => {
    return (
        <View>
            <View style={styles.profileIcon}>
                <Image source={require('../assets/account.png')} style={styles.imageProfile} />
                <Text style={{ fontSize: 25 }}>Anonim</Text>
            </View>
            <View style={styles.containerProfile}>
                <View style={styles.profileData}>
                    <Text style={{ fontSize: 18 }}>anonim</Text>
                </View>
                <View style={styles.profileData}>
                    <Text style={{ fontSize: 18 }}>anonim@test.id</Text>
                </View>
                <View style={styles.profileData}>
                    <Text style={{ fontSize: 18 }}>0800-9876-5422</Text>
                </View>
                <View style={styles.profileData}>
                    <Text style={{ fontSize: 18 }}>Laki-laki</Text>
                </View>
                <View style={styles.profileData}>
                    <Text style={{ fontSize: 18 }}>Islam</Text>
                </View>
                <View style={styles.profileData}>
                    <Text style={{ fontSize: 18 }}>Jl.aja</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageProfile: {
        resizeMode: 'contain',
        width: 100,
        height: 80,
        marginVertical: 10,
        marginTop: 80
    },
    containerProfile: {
        marginTop: 40
    },
    profileData: {
        alignItems: 'flex-end',
        marginHorizontal: 20,
        borderBottomColor: '#2a363b',
        borderBottomWidth: 2,
        marginVertical: 20
    }
})

export default Profile;