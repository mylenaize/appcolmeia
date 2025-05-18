import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 30,
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    position: 'absolute',
    top: 10,
    left: 15,
  },
  exitButton: {
    position: 'absolute',
    top: 10,
    right: 15,
    padding: 20,
  },
  exitIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 80,
    textAlign: 'center',
    color: '#024040',
    marginBottom: 30,
  },
  profileItem: {
    fontSize: 18,
    color: '#333',
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  editButton: {
    width: '48%',
    height: 45,
    backgroundColor: '#0A89A6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    width: '48%',
    height: 45,
    backgroundColor: '#F27B13',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
