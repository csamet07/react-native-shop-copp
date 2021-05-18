import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    ActivityIndicator
} from 'react-native';
import styles from './Products.style';

import Config from 'react-native-config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const API_URL = "https://fakestoreapi.com/products";

const Products = ({navigation}) => {
    const {error, loading, data} = useFetch(API_URL);    
    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />

    const handleProductSelect = id => {
        navigation.navigate('DetailScreen', {id})
    }

    if (loading) {
        return <Loading />
    }

    if(error){
        return <Error />
    }

    return (
        <FlatList data={data} renderItem={renderProduct} />
    )
}

export default Products;