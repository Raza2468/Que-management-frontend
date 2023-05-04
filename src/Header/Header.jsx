import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

function Header() {
    return (
        // <View 
        // style={{display:"flex",flex:1}}
        // >

        // <LinearGradient
        //     colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
        //     // style={{ flex: 1 }}
        //     start={{ x: 0, y: 0.5 }}
        //     end={{ x: 1, y: 0.5 }}
        // >
        <SafeAreaView style={{flex:1}}>
            <View style={{ backgroundColor: "#1D7874", width: "100%", height: "23%" }}>
                <Text style={{ color: "white", fontSize: 25, marginLeft: "4%" }}> Registration</Text>
            </View>
            <View style={{ backgroundColor: "#679289", opacity: 0.5, borderBottomEndRadius: 20, borderBottomStartRadius: 20, height: "28%" }}>
                <Text>Second Header</Text>
            </View>
        </SafeAreaView>
        // </LinearGradient>
        // </View>
    )
}

const styles = StyleSheet.create({
    linearGradient: {

    },
})
export default Header