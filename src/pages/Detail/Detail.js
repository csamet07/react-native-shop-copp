import React from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({route}) => {
    const {id} = route.params;
    const url = `https://fakestoreapi.com/products/${id}`;
    const {loading, error, data} = useFetch(url);

    if (loading) {
        return <Loading />
    }

    if(error){
        return <Error />
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:data.image}} />
            <View style={styles.inner_container}>
                <Text style={styles.name}> {data.title} </Text>
                <Text style={styles.detail}> {data.description} </Text>
                <Text style={styles.price}> {data.price} TL</Text>
            </View>
        </View>
    )
}

export default Detail;