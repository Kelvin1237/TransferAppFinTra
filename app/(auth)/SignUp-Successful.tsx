import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpSuccessful = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center gap-10">
        <TouchableOpacity
          onPress={() => {
            router.push("/(auth)/SignUp-SetPINCode");
          }}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color="#0D0D0D"
            style={{ padding: 6, marginTop: 22, marginLeft: 14 }}
          />
        </TouchableOpacity>
      </View>
      <View
        className="flex-1 justify-center items-center gap-10"
        style={{ marginBottom: 130 }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#82E394",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#0D0D0D",
          }}
          className="rounded-full border flex items-center justify-center"
        >
          <FontAwesome6 name="check" size={34} color="#0D0D0D" />
        </View>
        <View>
          <Text className="font-UrbanistBold text-heading text-primary">
            You're All Set!
          </Text>
        </View>
        <View className="flex p-5 -mt-7">
          <Text
            className="font-UrbanistMedium text-subtext text-center text-secondary"
            style={{ lineHeight: 26 }}
          >
            Your account is ready. Let's start for a better financial
            experience.
          </Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 48,
        }}
      >
        <TouchableOpacity
          className="bg-general flex items-center justify-center p-5 border-none rounded-full"
          onPress={() => {
            router.push({
              pathname: "/(root)/(tabs)/home",
              params: { isNewUser: "true" },
            });
          }}
        >
          <Text className="font-UrbanistSemiBold text-buttontext text-primary">
            Go to My Account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpSuccessful;
