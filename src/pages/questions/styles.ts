import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#786599',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    position: 'relative', 
    marginTop: 20,        
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  
  rightSpace: {
    width: 50, 
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 130, 
    color: '#fff',
  },
  optionsContainer: {
    alignItems: 'center',
    width: '100%',
  },
  option: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    width: 350,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#42263F',
  },
  optionText: {
    fontSize: 16,
    color: '#42263F',
    fontWeight: 'bold',
  },
  selectedOptionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: '#42263F',
    padding: 10,
    borderRadius: 8,
    width: Dimensions.get('window').width * 0.4,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#918F95',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;