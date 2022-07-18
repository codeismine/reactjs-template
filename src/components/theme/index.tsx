export interface BasedTheme {
  breakpoints: {
    screen: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    unit: string;
  };
  direction: string;
  palette: {
    common: {
      black: string;
      white: string;
    };
    darkMode: {
      primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      error: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      warning: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      info: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      success: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      divider: string;
      background: {
        paper: string;
        default: string;
      };
      action: {
        active: string;
        hover: string;
        hoverOpacity: number;
        selected: string;
        selectedOpacity: number;
        disabled: string;
        disabledBackground: string;
        disabledOpacity: number;
        focus: string;
        focusOpacity: number;
        activatedOpacity: number;
      };
    };
    lightMode: {
      primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      error: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      warning: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      info: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      success: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      divider: string;
      background: {
        paper: string;
        default: string;
      };
      action: {
        active: string;
        hover: string;
        hoverOpacity: number;
        selected: string;
        selectedOpacity: number;
        disabled: string;
        disabledBackground: string;
        disabledOpacity: number;
        focus: string;
        focusOpacity: number;
        activatedOpacity: number;
      };
    };
    gray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      A100: string;
      A200: string;
      A400: string;
      A700: string;
    };
  };
  spacing: {
    width: string;
    height: string;
  };
  shape: {
    borderRadius: string;
  };
  shadow: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    13: string;
    14: string;
    15: string;
    16: string;
    17: string;
    18: string;
    19: string;
    20: string;
    21: string;
    22: string;
    23: string;
    24: string;
  };
  typography: {
    fontSize: string;
    fontFamily: string;
    lineHeight: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1: {
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    h2: {
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    h3: {
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    h4: {
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    h5: {
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    h6: {
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    subtitle1: {
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    subtitle2: {
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    body1: {
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    body2: {
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    caption: {
      fontWeight: number;
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
  };
  transitions: {
    easing: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
      sharp: string;
    };
    duration: {
      shortest: string;
      shorter: string;
      short: string;
      standard: string;
      complex: string;
      enteringScreen: string;
      leavingScreen: string;
    };
  };
  zIndex: {
    mobileStepper: number;
    fab: number;
    speedDial: number;
    appBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
  };
  custom: {
    primary: {
      main: string;
      dark: string;
      light: string;
    };
    warning: {
      main: string;
    };
    secondary: {
      main: string;
    };
  };
}

export const defaultTheme: BasedTheme = {
  breakpoints: {
    screen: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    unit: "px",
  },
  direction: "ltr",
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    darkMode: {
      primary: {
        main: "#90caf9",
        light: "#e3f2fd",
        dark: "#42a5f5",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      secondary: {
        main: "#ce93d8",
        light: "#f3e5f5",
        dark: "#ab47bc",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      error: {
        main: "#f44336",
        light: "#e57373",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      warning: {
        main: "#ffa726",
        light: "#ffb74d",
        dark: "#f57c00",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      info: {
        main: "#29b6f6",
        light: "#4fc3f7",
        dark: "#0288d1",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      success: {
        main: "#66bb6a",
        light: "#81c784",
        dark: "#388e3c",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#121212",
        default: "#121212",
      },
      action: {
        active: "#fff",
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    },
    lightMode: {
      primary: {
        main: "#1976d2",
        light: "#42a5f5",
        dark: "#1565c0",
        contrastText: "#fff",
      },
      secondary: {
        main: "#9c27b0",
        light: "#ba68c8",
        dark: "#7b1fa2",
        contrastText: "#fff",
      },
      error: {
        main: "#d32f2f",
        light: "#ef5350",
        dark: "#c62828",
        contrastText: "#fff",
      },
      warning: {
        main: "#ed6c02",
        light: "#ff9800",
        dark: "#e65100",
        contrastText: "#fff",
      },
      info: {
        main: "#0288d1",
        light: "#03a9f4",
        dark: "#01579b",
        contrastText: "#fff",
      },
      success: {
        main: "#2e7d32",
        light: "#4caf50",
        dark: "#1b5e20",
        contrastText: "#fff",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: "#fff",
        default: "#fff",
      },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
    gray: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
  },
  spacing: {
    width: "10px",
    height: "10px",
  },
  shape: {
    borderRadius: "6px",
  },
  shadow: {
    0: "none",
    1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    2: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    3: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    4: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    5: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    6: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    7: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    8: "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    9: "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    10: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    11: "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    12: "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    13: "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    14: "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    15: "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    16: "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    17: "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    18: "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    19: "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    20: "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    21: "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    22: "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    23: "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    24: "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  },
  typography: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    lineHeight: 1.6,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562rem",
    },
    h2: {
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.0714em",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: "0.15s",
      shorter: "0.20s",
      short: "0.25s",
      standard: "0.30s",
      complex: "0.375s",
      enteringScreen: "0.225s",
      leavingScreen: "0.195s",
    },
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  custom: {
    primary: {
      main: "#0b0c2a",
      dark: "#070720",
      light: "rgba(255, 255, 255, 0.1)",
    },
    warning: {
      main: "#e53637",
    },
    secondary: {
      main: "#3d3d3d",
    },
  },
};
