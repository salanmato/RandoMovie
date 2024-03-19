import { Image, View } from 'react-native';
import Forms from './components/Forms/Forms'
import { styles } from './constants/styles'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Image
        source={require('./assets/images/LOGO.svg')}
        style={styles.logo}
      />
      <Forms/>
    </View>
  );
}

