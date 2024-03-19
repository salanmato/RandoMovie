import {
    Modal,
    Image,
    Text,
    Pressable,
    View
} from 'react-native'
import { styles } from '../../constants/styles'

export default function ResultPage(props) {
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.modalView}>
                <Pressable onPress={props.close}>
                    <Image
                        style={{
                            height: 48,
                            width: 48,
                            resizeMode: 'center',
                            marginTop: 12,
                            marginLeft: 12
                        }}

                        source={{ uri: '../../assets/images/return.svg' }}
                    />
                </Pressable>
                <View style={styles.resultPageStyle}>
                    <Image
                        style={{
                            height: 450,
                            width: 300,
                            resizeMode: 'center'
                        }}

                        source={{ uri: `https://image.tmdb.org/t/p/original/${props.movie.poster_path}` }}
                    />
                    <Text style={styles.movieTitle}>{props.movie.title}</Text>
                    <View style={styles.movieDescriptionCrop}>
                        <Text style={styles.movieDescription}>{props.movie.overview}</Text>
                    </View>
                    {/* Você pode adicionar o conteúdo de props.servicesList.results aqui */}
                </View>

                <View>
                <Text> Disponível em:</Text>
                    {/*props.servicesList.results.BR.buy &&  props.servicesList.results.map(service => {
                        <Text>{service.BR.buy}</Text>
                    })*/}
                </View>
                <View>
                    <Pressable />
                </View>
            </View>
        </Modal>
    )
}
