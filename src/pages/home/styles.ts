import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  background: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  logoContainer: {
    position: "absolute",
    top: 30,
    left: 10,
  },
  logo: {
    width: 200,
    height: 200,
  },
  textContainer: {
    marginTop: Dimensions.get("window").height * 0.3,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    color: "#fff",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "left",
    color: "#fff",
  },
  buttonContainer: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "60%",
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 15,
    alignItems: "center",
  },
  signupButton: {
    backgroundColor: "#F27B13",
  },
  loginButton: {
    backgroundColor: "#9C7DA7",
  },
  infoButton: {
    backgroundColor: "#9C7DA7",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
