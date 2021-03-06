import React, { useState } from "react";
import { Text, View } from "react-native";
import { TabComponent } from "../../../components/TabComponent/index";

export const TabDashboard = (props: {
  appState: any;
  label: any;
  styles: any;
  children: any;
  setAppState: any;
  layoutConfig: any;
  setLayoutConfig: any;
  getEvents: any;
  events: any;
}) => {
  const {
    appState,
    label,
    styles,
    children,
    setAppState,
    layoutConfig,
    setLayoutConfig,
    getEvents,
  } = props;

  // console.log(`label is ${label}`);
  // console.log(getEvents(`${label}-btn-one`, setLayoutConfig, setAppState));
  const [data, setdata] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       `http://localhost:8080/transaction-web
  //       /v1/schema/modulelayout`,
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           userId: "TsdAdmin",
  //           roleKey: 1,
  //         }),
  //       }
  //     );
  //     const resJSON = await res.json();
  //   };
  //   fetchData();
  // }, []);

  return (
    <View>
      <Text style={{}}>TabDashboard *** {label}</Text>
      {/* <Button
        testID={`${label}-btn-one`}
        title="ACT"
        {...getEvents(`${label}-btn-one`, setLayoutConfig, setAppState)}
      ></Button> */}
      {/* TODO : TABComponent is not generic yet
       */}
      <TabComponent props={props}></TabComponent>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
