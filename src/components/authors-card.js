import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';


function AuthorsCard({ data, navigation }) {
    const { id, name, profile_image } = data.user
    const { urls } = data

    return (
        <View style={style.card}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Gallery', { id: id, img: urls.full })}>
                <Image
                    source={{ uri: profile_image.large }}
                    style={style.image} />
                <Text
                    style={style.title}>
                    {name}</Text>
            </TouchableOpacity>
        </View >
    )
}

const screen = {
    width: Dimensions.get('window').width / 100,
    height: Dimensions.get('window').height / 100
}

const style = StyleSheet.create({
    card: {
        width: screen.width * 45,
        height: screen.height * 35,
        margin: '2.5%',
        borderBottomWidth: 2,
        borderBottomColor: 'gray'
    },
    image: {
        backgroundColor: 'gray',
        height: '80%'
    },
    title: {
        backgroundColor: 'white',
        height: '20%',
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: '1.5%'
    }
})

export default withNavigation(AuthorsCard)