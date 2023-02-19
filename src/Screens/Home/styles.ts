import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A020F0',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontFamily: 'Poppins-Medium'
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    alignItems: 'center',
    flexDirection: 'row-reverse'
  },

  title: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    marginTop: 10,
    marginRight: 10
  },

  input: {
    backgroundColor: '#6666',
    textAlign: 'center',
    color: 'white',
    padding: 7,
    borderRadius: 8,
    width: 300,
    marginTop: 20,
    fontSize: 16,
    fontFamily: 'Poppins-Thin'
  },

  button: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#55FFE3',
    borderRadius: 16,
    marginTop: 20
  },

  buttonTitle: {
    padding: 7,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Medium'
  },
  postalCodeInfoTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    width: 250,
    marginTop: 16
  }
})
