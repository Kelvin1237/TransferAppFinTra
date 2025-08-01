import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link, router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const SignIn = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { isNewUser } = useLocalSearchParams();
  const isNewUserBool = isNewUser === "true";

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (showModal) {
      timeout = setTimeout(() => {
        setShowModal(false);
        router.push({
          pathname: "/(root)/(tabs)/home",
          params: { isNewUser: isNewUserBool ? "true" : "false" },
        });
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [showModal]);

  const handleSignIn = () => {
    let valid = true;

    // Email required
    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email.trim())) {
      // Email format check
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    // Password required and length check
    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      valid = false;
    } else if (
      !/(?=.*[0-9])(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]).+/.test(password)
    ) {
      setPasswordError(
        "Password must include at least 1 number and 1 special character"
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      setShowModal(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 bg-white p-5 gap-10">
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/welcome-GetStarted");
          }}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color="#0D0D0D"
            style={{ padding: 6, marginTop: 22 }}
          />
        </TouchableOpacity>
        <View>
          <Text className="font-UrbanistBold text-primary text-3xl">
            Welcome back 👋
          </Text>
          <Text className="font-UrbanistMedium text-secondary text-lg mt-5">
            Please enter your email & password to sign in.
          </Text>
        </View>
        <View className="relative">
          {email.length === 0 && (
            <MaterialIcons
              name="email"
              size={24}
              color={emailFocused ? "#0D0D0D" : "#9CA3AF"}
              style={{ position: "absolute", left: 20, top: 57, zIndex: 1 }}
            />
          )}
          <Text className="text-2xl font-UrbanistSemiBold">Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (emailError) setEmailError("");
            }}
            placeholder="         Email"
            placeholderTextColor="#9CA3AF"
            className="text-xl font-UrbanistSemiBold border-none rounded-lg w-full p-5 bg-[#F6F8FA] text-primary mt-3 opacity-4 focus:outline-none focus:border-blue-400"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
          {emailError ? (
            <Text
              style={{
                color: "#E53E3E",
                marginLeft: 8,
                marginTop: 4,
                fontSize: 16,
                fontFamily: "Urbanist-Medium",
              }}
            >
              {emailError}
            </Text>
          ) : null}
        </View>
        <View className=" relative -mt-2">
          {password.length === 0 && (
            <Fontisto
              name="locked"
              size={20}
              color={passwordFocused ? "#0D0D0D" : "#9CA3AF"}
              style={{ position: "absolute", left: 24, top: 57, zIndex: 1 }}
            />
          )}
          <Text className="text-2xl font-UrbanistSemiBold">Password</Text>
          <TextInput
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (passwordError) setPasswordError("");
            }}
            placeholder="         Password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={showPassword}
            className="text-xl font-UrbanistSemiBold border-none rounded-lg p-5 bg-[#F6F8FA] text-primary mt-3 opacity-4 focus:outline-none focus:border-blue-400"
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={26}
              color={passwordFocused ? "#0D0D0D" : "#9CA3AF"}
              style={{ position: "absolute", right: 20, bottom: 14, zIndex: 1 }}
            />
          </TouchableOpacity>
          {passwordError ? (
            <Text
              style={{
                color: "#E53E3E",
                marginLeft: 8,
                marginTop: 4,
                fontSize: 16,
                fontFamily: "Urbanist-Medium",
              }}
            >
              {passwordError}
            </Text>
          ) : null}
        </View>
        <View className="flex-row items-center justify-between -mt-2">
          <View className="flex-row items-center justify-center">
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              className="w-6 h-6 rounded border border-[#196126] items-center mr-2 justify-center bg-white"
            >
              {rememberMe && (
                <View className="w-6 h-6 rounded flex justify-center items-center bg-general">
                  <Ionicons name="checkmark-sharp" size={12} color="#0D0D0D" />
                </View>
              )}
            </TouchableOpacity>
            <Text className="text-xl text-primary font-UrbanistSemiBold">
              Remember me
            </Text>
          </View>
          <Link
            href="/(auth)/forgot-password"
            className="font-UrbanistSemiBold text-xl text-[#196126]"
          >
            Forgot Password?
          </Link>
        </View>
        <View className="bg-gray-300 w-full h-[1px]"></View>
        <View className="flex flex-row justify-center items-center">
          <Text className="text-secondary font-UrbanistMedium text-subtext">
            Don't have an account?{"  "}
          </Text>
          <Link href="/(auth)/sign-up">
            <Text className="text-[#196126] font-UrbanistBold text-subtext">
              Sign up
            </Text>
          </Link>
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
            onPress={handleSignIn}
          >
            <Text className="font-UrbanistSemiBold text-buttontext text-primary">
              Sign in
            </Text>
          </TouchableOpacity>
        </View>

        {/* Overlay Modal */}
        <Modal visible={showModal} transparent animationType="fade">
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.4)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: "60%",
                width: "80%",
                backgroundColor: "white",
                borderRadius: 20,
                padding: 20,
              }}
              className="flex items-center gap-10"
            >
              <View>
                <View
                  style={{
                    width: 170,
                    height: 170,
                    backgroundColor: "#82E394",
                    marginTop: 14,
                  }}
                  className="rounded-full flex items-center justify-center"
                >
                  <FontAwesome5 name="user-alt" size={50} color="#0D0D0D" />
                </View>
                <View
                  className="rounded-full"
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#82E394",
                    position: "absolute",
                    bottom: 40,
                    left: -24,
                  }}
                ></View>
                <View
                  className="rounded-full"
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: "#82E394",
                    position: "absolute",
                    bottom: -8,
                    left: 20,
                  }}
                ></View>
                <View
                  className="rounded-full"
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "#82E394",
                    position: "absolute",
                    top: 10,
                    left: -20,
                  }}
                ></View>
                <View
                  className="rounded-full"
                  style={{
                    width: 14,
                    height: 14,
                    backgroundColor: "#82E394",
                    position: "absolute",
                    top: 28,
                    right: -20,
                  }}
                ></View>
                <View
                  className="rounded-full"
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: "#82E394",
                    position: "absolute",
                    top: -1,
                    right: 80,
                  }}
                ></View>
                <View
                  className="rounded-full"
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: "#82E394",
                    position: "absolute",
                    bottom: -1,
                    right: 2,
                  }}
                ></View>
                <View
                  className="rounded-full"
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: "#82E394",
                    position: "absolute",
                    bottom: 50,
                    right: -18,
                  }}
                ></View>
              </View>
              <View style={{ marginTop: -10 }}>
                <Text className="text-3xl font-UrbanistBold text-primary">
                  Sign in Successful!
                </Text>
              </View>
              <View style={{ marginTop: -10 }}>
                <Text
                  className="text-center font-UrbanistMedium text-secondary text-lg"
                  style={{ lineHeight: 28 }}
                >
                  Please wait...{"\n"}You will be directed to the homepage.
                </Text>
                <ActivityIndicator
                  size={65}
                  color="#82E394"
                  style={{ marginTop: 24 }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
