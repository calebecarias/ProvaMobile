import { Image, TextInput, View, Button } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function SenhaPage(){
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0xnp_6KkNB3jZTFCM7nAwu4Se1i4tcnogQ&usqp=CAU'}} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <Button title = "mandar">Mandar Email</Button>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'RegistroPage'}}>Cadastre-se </Link>
                <Link to={{screen: 'LoginPage'}}>Voltar para o Login </Link>
            </View>
        </View>
    )
}