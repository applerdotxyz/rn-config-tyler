import React from "react";
import { Button, Dimensions, ScrollView, Text, View } from "react-native";
import { JsonForm } from "../../../components/json-form/JsonForm";
import useSafeSetState from "./useSafeState"; // TODO : Make a folder and add this file in that

export const JsonFormDashboard = (props: {
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

  const _formData = {
    firstName: "Raj",
    lastName: "Shah",
    stype: "Male",
    date: "11-01-2021",
    username: "raj@1234",
    password: "Raj@123",
    "Confirm password": "Raj@123",
    // languages: ["Java", "C"],
    recievemsgs: true,
  };

  const [_schema, setSchema] = useSafeSetState({
    type: "object",
    required: [
      "firstName",
      "lastName",
      "stype",
      "date",
      "username",
      "password",
      "Confirm password",
      "languages",
      "recievemsgs",
    ],
    properties: {
      firstName: { type: "string" },
      lastName: { type: "string" },
      stype: {
        enum: ["Male", "Female", "Others"],
        type: "string",
      },
      date: {
        format: "date",
        type: "string",
        title: "Date",
      },
      username: { type: "string" },
      password: { type: "string" },
      "Confirm password": { type: "string" },
      languages: {
        type: "array",
        items: {
          type: "string",
        },
      },
      recievemsgs: { type: "boolean" },
      upload: {
        format: "data-url",
        type: "string",
      },
      age: {
        type: "integer",
        title: "Age",
      },
    },
  });

  const languages = ["Java", "Python", "C"];

  // // form schema
  const _uiSchema = {
    languages: {
      "ui:title": "Languages Known",
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false,
        minimumNumberOfItems: languages.length,
      },
      items: {
        // The `ui:iterate` allows you to define the uiSchema for each item of the array.
        // The default is to have a list of TextInput.
        "ui:iterate": (i, { values }) => ({
          "ui:title": false,
          "ui:widget": "checkbox",
          "ui:widgetProps": {
            text: languages[i],
            value: languages[i],
            checked: (values.languages || []).includes(languages[i]),
          },
        }),
      },
    },

    recievemsgs: {
      "ui:title": "Are you okay if you recieve emails from our side?",
      "ui:widget": "radio",
      "ui:widgetProps": {
        style: { backgroundColor: "lightgrey" },
      },
      "ui:containerProps": {
        style: { paddingTop: 10 },
      },
    },
    stype: {
      "ui:title": "Gender",
      "ui:placeholder": "Please select your gender",
      "ui:widget": "select",
    },
    date: {
      "ui:widget": "date",
      "ui:title": "Select your Birthdate ",
    },
    upload: {
      "ui:widget": "file",
      "ui:title": "Upload your documents",
    },
    submitButton: false,
    age: {
      "ui:widget": "range",
    },
    //   "background-color":{
    //     'ui:widget':"ColorPicker"
    // },
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={{
        flex: 1,
        borderWidth: 0,
        // minHeight: Dimensions.get("window").height - 85,
        minWidth: Dimensions.get("window").width / 4,
        margin: 2,
      }}
    >
      {/* TODO : Remove before final demo */}
      {/* <Text>{JSON.stringify(props)}</Text> */}
      {/* <Text accessibilityRole="header" style={{ alignSelf: "center" }}>
        Current User is :: {JSON.stringify(state)}
      </Text> */}
      {/* <ConnectedForm controller="person" action="get" /> */}
      {/* <ScrollView>  */}
      {/* Use Grid */}
      <JsonForm
        // schema={formLayout}
        schema={_schema}
        uiSchema={_uiSchema}
        _formData={_formData}
        // _onBeforeSubmit={(e) => {
        //   console.log("*** _onBeforeSubmit ***");
        //   console.log(e);
        // }}
        // _onSubmit={(e) => {
        //   console.log("*** _onSubmit ***");
        //   console.log(e);
        // }}
        // _onError={(e) => {
        //   console.log("*** _onError ***");
        //   console.log(e);
        // }}
        _onSuccess={(e) => {
          console.log("e : : : : ", e);

          // dispatch(updateState());
          // dispatch(updateModuleSelection("Hello", "1233"));
          // dispatch(updateTabSelection("Bolo", "12334"));
          // dispatch(updateActionSelection("Gooo", "893839"));
          // console.log("Hello onSuccess");
          // console.log("state inside JSON FORM : : : : ", state);

          // props.navigation.navigate("First");
        }}
        // _onChange={(e) => {
        //   console.log("data changed");
        // }}
      />
      {/* </ScrollView> */}

      {/* <Link
        style={{
          backgroundColor: "blue",
          width: 50,
          height: 50,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
        to="/First"
      >
        Go
      </Link> */}
      {children || (appState && appState[label] && appState[label]?.children)}
    </ScrollView>
  );
};
