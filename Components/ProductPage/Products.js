import { React, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import CustomButton from './../UI/CustomButton';

import productsRawData from './productsData.json';
import * as db from './../../Database/connection'

const Products = (props) => {

    const [productList, setProductList] = useState([]);
    const [items, setItems] = useState([]);
    useEffect(() => {
        setProductList(productsRawData);
        db.itemData().then( res => {
            console.log(res);
            setItems([...res]);
        })
    },[]);

    return(
        <View style={styles.pageStyle}>
            <Text
                style={styles.pageTitle}
            >Pagina de Productos</Text>

            <View style={{ height: '95%' }}>
                <FlatList 
                    data={items}
                    keyExtractor={(item, index) => { return index; }}
                    renderItem={(item) => {
                        return(
                            <View style={styles.productWrapper}>
                                <View>
                                    <Image 
                                        style={{
                                            alignSelf: 'center',
                                            borderRadius: 5
                                        }}
                                        source={{
                                            uri: item.item.image,
                                            width:  180,
                                            height: 180
                                        }}
                                    />
                                </View>
                                <View style={styles.infoWrapper}>
                                    <Text style={{...styles.infoText, ...styles.productTitle}}>{item.item.title}</Text>
                                    <Text style={{...styles.infoText, ...styles.productPrice}}>$ {item.item.price}</Text>
                                    <CustomButton
                                        text='Detalles'
                                        style={{ marginTop: 'auto', width: '100%' }}
                                        onPress={() => {
                                            props.navigation.navigate('Detalle del Producto', {
                                                productName: item.item.title,
                                                productPrice: item.item.price,
                                                productResume: item.item.title,
                                                productImage: item.item.image,
                                                productDescription: item.item.description
                                            });
                                        }}
                                    />
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export { Products };

const styles = StyleSheet.create({
    pageStyle: {
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    pageTitle: {
        paddingBottom: 10,
        fontSize: 18
    },
    productWrapper: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fafafa',
        marginBottom: 15,
        marginTop: 15,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    infoWrapper: {
        marginLeft: 15,
        flex: 1
    },
    infoText: {
        color: '#303030',
        marginBottom: 5
    },
    productTitle: {
        fontSize: 18
    },
    productPrice: {
        color: '#ca3030',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 25
    },
    productDescription: {
        opacity: 0.7
    }
})