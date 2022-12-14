import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ListItem } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem onPress={()=>enterChat(id,chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            // chatMessages?.[0]?.photoURL ||
            "https://bglaw.com/wp-content/uploads/2020/05/avatar-placeholder-550x550.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          ABC
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
