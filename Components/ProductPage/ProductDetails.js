import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetail = (props) => {

    const params = props.route.params;

    return(
        <View style={styles.pageStyle}>
            <Text style={styles.productTitle}>{params.productName}</Text>
            <Text style={styles.productPrice}>$ {params.productPrice}</Text>
            <Image 
                style={{
                    ...styles.productImage,
                    alignSelf: 'center',
                    borderRadius: 5
                }}
                source={{
                    uri: params.productImage,
                    width:  180,
                    height: 180
                }}
            />
            <Text>{params.productResume}</Text>
            <Text style={styles.productDescription}>{params.productDescription}</Text>
        </View>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    pageStyle: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    productTitle: {
        fontSize: 24
    },
    productPrice: {
        color: '#ca3030',
        fontSize: 20,
        fontWeight: '700'
    },
    productImage: {
        width: '80%',
        marginVertical: 15
    },
    productDescription: {
        marginVertical: 15,
        color: '#00000080'
    }
});