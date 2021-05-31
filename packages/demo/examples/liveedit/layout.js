import React from "react";
import { Text } from "react-native";
import { About } from "../../components/About";
import { ActionComp } from "../../components/ActionComp";
import { Comp5 } from "../../components/Comp5";
import { Home } from "../../components/Home";
import { RandomPic } from "../../components/RandomPic";
import { styles } from "../common";

// All component which will be rendered
export const componentsSet = {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic,
};

export const routes = {};

export const appConfig = {
  tw: true,
  componentsSet,
  "layout": {
    "0": {
      "0": {
        "layout": {
          "0": {
            "0": {
              "idx": "Home",
              "label": "left-nav",
              "colClass": "bg-blue-500 p-1 text-sm text-red",
              "size": 30
            }
          },
          "1": {
            "0": {
              "idx": "Home",
              "label": "body",
              "colClass": "bg-red-300 p-3 text-3xl y-10 bg-blue-light rounded font-bold text-red text-sm  flex",
              "size": 70
            }
          },
          "layoutConfig": {
            "layoutClass": "py-1 rounded bg-red-100 p-1 mr-3 ",
            "size": 20
          }
        }
      },
      "1": {
        "layout": {
          "0": {
            "0": {
              "layout": {
                "0": {
                  "0": {
                    "idx": "Home",
                    "label": "left-nav",
                    "colClass": "bg-blue-300 p-1 text-2xl"
                  }
                },
                "1": {
                  "0": {
                    "idx": "About",
                    "label": "left-nav",
                    "colClass": "bg-blue-500 p-1 text-2xl"
                  },
                  "1": {
                    "idx": "Home",
                    "label": "body",
                    "colClass": "bg-gray-300 p-1 text-2xl"
                  }
                },
                "layoutConfig": {
                  "layoutClass": "py-1 bg-yellow-100 p-1 "
                }
              }
            }
          },
          "1": {
            "0": {
              "layout": {
                "0": {
                  "0": {
                    "idx": "Home",
                    "label": "body",
                    "colClass": "bg-green-300 p-1 text-2xl"
                  },
                  "1": {
                    "idx": "Home",
                    "label": "left-nav",
                    "colClass": "bg-blue-500 p-1 text-2xl"
                  }
                },
                "1": {
                  "0": {
                    "idx": "Home",
                    "label": "left-nav",
                    "colClass": "bg-green-500 p-1 text-2xl"
                  }
                },
                "layoutConfig": {
                  "layoutClass": "py-1 bg-yellow-100 p-1 ",
                  "size": 30
                }
              }
            },
            "1": {
              "layout": {
                "0": {
                  "0": {
                    "idx": "Home",
                    "label": "body",
                    "colClass": "bg-green-300 p-1 text-2xl"
                  },
                  "1": {
                    "idx": "Home",
                    "label": "left-nav",
                    "colClass": "bg-pink-500 p-1 text-2xl"
                  }
                },
                "1": {
                  "0": {
                    "idx": "Home",
                    "label": "left-nav",
                    "colClass": "bg-yellow-500 p-1 text-2xl"
                  }
                },
                "layoutConfig": {
                  "layoutClass": "py-1 bg-yellow-100 p-1 ",
                  "size": 70
                }
              }
            }
          },
          "layoutConfig": {
            "layoutClass": "py-1 bg-yellow-100 p-1 ",
            "size": 80
          }
        }
      }
    },
    "layoutConfig": {
      "layoutClass": "py-1 rounded bg-red-100 p-1 mr-3 "
    }
  }
};

// *************************************************
//  "../applications/app-one/screen-one";
// *************************************************
// bind events to
//  logic that binds

export const events = {
  /// <label>
  //<label>-<element-id> : <handler>
  "leftNavHeader-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      // setLayoutConfig(routes["routeTwo"]);
      setAppState({
        bodyFooter: {
          ui: "ActionComp",
          props: { label: "bodyFooter" },
          children: <Text>Hello from RandomPic</Text>,
        },
        bodyContent: {
          ui: "RandomPic",
          props: { label: "actioncomp-1" },
          children: null,
        },
      });
    },
  },
  //<label>-<element-id>
  "leftNavHeader-btn-two": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      setLayoutConfig(routes["routeOne"]);
    },
  },

  // <label>
  "leftNavBody-btn-two": {},
  "leftNavBody-btn-one": {},
};

// *************************************************
//  Helper Util
// *************************************************
// bind events based on the layout config
export const getEvents = (elId, setLayoutConfig, setAppState) => {
  const elEvents = {};
  events[elId] &&
    Object.keys(events[elId]).map((eventName) => {
      // console.log({ [eventName]: events[elId][eventName] });
      elEvents[eventName] = () =>
        events[elId] && events[elId][eventName] && events[elId][eventName]
          ? events[elId][eventName](setLayoutConfig, setAppState)
          : {};
    });
  // console.log(elEvents);
  return elEvents;
};
