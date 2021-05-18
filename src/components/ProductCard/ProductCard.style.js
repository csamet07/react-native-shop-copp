import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        borderColor: '#bdbdbd',
        borderWidth: 1,
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        borderRadius: 8
    },
    inner_container: {
        flex: 1,
        padding:5,
        justifyContent: 'space-between'
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
        
    },
    title: {
        fontWeight:'bold',
        fontSize: 16
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
        fontStyle: 'italic'
    }
});