import React from "react";
import { Container, ViewStyled } from "./styles";
import { Text } from "../../components/Text/styles";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Home = ({navigation}) => {
  return (
    <Container>
      <ViewStyled
        onTouchStart={() => {
          navigation.navigate('Set-Time');
        }}
      >
        <Fontisto name="hourglass" size={48} color="white" />
        <Text style={{ paddingLeft: 6 }}>Agendar horário</Text>
      </ViewStyled>
      <ViewStyled
        onTouchStart={() => {
          navigation.navigate('Schedule-Time')
        }}
      >
        <MaterialIcons name="timer" size={48} color="white" />
        <Text>Cronometrar horário</Text>
      </ViewStyled>
    </Container>
  );
};

export default Home;
