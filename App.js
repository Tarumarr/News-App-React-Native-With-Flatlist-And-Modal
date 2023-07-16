import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import {
  FlatList,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  const [feed, setFeed] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [holdItem, setHoldItem] = useState("");
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ebc09923df8f44aa94337182618c6e28"
    )
      .then((re) => re.json())
      .then((re) => {
        setFeed(re.articles);
      });
  }, []);
  const LogoTitle = () => {
    return (
      <View style={styles.logo}>
        <Text style={styles.logoText}>NEWS</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <LogoTitle />
      <FlatList
        data={feed}
        keyExtractor={(item) => {
          return item.title;
        }}
        renderItem={({ item, index }) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => (
                setHoldItem(item), setModalVisible(true)
              )}
            >
              <View style={styles.imageView}>
                <Image style={styles.image} source={{ uri: item.urlToImage }} />
              </View>
              <View style={styles.title}>
                <Text style={styles.titleText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.line} />
          </View>
        )}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView>
          <View style={styles.imageView}>
            <Image style={styles.image} source={{ uri: holdItem.urlToImage }} />
          </View>
          <Text style={styles.modaldescription}>{holdItem.description}</Text>
          <Text style={styles.modalcontent}>{holdItem.content}</Text>
        </ScrollView>
      </Modal>
    </View>
  );
}
