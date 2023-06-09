import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar } from "react-native-paper";

const Home = () => {
  return (
    <View style={defaultStyle}>
      {/* header */}
      <Header />

      <View style={{
        paddingTop: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        
        <View>
          <Text style={{ fontSize: 20 }}>Our</Text>
          <Text style={{ fontSize: 20, fontWeight: "900" }}>Products</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Avatar.Icon
              icon={"magnify"}
              color="gray"
              size={50}
              style={{ backgroundColor: colors.color2, elevation: 12 }}
            />
          </TouchableOpacity>
        </View>

      </View>



    </View>
  );
};

export default Home;
