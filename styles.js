import { StyleSheet } from 'react-native'

export default (styles = StyleSheet.create({
  nav: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00274d',
    padding: 5
  },  
  navTitle: {
    color: '#ffffff',
    fontSize: 35
  },
  navBtn: {
    width: '40%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E90FF'
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  card: {
    width: '45%',
    height: 150,
    marginBottom: 15,
    marginTop: 20,
    zIndex: 1,
    left: 5,
    marginRight: 10
  },
  imgSmall: {
    height: 50,
    width: 50
  },
  imgBig: {
    height: 150,
    width: 150
  }
}))