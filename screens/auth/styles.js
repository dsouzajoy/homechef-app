import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonText: {
        color: '#fff',
    },
    brand: {
        fontSize: 50,
        color: 'purple',
        marginTop: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 30,
        textTransform: 'uppercase',
        letterSpacing: 3
    },
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    bottomText: {
        padding: 20,
        textAlign: 'center',
    },
    label: {
        textAlign: 'left',
    },
    formGroup: {
        borderBottomWidth: 1,
        borderBottomColor: '#25D366',
        width: 250,
        paddingVertical: 7,
        marginBottom: 50,
    },
    mainButton: {
        backgroundColor: '#25D366',
        width: 250,
        borderRadius: 5,
        elevation: 10,
        marginTop: 35,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        color: '#000',
        fontSize: 17,
        width: 250,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#25D366',
        height: 50,
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 5,
        backgroundColor: '#f8f8f8',
        elevation: 10
    },
})

export default styles