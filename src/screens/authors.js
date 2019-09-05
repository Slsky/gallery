import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import AuthorsCard from '../components/authors-card';

export default function Authors({ navigation }) {
    const [authors, addAuthors] = useState([])
    const [loading, setLoadingStatus] = useState(false)

    useEffect(() => {
        fetch("https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043", { credentials: "include" })
            .then(res => res.json())
            .then(res => {
                addAuthors([...res]);
                setLoadingStatus(true)
            })
            .catch(error => {
                console.log({ error, loading: false });
                setLoadingStatus(false)
            });
    }, [])

    if (!loading) {
        return <Text style={styles.err}> Упс! Что - то пошло не так!</Text >
    }

    return (
        <>
            <FlatList
                data={authors}
                keyExtractor={data => data.user.id}
                numColumns={2}
                renderItem={({ item }) => {
                    return <AuthorsCard data={item} />

                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    err: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        marginTop: '40%',
    }
});

