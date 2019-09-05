import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, StatusBar } from 'react-native';


export default function Gallery({ navigation }) {
    const userId = navigation.getParam('id')
    const img = navigation.getParam('img')

    return (
        <View>
            <StatusBar hidden />
            <TouchableHighlight
                style={styles.closeButton}
                onPress={() => navigation.navigate('Authors')}>
                <Text
                    style={styles.text}>
                    Close</Text>
            </TouchableHighlight>
            <Image
                style={styles.img}
                source={{ uri: img }}
                resizeMode='contain' />
        </View>
    )
}

Gallery.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    closeButton: {
        alignItems: "flex-end",
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
        fontSize: 16,
    }
});