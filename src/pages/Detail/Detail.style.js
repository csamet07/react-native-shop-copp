import {
    Dimensions,
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    name: {
        fontWeight:'bold',
        fontSize:25
    },
    detail: {
        fontStyle:'italic',
        marginVertical:10
    },
    price :{
        fontWeight:'bold',
        fontSize:20,
        textAlign: 'right',
        marginTop:20
    },
    inner_container: {
        padding: 10,
        marginTop:20
    }
});