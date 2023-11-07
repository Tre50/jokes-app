import {StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get('screen')
const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor: '#fd0',
    justifyContent: 'space-around',
    alignItems: 'center',
    bigText: {
        fontSize: 48,
        fontWeight: '700',
        color:'#d00',
        textAlign: 'center',
    }

},
punchlineBox: {
    backgroundColor: '#00d',
    width: width,
    height: 104,
    justifyContent: 'center',
    alignItems: 'center',

punchlineText: 'white',
fontSize: 50,




}


})
export default styles