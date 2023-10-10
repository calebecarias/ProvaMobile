import { Image, TextInput, View, } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';
import { Button } from 'react-native';
export default function LoginPagePage(navigation){
    return(
        <View style={styles.container}>
            <Image style={styles.logo}
            source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0xnp_6KkNB3jZTFCM7nAwu4Se1i4tcnogQ&usqp=CAU'}}/>
        <TextInput placeholder='Email' style={styles.input}/>
        <TextInput placeholder='Password' style={styles.input}/>
        <Link to={{screen: 'Telainicial'}}> Logar</Link>
        <View style={styles.viewLinks}>
                <Link to={{screen: 'SenhaPage'}}>Esqueceu a senha? </Link>
                <Link to={{screen: 'RegistroPage'}}>Registre-se </Link>
        </View>
        </View>
    )
}