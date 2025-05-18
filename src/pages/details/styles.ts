import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 30,
  },
  title: {
    padding: 50,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#42263F',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 0,
    marginVertical: 10,
    backgroundColor: '#D6B8D2',
  },
  button: {
    marginTop: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#42263F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: 24,
    lineHeight: 26,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#024040',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
    marginBottom: 12,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 4,
    color: '#444',
  },
  psicologoCard: {
    backgroundColor: '#F0F4F8',
    padding: 12,
    marginTop: 10,
    borderRadius: 8,
  },
  psicologoNome: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  psicologoInfo: {
    fontSize: 14,
    color: '#333',
  },
});
