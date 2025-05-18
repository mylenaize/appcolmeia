import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#8F6C9C', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 200,
    marginTop: 0,

  },
  loginIcon: {
    width: 50,
    height: 50,
    marginTop: 25,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#42263F', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10, 
    marginRight: 10, 
  },
  buttonText: {
    color: '#FFF', 
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonPressed: {
    backgroundColor: '#FF7F50', 
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF', 
    textAlign: 'center',
    marginVertical: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#FFF', 
    textAlign: 'left',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF', 
    marginBottom: 10,
    textAlign: 'center'
  },
  footer: {
    marginTop: 15,
    fontSize: 18,
    color: '#FFF', 
    textAlign: 'center',
  },
  registerButton: {
    alignSelf: 'center',
    backgroundColor: '#F27B13', 
    width: "70%",
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 30,
  },
});
