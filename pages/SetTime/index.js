import { Text } from "../../components/Text/styles";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { ButtonsView, Container, StartButton, TimeView } from "./styles";
import moment from "moment";
import { useState, useEffect } from "react";
import { View, Button } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export const SetTime = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [canCount, setCanCount] = useState(false);
  // const momemt = moment()

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setCanCount(false);
        clearInterval(intervalId);
      } else {
        if (!canCount) {
          return;
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
          }
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);
    console.log(hours, minutes, seconds);
    return () => clearInterval(intervalId);
  }, [hours, minutes, seconds, canCount]);

  const saveTimeAfterUse = async (time = {}) => {
    try {
      await AsyncStorage.setItem("@time-saved", JSON.stringify(time));
      setCanCount(true);
      return time;
    } catch (error) {
      setCanCount(true);
      return time;
    }
  };

  const stopCount = () => {
    setCanCount(false);
  };

  const checkIfCanChange = (paramVoid) => {
    if (hours > 23 || hours < 0) {
      return setHours(0);
    }
    if (minutes < 0 || minutes > 59) {
      return setMinutes(0);
    }
    if (seconds < 0 || seconds > 59) {
      return setSeconds(0);
    }
    paramVoid.exec();
  };

  const turnOffWifi = () => {};
  return (
    <Container>
      <TimeView>
        <AntDesign
          style={{ padding: 20 }}
          name="caretup"
          size={24}
          color="white"
          onPress={() => {
            if (hours === 23) {
              return checkIfCanChange({
                exec: () => {
                  setHours(0);
                },
              });
            } else {
              checkIfCanChange({
                exec: () => {
                  setHours(hours + 1);
                },
              });
            }
          }}
        />
        <Text>{hours}</Text>
        <AntDesign
          style={{ padding: 20 }}
          name="caretdown"
          size={24}
          color="white"
          onPress={() => {
            if (hours === 0) {
              return checkIfCanChange({
                exec: () => {
                  setHours(23);
                },
              });
            } else {
              checkIfCanChange({
                exec: () => {
                  setHours(hours - 1);
                },
              });
            }
          }}
        />
        <Text>Horas</Text>
      </TimeView>
      <TimeView>
        <AntDesign
          style={{ padding: 20 }}
          name="caretup"
          size={24}
          color="white"
          onPress={() => {
            if (minutes === 59) {
              return checkIfCanChange({
                exec: () => {
                  setMinutes(0);
                },
              });
            } else {
              checkIfCanChange({
                exec: () => {
                  setMinutes(minutes + 1);
                },
              });
            }
          }}
        />
        <Text>{minutes}</Text>
        <AntDesign
          style={{ padding: 20 }}
          name="caretdown"
          size={24}
          color="white"
          onPress={() => {
            if (minutes === 0) {
              return checkIfCanChange({
                exec: () => {
                  setMinutes(59);
                },
              });
            } else {
              checkIfCanChange({
                exec: () => {
                  setMinutes(minutes - 1);
                },
              });
            }
          }}
        />
        <Text>Minutos</Text>
      </TimeView>
      <TimeView>
        <AntDesign
          style={{ padding: 20 }}
          name="caretup"
          size={24}
          color="white"
          onPress={() => {
            if (seconds === 59) {
              return checkIfCanChange({
                exec: () => {
                  setSeconds(0);
                },
              });
            } else {
              checkIfCanChange({
                exec: () => {
                  setSeconds(seconds + 1);
                },
              });
            }
          }}
        />
        <Text>{seconds}</Text>
        <AntDesign
          style={{ padding: 20 }}
          name="caretdown"
          size={24}
          color="white"
          onPress={() => {
            if (seconds === 0) {
              return checkIfCanChange({
                exec: () => {
                  setSeconds(59);
                },
              });
            } else {
              checkIfCanChange({
                exec: () => {
                  setSeconds(seconds - 1);
                },
              });
            }
          }}
        />
        <Text>Segundos</Text>
      </TimeView>
      <ButtonsView>
        <Button
          title="Start"
          onPress={() => {
            saveTimeAfterUse({
              hours: hours,
              minutes: minutes,
              seconds: seconds,
            });
          }}
        ></Button>
        <Button title="Pause" onPress={stopCount}></Button>
        <Button title="Stop" onPress={stopCount}></Button>
      </ButtonsView>
    </Container>
  );
};
