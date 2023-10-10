import { Image, TextInput, View, Button, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function RegistroPage(){
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0xnp_6KkNB3jZTFCM7nAwu4Se1i4tcnogQ&usqp=CAU'}} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Password' style={styles.input}/>
            <TextInput placeholder='Confirm Password' style={styles.input}/>
            <Button title = "Cadastrar">Cadastrar</Button>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'SenhaPage'}}>Esqueceu a senha? </Link>
                <Link to={{screen: 'LoginPage'}}>Voltar para o Login </Link>
            </View>
        </View>
    )
}