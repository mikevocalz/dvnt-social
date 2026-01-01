import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Header } from "../../../components";
import { HomeScreen } from "app/features/home";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
      <Header showNav />
      <HomeScreen onViewComponents={() => router.push("/(tabs)/demo")} />
    </SafeAreaView>
  );
}
