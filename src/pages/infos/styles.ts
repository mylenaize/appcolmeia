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
    marginBottom: 0,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,

  },
  loginIcon: {
    width: 50,
    height: 40,
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
    width: "100%",
    borderRadius: 20,
    marginBottom: 5, 
    marginRight: 10, 
  },
  buttonText: {
    color: '#FFF', 
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonPressed: {
    backgroundColor: '#42263F', 
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
    backgroundColor: '#42263F', 
    width: "70%",
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 30,
  },
});
