import { StyleSheet } from 'react-native'
import { COLORS, FONTSIZE, FONTWEIGHT } from './theme'


const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: COLORS.green,
        alignItems: 'center',
        justifyContent: 'center',
    },

    formsContainer: {
        alignItems: 'center'
    },

    pickerTitle: {
        fontSize: FONTSIZE.big,
        fontWeight: FONTWEIGHT.bold,
        textAlign: 'center',

        color: COLORS.lightGreen,

        marginTop: 36
    },

    pickerMenuContainer: {
        width: 200,
        height: 40,

        border: 'none',
        borderRadius: 12,

        color: COLORS.darkGreen,
        backgroundColor: COLORS.ice,

        textAlign: 'center',
        justifyContent: 'center',
        fontSize: FONTSIZE.regular,
        fontWeight: FONTWEIGHT.regular,

        marginTop: 8

    },

    findButton: {
        width: 120,
        height: 48,
        borderRadius: 12,

        backgroundColor: COLORS.yellow,

        marginTop: 100
    },

    findButtonText: {
        fontSize: FONTSIZE.bigger,
        fontWeight: FONTWEIGHT.bolder,

        color: COLORS.darkGreen,

        textAlign: 'center'
    },

    logo: {
        margin: 32
    },

    modalView: {
        backgroundColor: COLORS.yellow,
        width: '100%',
        height: '100%'
    },

    resultPageStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 48,
        marginTop: 32
    },

    movieTitle: {
        fontWeight: FONTWEIGHT.bolder,
        fontSize: FONTSIZE.bigger,
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 12
    },

    movieDescription: {
        fontWeight: FONTWEIGHT.regular,
        fontSize: FONTSIZE.small,
        marginHorizontal: 8,
        textAlign: 'justify'
    },
    movieDescriptionCrop: {
        height: 150,
        width: 300,
        overflow: 'scroll'
    }

});


export { styles }