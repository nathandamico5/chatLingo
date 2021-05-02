import React, { useState } from "react";
import { View, Text, TouchableOpacity, Picker, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { saveSettings, logout } from "../store/reducers/auth";

const SettingsScreen = ({ navigation, user, saveSettings }) => {
  const [language, setLanguage] = useState(user.language);

  const handleSaveSettings = (username, langauge) => {
    saveSettings(username, langauge);
  };

  const handleLogOut = () => {
    logout();
    navigation.navigate("SplashScreen");
  };

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={language}
        onValueChange={(itemValue) => setLanguage(itemValue)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Español" value="es" />
        <Picker.Item label="Français" value="fr" />
        <Picker.Item label="Deutsche" value="de" />
        <Picker.Item label="普通话" value="zh" />
        <Picker.Item label="عربى" value="ar" />
        <Picker.Item label="Italiano" value="it" />
        <Picker.Item label="日本語" value="ja" />
        <Picker.Item label="Swahili" value="sw" />
        <Picker.Item label="Tagalog" value="tl" />
      </Picker>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleSaveSettings(language)}
      >
        <Text style={styles.btnText}>Save Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => handleLogOut()}>
        <Text style={styles.btnText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapState = (state) => ({
  user: state.auth,
});

const mapDispatch = (dispatch) => ({
  saveSettings: (language) => dispatch(saveSettings(language)),
  logout: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(SettingsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cccccc",
  },
  input: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    width: "90%",
    alignSelf: "center",
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    width: "90%",
    alignSelf: "center",
  },
  picker: {
    padding: 10,
    marginBottom: 10,
    width: "90%",
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#1d344e",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#ffffff",
  },
});
