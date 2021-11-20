import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, Button } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {

    const handlePress = () => {
        alert('Tester')
    }

    return (
        <ScrollView>
            <View>
                <Image source={require('../assets/freepik-background.jpg')} style={styles.imageBackground} />
            </View>

            <View >
                <View style={styles.containerCard}>
                    <TouchableOpacity style={styles.box} onPress={() => handlePress()}>
                        <View style={styles.childBox}>
                            <Image source={require('../assets/sports.png')} style={styles.imageCard} />
                            <Text>Sports</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => handlePress()}>
                        <View style={styles.childBox}>
                            <Image source={require('../assets/computer-icon.png')} style={styles.imageCard} />
                            <Text>Computer</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => handlePress()}>
                        <View style={styles.childBox}>
                            <Image source={require('../assets/fashion.png')} style={styles.imageCard} />
                            <Text>Fashion</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => handlePress()}>
                        <View style={styles.childBox}>
                            <Image source={require('../assets/gaming-icon.png')} style={styles.imageCard} />
                            <Text>Gaming</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => handlePress()}>
                        <View style={styles.childBox}>
                            <Image source={require('../assets/otomorif-icon.png')} style={styles.imageCard} />
                            <Text>Otomotif</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => handlePress()}>
                        <View style={styles.childBox}>
                            <Image source={require('../assets/book-icon.png')} style={styles.imageCard} />
                            <Text>Book</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => handlePress()}>
                        <View style={styles.childBox}>
                            <Image source={require('../assets/kitchen-icon.png')} style={styles.imageCard} />
                            <Text>Kitchen</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => handlePress()}>
                        <View style={styles.childBox}>
                            <Image source={require('../assets/hobby-icon.png')} style={styles.imageCard} />
                            <Text>Hobby</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => handlePress()}>
                        <View style={styles.childBox}>
                            <Image source={require('../assets/electronic-icon.png')} style={styles.imageCard} />
                            <Text>Electronics</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <ScrollView horizontal={true}>
                    <View style={styles.cardHorizontal}>
                        <Image source={require('../assets/cts-70-blue.jpg')} style={{ resizeMode: 'contain', width: 100, height: 100 }} />
                        <Text>Cts 70 Blue</Text>
                        <Button title="Detail" color="#dc143c" />
                    </View>
                    <View style={styles.cardHorizontal}>
                        <Image source={require('../assets/laptop-hp.png')} style={{ resizeMode: 'contain', width: 100, height: 100 }} />
                        <Text>Laptop Hp</Text>
                        <Button title="Detail" color="#dc143c" />
                    </View>
                    <View style={styles.cardHorizontal}>
                        <Image source={require('../assets/rexus-headset.jpg')} style={{ resizeMode: 'contain', width: 100, height: 100 }} />
                        <Text>Headset Rexus</Text>
                        <Button title="Detail" color="#dc143c" />
                    </View>
                    <View style={styles.cardHorizontal}>
                        <Image source={require('../assets/redmi-note-7.png')} style={{ resizeMode: 'contain', width: 100, height: 100 }} />
                        <Text>Redmi Note 7</Text>
                        <Button title="Detail" color="#dc143c" />
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    )
}


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    imageBackground: {
        marginTop: 10,
        width: width,
        height: 200
    },
    containerCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        alignItems: "center",
        justifyContent: 'center'
    },
    box: {
        width: 100,
        height: 120,
        padding: 10,
    },
    childBox: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        marginTop: 10
    },
    imageCard: {
        width: 60,
        height: 80,
        resizeMode: 'contain'
    },
    cardHorizontal: {
        backgroundColor: '#fff',
        width: 250,
        height: 180,
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default Home;