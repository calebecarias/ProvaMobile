import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '200px',
        height: '200px',
        marginBottom: '20px'
    },
    input:{
        width: '75%',
        height: '50px',
        backgroundColor: 'orange',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        border: '1px solid red',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    }
});

export default styles;