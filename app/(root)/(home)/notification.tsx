import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const notification = () => {
  return (
    <View className="flex-1 bg-white">
      <View
        className="flex-row justify-between items-center pt-5 pl-5 pr-5"
        style={{ marginTop: 28 }}
      >
        <TouchableOpacity
          onPress={() => {
            router.push("/(root)/(tabs)/home");
          }}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color="#0D0D0D"
            style={{ padding: 6 }}
          />
        </TouchableOpacity>
        <Text
          className="font-UrbanistBold text-primary"
          style={{ fontSize: 24 }}
        >
          Notification
        </Text>
        <TouchableOpacity
          onPress={() => {
            router.push(
              "/(root)/(account)/(settings)/notification-settings"
            );
          }}
        >
          <Octicons
            name="gear"
            size={26}
            color="#0D0D0D"
            style={{ paddingHorizontal: 6 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default notification;
