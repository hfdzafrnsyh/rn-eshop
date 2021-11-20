import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Product = () => {
    return (
        <ScrollView>

            <View style={styles.containerCard}>
                <TouchableOpacity style={styles.cardBox} >
                    <View style={styles.childBox}>
                        <Image style={styles.imageProduct} source={require('../assets/cts-70-blue.jpg')} />
                        <Text>Converse CTS 70</Text>
                        <Button title="Detail" color="#dc143c" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardBox} >
                    <View style={styles.childBox}>
                        <Image style={styles.imageProduct} source={require('../assets/laptop-hp.png')} />
                        <Text>Laptop HP</Text>
                        <Button title="Detail" color="#dc143c" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardBox} >
                    <View style={styles.childBox}>
                        <Image style={styles.imageProduct} source={require('../assets/redmi-note-7.png')} />
                        <Text>Redmi Note 7</Text>
                        <Button title="Detail" color="#dc143c" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardBox} >
                    <View style={styles.childBox}>
                        <Image style={styles.imageProduct} source={require('../assets/rexus-headset.jpg')} />
                        <Text>Rexus Headset</Text>
                        <Button title="Detail" color="#dc143c" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardBox} >
                    <View style={styles.childBox}>
                        <Image style={styles.imageProduct} source={require('../assets/cts-70-red.jpeg')} />
                        <Text>Converse CTS 70</Text>
                        <Button title="Detail" color="#dc143c" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardBox} >
                    <View style={styles.childBox}>
                        <Image style={styles.imageProduct} source={require('../assets/asus-laptop.jpg')} />
                        <Text>Laptop Asus</Text>
                        <Button title="Detail" color="#dc143c" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardBox} >
                    <View style={styles.childBox}>
                        <Image style={styles.imageProduct} source={require('../assets/samsung-j5.jpg')} />
                        <Text>Samsung J5</Text>
                        <Button title="Detail" color="#dc143c" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardBox} >
                    <View style={styles.childBox}>
                        <Image style={styles.imageProduct} source={require('../assets/shoes-rebook.jpg')} />
                        <Text>Rebook</Text>
                        <Button title="Detail" color="#dc143c" />
                    </View>
                </TouchableOpacity>

            </View>


        </ScrollView>
    )
}


const styles = StyleSheet.create({
    containerCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }, cardBox: {
        width: '100%',
        padding: 10,
    },
    childBox: {
        borderRadius: 10,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'

    },
    imageProduct: {
        width: 150,
        height: 150
    }
})


export default Product;