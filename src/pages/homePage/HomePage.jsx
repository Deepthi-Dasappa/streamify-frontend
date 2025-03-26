import HomeScreen from "./HomeScreen.jsx";
import AuthScreen from "./AuthScreen.jsx";
import { userAuthStore } from "../../store/authUser";

export default function HomePage() {
  const { user } = userAuthStore();

  return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
}
