import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { getToken, deleteToken } from "../../utils/token";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/harford-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.apiUrlText}>API URL from .env:</Text>
      <Text style={styles.apiUrl}>{API_URL}</Text>

      <Pressable
        onPress={() => router.push("/login")}
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>Go to Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 40,
  },
  apiUrlText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  apiUrl: {
    fontSize: 16,
    color: "blue",
    marginBottom: 30,
  },
  loginButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#007AFF",
    borderRadius: 8,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
