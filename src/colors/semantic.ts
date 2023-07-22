import type { SemanticTokens } from "@pandacss/types";

export const semanticColors = {
  white: {
    value: {
      _dark: "{colors.white.500}",
      _light: "{colors.white.500}",
      _amoled: "{colors.white.500}",
    },
  },
  black: {
    value: {
      _dark: "{colors.black.500}",
      _light: "{colors.black.500}",
      _amoled: "{colors.black.500}",
    },
  },
  header: {
    primary: {
      value: {
        _dark: "{colors.primary.130}",
        _light: "{colors.primary.860}",
        _amoled: "{colors.primary.130}",
      },
    },
    secondary: {
      value: {
        _dark: "{colors.primary.330}",
        _light: "{colors.primary.500}",
        _amoled: "{colors.primary.345}",
      },
    },
  },
  text: {
    normal: {
      value: {
        _dark: "{colors.primary.230}",
        _light: "{colors.primary.600}",
        _amoled: "{colors.primary.300}",
      },
    },
    muted: {
      value: {
        _dark: "{colors.primary.360}",
        _light: "{colors.primary.460}",
        _amoled: "{colors.primary.345}",
      },
    },
    link: {
      value: {
        _dark: "{colors.blue.345}",
        _light: "{colors.blue.430}",
        _amoled: "{colors.blue.345}",
      },
      low: {
        saturation: {
          value: {
            _dark: "{colors.blue.330}",
            _light: "{colors.blue.430}",
            _amoled: "{colors.blue.330}",
          },
        },
      },
    },
    positive: {
      value: {
        _dark: "{colors.green.330}",
        _light: "{colors.green.430}",
        _amoled: "{colors.green.330}",
      },
    },
    warning: {
      value: {
        _dark: "{colors.yellow.300}",
        _light: "{colors.yellow.430}",
        _amoled: "{colors.yellow.300}",
      },
    },
    danger: {
      value: {
        _dark: "{colors.red.345}",
        _light: "{colors.red.500}",
        _amoled: "{colors.red.345}",
      },
    },
    brand: {
      value: {
        _dark: "{colors.brand.360}",
        _light: "{colors.brand.500}",
        _amoled: "{colors.brand.360}",
      },
    },
  },
  interactive: {
    normal: {
      value: {
        _dark: "{colors.primary.330}",
        _light: "{colors.primary.500}",
        _amoled: "{colors.primary.345}",
      },
    },
    hover: {
      value: {
        _dark: "{colors.primary.230}",
        _light: "{colors.primary.600}",
        _amoled: "{colors.primary.230}",
      },
    },
    active: {
      value: {
        _dark: "{colors.white.500}",
        _light: "{colors.primary.860}",
        _amoled: "{colors.white.500}",
      },
    },
    muted: {
      value: {
        _dark: "{colors.primary.500}",
        _light: "{colors.primary.300}",
        _amoled: "{colors.primary.500}",
      },
    },
  },
  background: {
    primary: {
      value: {
        _dark: "{colors.primary.600}",
        _light: "{colors.white.500}",
        _amoled: "{colors.primary.900}",
      },
    },
    secondary: {
      value: {
        _dark: "{colors.primary.630}",
        _light: "{colors.primary.130}",
        _amoled: "{colors.primary.830}",
      },
      alt: {
        value: {
          _dark: "{colors.primary.660}",
          _light: "{colors.primary.160}",
          _amoled: "{colors.primary.800}",
        },
      },
    },
    tertiary: {
      value: {
        _dark: "{colors.primary.700}",
        _light: "{colors.primary.200}",
        _amoled: "{colors.primary.860}",
      },
    },
    accent: {
      value: {
        _dark: "{colors.primary.530}",
        _light: "{colors.primary.430}",
        _amoled: "{colors.primary.760}",
      },
    },
    floating: {
      value: {
        _dark: "{colors.primary.800}",
        _light: "{colors.white.500}",
        _amoled: "{colors.primary.830}",
      },
    },
    nested: {
      floating: {
        value: {
          _dark: "{colors.primary.630}",
          _light: "{colors.white.500}",
          _amoled: "{colors.primary.830}",
        },
      },
    },
    mobile: {
      primary: {
        value: {
          _dark: "{colors.primary.600}",
          _light: "{colors.primary.100}",
          _amoled: "{colors.black.500}",
        },
      },
      secondary: {
        value: {
          _dark: "{colors.primary.630}",
          _light: "{colors.white.500}",
          _amoled: "{colors.primary.860}",
        },
      },
    },
    modifier: {
      hover: {
        value: {
          _dark: "rgba(78, 80, 88, 0.3)",
          _light: "rgba(128, 132, 142, 0.16)",
          _amoled: "rgba(56, 58, 64, 0.4)",
        },
      },
      active: {
        value: {
          _dark: "rgba(78, 80, 88, 0.48)",
          _light: "rgba(128, 132, 142, 0.2)",
          _amoled: "rgba(56, 58, 64, 0.48)",
        },
      },
      selected: {
        value: {
          _dark: "rgba(78, 80, 88, 0.6)",
          _light: "rgba(128, 132, 142, 0.24)",
          _amoled: "rgba(56, 58, 64, 0.6)",
        },
      },
      accent: {
        value: {
          _dark: "rgba(78, 80, 88, 0.48)",
          _light: "rgba(128, 132, 142, 0.24)",
          _amoled: "rgba(56, 58, 64, 0.48)",
        },
      },
    },
    mentioned: {
      value: {
        _dark: "rgba(240, 178, 50, 0.1)",
        _light: "rgba(240, 178, 50, 0.1)",
        _amoled: "rgba(240, 178, 50, 0.1)",
      },
      hover: {
        value: {
          _dark: "rgba(240, 178, 50, 0.08)",
          _light: "rgba(240, 178, 50, 0.2)",
          _amoled: "rgba(240, 178, 50, 0.08)",
        },
      },
    },
    message: {
      hover: {
        value: {
          _dark: "rgba(2, 2, 2, 0.06)",
          _light: "rgba(2, 2, 2, 0.03)",
          _amoled: "rgba(2, 2, 2, 0.06)",
        },
      },
      automod: {
        value: {
          _dark: "rgba(242, 63, 67, 0.05)",
          _light: "rgba(242, 63, 67, 0.05)",
          _amoled: "rgba(242, 63, 67, 0.05)",
        },
        hover: {
          value: {
            _dark: "rgba(242, 63, 67, 0.1)",
            _light: "rgba(242, 63, 67, 0.1)",
            _amoled: "rgba(242, 63, 67, 0.1)",
          },
        },
      },
      highlight: {
        value: {
          _dark: "rgba(148, 156, 247, 0.08)",
          _light: "rgba(148, 156, 247, 0.1)",
          _amoled: "rgba(148, 156, 247, 0.08)",
        },
        hover: {
          value: {
            _dark: "rgba(148, 156, 247, 0.06)",
            _light: "rgba(148, 156, 247, 0.2)",
            _amoled: "rgba(148, 156, 247, 0.06)",
          },
        },
      },
    },
  },
  home: {
    background: {
      value: {
        _dark: "{colors.primary.645}",
        _light: "{colors.primary.100}",
        _amoled: "{colors.primary.760}",
      },
    },
    card: {
      resting: {
        border: {
          value: {
            _dark: "{colors.transparent}",
            _light: "rgba(128, 132, 142, 0.24)",
            _amoled: "{colors.transparent}",
          },
        },
      },
    },
  },
  status: {
    positive: {
      value: {
        _dark: "{colors.green.360}",
        _light: "{colors.green.400}",
        _amoled: "{colors.green.360}",
      },
    },
    warning: {
      value: {
        _dark: "{colors.yellow.300}",
        _light: "{colors.yellow.400}",
        _amoled: "{colors.yellow.300}",
      },
    },
    danger: {
      value: {
        _dark: "{colors.red.400}",
        _light: "{colors.red.430}",
        _amoled: "{colors.red.400}",
      },
    },
  },
  border: {
    subtle: {
      value: {
        _dark: "rgba(255, 255, 255, 0.08)",
        _light: "rgba(0, 0, 0, 0.08)",
        _amoled: "rgba(255, 255, 255, 0.08)",
      },
    },
    strong: {
      value: {
        _dark: "rgba(255, 255, 255, 0.16)",
        _light: "rgba(0, 0, 0, 0.16)",
        _amoled: "rgba(255, 255, 255, 0.16)",
      },
    },
  },
  divider: {
    subtle: {
      value: {
        _dark: "rgba(255, 255, 255, 0.08)",
        _light: "rgba(0, 0, 0, 0.08)",
        _amoled: "rgba(255, 255, 255, 0.08)",
      },
    },
    strong: {
      value: {
        _dark: "rgba(255, 255, 255, 0.16)",
        _light: "rgba(0, 0, 0, 0.16)",
        _amoled: "rgba(255, 255, 255, 0.16)",
      },
    },
  },
  channels: {
    default: {
      value: {
        _dark: "{colors.primary.360}",
        _light: "{colors.primary.460}",
        _amoled: "{colors.primary.360}",
      },
    },
  },
  channel: {
    icon: {
      value: {
        _dark: "{colors.primary.400}",
        _light: "{colors.primary.430}",
        _amoled: "{colors.primary.400}",
      },
    },
    text: {
      area: {
        placeholder: {
          value: {
            _dark: "{colors.primary.430}",
            _light: "{colors.primary.400}",
            _amoled: "{colors.primary.400}",
          },
        },
      },
    },
  },
  chat: {
    background: {
      value: {
        _dark: "{colors.primary.600}",
        _light: "{colors.white.500}",
        _amoled: "{colors.black.500}",
      },
    },
    border: {
      value: {
        _dark: "{colors.primary.700}",
        _light: "{colors.primary.200}",
        _amoled: "{colors.primary.700}",
      },
    },
    input: {
      container: {
        background: {
          value: {
            _dark: "{colors.primary.600}",
            _light: "{colors.white.500}",
            _amoled: "{colors.primary.600}",
          },
        },
      },
    },
  },
  textbox: {
    markdown: {
      syntax: {
        value: {
          _dark: "{colors.primary.360}",
          _light: "{colors.primary.530}",
          _amoled: "{colors.primary.360}",
        },
      },
    },
  },
  spoiler: {
    revealed: {
      background: {
        value: {
          _dark: "{colors.primary.660}",
          _light: "{colors.primary.160}",
          _amoled: "{colors.primary.660}",
        },
      },
    },
    hidden: {
      background: {
        value: {
          _dark: "{colors.primary.700}",
          _light: "{colors.primary.200}",
          _amoled: "{colors.primary.700}",
        },
      },
    },
  },
  mention: {
    foreground: {
      value: {
        _dark: "{colors.brand.260}",
        _light: "{colors.brand.500}",
        _amoled: "{colors.brand.260}",
      },
    },
    background: {
      value: {
        _dark: "rgba(88, 101, 242, 0.3)",
        _light: "rgba(88, 101, 242, 0.15)",
        _amoled: "rgba(88, 101, 242, 0.3)",
      },
    },
  },
  control: {
    brand: {
      foreground: {
        value: {
          _dark: "{colors.brand.360}",
          _light: "{colors.brand.500}",
          _amoled: "{colors.brand.360}",
        },
        new: {
          value: {
            _dark: "{colors.brand.360}",
            _light: "{colors.brand.500}",
            _amoled: "{colors.brand.360}",
          },
        },
      },
    },
  },
  deprecated: {
    card: {
      bg: {
        value: {
          _dark: "rgba(30, 31, 34, 0.6)",
          _light: "{colors.primary.100}",
          _amoled: "rgba(30, 31, 34, 0.6)",
        },
      },
      editable: {
        bg: {
          value: {
            _dark: "rgba(30, 31, 34, 0.3)",
            _light: "rgba(249, 249, 249, 0.6)",
            _amoled: "rgba(30, 31, 34, 0.3)",
          },
        },
      },
    },
    store: {
      bg: {
        value: {
          _dark: "{colors.primary.600}",
          _light: "{colors.primary.100}",
          _amoled: "{colors.primary.600}",
        },
      },
    },
    quickswitcher: {
      input: {
        background: {
          value: {
            _dark: "{colors.primary.400}",
            _light: "{colors.white.500}",
            _amoled: "{colors.primary.400}",
          },
        },
        placeholder: {
          value: {
            _dark: "rgba(255, 255, 255, 0.3)",
            _light: "rgba(78, 80, 88, 0.3)",
            _amoled: "rgba(255, 255, 255, 0.3)",
          },
        },
      },
    },
    text: {
      input: {
        bg: {
          value: {
            _dark: "{colors.primary.700}",
            _light: "{colors.primary.200}",
            _amoled: "{colors.primary.700}",
          },
        },
        border: {
          value: {
            _dark: "rgba(0, 0, 0, 0.3)",
            _light: "rgba(78, 80, 88, 0.3)",
            _amoled: "rgba(0, 0, 0, 0.3)",
          },
          hover: {
            value: {
              _dark: "{colors.primary.900}",
              _light: "{colors.primary.300}",
              _amoled: "{colors.primary.900}",
            },
          },
          disabled: {
            value: {
              _dark: "{colors.primary.700}",
              _light: "{colors.primary.200}",
              _amoled: "{colors.primary.700}",
            },
          },
        },
        prefix: {
          value: {
            _dark: "{colors.primary.200}",
            _light: "{colors.primary.300}",
            _amoled: "{colors.primary.200}",
          },
        },
      },
    },
  },
  button: {
    danger: {
      background: {
        value: {
          _dark: "{colors.red.430}",
          _light: "{colors.red.430}",
          _amoled: "{colors.red.430}",
        },
        hover: {
          value: {
            _dark: "{colors.red.500}",
            _light: "{colors.red.500}",
            _amoled: "{colors.red.500}",
          },
        },
        active: {
          value: {
            _dark: "{colors.red.530}",
            _light: "{colors.red.530}",
            _amoled: "{colors.red.530}",
          },
        },
        disabled: {
          value: {
            _dark: "{colors.red.430}",
            _light: "{colors.red.430}",
            _amoled: "{colors.red.430}",
          },
        },
      },
    },
    positive: {
      background: {
        value: {
          _dark: "{colors.green.430}",
          _light: "{colors.green.430}",
          _amoled: "{colors.green.430}",
        },
        hover: {
          value: {
            _dark: "{colors.green.500}",
            _light: "{colors.green.530}",
            _amoled: "{colors.green.530}",
          },
        },
        active: {
          value: {
            _dark: "{colors.green.530}",
            _light: "{colors.green.530}",
            _amoled: "{colors.green.530}",
          },
        },
        disabled: {
          value: {
            _dark: "{colors.green.430}",
            _light: "{colors.green.430}",
            _amoled: "{colors.green.430}",
          },
        },
      },
    },
    secondary: {
      background: {
        value: {
          _dark: "{colors.primary.500}",
          _light: "{colors.primary.430}",
          _amoled: "{colors.primary.500}",
        },
        hover: {
          value: {
            _dark: "{colors.primary.430}",
            _light: "{colors.primary.500}",
            _amoled: "{colors.primary.430}",
          },
        },
        active: {
          value: {
            _dark: "{colors.primary.400}",
            _light: "{colors.primary.530}",
            _amoled: "{colors.primary.400}",
          },
        },
        disabled: {
          value: {
            _dark: "{colors.primary.500}",
            _light: "{colors.primary.430}",
            _amoled: "{colors.primary.500}",
          },
        },
      },
    },
    outline: {
      danger: {
        text: {
          value: {
            _dark: "{colors.white.500}",
            _light: "{colors.black.500}",
            _amoled: "{colors.white.500}",
          },
          hover: {
            value: {
              _dark: "{colors.white.500}",
              _light: "{colors.white.500}",
              _amoled: "{colors.white.500}",
            },
          },
          active: {
            value: {
              _dark: "{colors.white.500}",
              _light: "{colors.white.500}",
              _amoled: "{colors.white.500}",
            },
          },
        },
        border: {
          value: {
            _dark: "{colors.red.400}",
            _light: "{colors.red.430}",
            _amoled: "{colors.red.400}",
          },
          hover: {
            value: {
              _dark: "{colors.red.430}",
              _light: "{colors.red.430}",
              _amoled: "{colors.red.430}",
            },
          },
          active: {
            value: {
              _dark: "{colors.red.430}",
              _light: "{colors.red.430}",
              _amoled: "{colors.red.430}",
            },
          },
        },
        background: {
          value: {
            _dark: "rgba(255, 255, 255, 0)",
            _light: "rgba(255, 255, 255, 0)",
            _amoled: "rgba(255, 255, 255, 0)",
          },
          hover: {
            value: {
              _dark: "{colors.red.430}",
              _light: "{colors.red.430}",
              _amoled: "{colors.red.430}",
            },
          },
          active: {
            value: {
              _dark: "{colors.red.460}",
              _light: "{colors.red.460}",
              _amoled: "{colors.red.460}",
            },
          },
        },
      },
      positive: {
        text: {
          value: {
            _dark: "{colors.white.500}",
            _light: "{colors.black.500}",
            _amoled: "{colors.white.500}",
          },
          hover: {
            value: {
              _dark: "{colors.white.500}",
              _light: "{colors.white.500}",
              _amoled: "{colors.white.500}",
            },
          },
          active: {
            value: {
              _dark: "{colors.white.500}",
              _light: "{colors.white.500}",
              _amoled: "{colors.white.500}",
            },
          },
        },
        border: {
          value: {
            _dark: "{colors.green.360}",
            _light: "{colors.green.400}",
            _amoled: "{colors.green.360}",
          },
          hover: {
            value: {
              _dark: "{colors.green.430}",
              _light: "{colors.green.430}",
              _amoled: "{colors.green.430}",
            },
          },
          active: {
            value: {
              _dark: "{colors.green.530}",
              _light: "{colors.green.530}",
              _amoled: "{colors.green.530}",
            },
          },
        },
        background: {
          value: {
            _dark: "rgba(255, 255, 255, 0)",
            _light: "rgba(255, 255, 255, 0)",
            _amoled: "rgba(255, 255, 255, 0)",
          },
          hover: {
            value: {
              _dark: "{colors.green.430}",
              _light: "{colors.green.430}",
              _amoled: "{colors.green.430}",
            },
          },
          active: {
            value: {
              _dark: "{colors.green.530}",
              _light: "{colors.green.530}",
              _amoled: "{colors.green.530}",
            },
          },
        },
      },
      brand: {
        text: {
          value: {
            _dark: "{colors.white.500}",
            _light: "{colors.black.500}",
            _amoled: "{colors.white.500}",
          },
          hover: {
            value: {
              _dark: "{colors.white.500}",
              _light: "{colors.white.500}",
              _amoled: "{colors.white.500}",
            },
          },
          active: {
            value: {
              _dark: "{colors.white.500}",
              _light: "{colors.white.500}",
              _amoled: "{colors.white.500}",
            },
          },
        },
        border: {
          value: {
            _dark: "{colors.brand.500}",
            _light: "{colors.brand.500}",
            _amoled: "{colors.brand.500}",
          },
          hover: {
            value: {
              _dark: "{colors.brand.500}",
              _light: "{colors.brand.500}",
              _amoled: "{colors.brand.500}",
            },
          },
          active: {
            value: {
              _dark: "{colors.brand.560}",
              _light: "{colors.brand.560}",
              _amoled: "{colors.brand.560}",
            },
          },
        },
        background: {
          value: {
            _dark: "rgba(255, 255, 255, 0)",
            _light: "rgba(255, 255, 255, 0)",
            _amoled: "rgba(255, 255, 255, 0)",
          },
          hover: {
            value: {
              _dark: "{colors.brand.500}",
              _light: "{colors.brand.500}",
              _amoled: "{colors.brand.500}",
            },
          },
          active: {
            value: {
              _dark: "{colors.brand.560}",
              _light: "{colors.brand.560}",
              _amoled: "{colors.brand.560}",
            },
          },
        },
      },
      primary: {
        text: {
          value: {
            _dark: "{colors.white.500}",
            _light: "{colors.black.500}",
            _amoled: "{colors.white.500}",
          },
          hover: {
            value: {
              _dark: "{colors.white.500}",
              _light: "{colors.white.500}",
              _amoled: "{colors.white.500}",
            },
          },
          active: {
            value: {
              _dark: "{colors.white.500}",
              _light: "{colors.white.500}",
              _amoled: "{colors.white.500}",
            },
          },
        },
        border: {
          value: {
            _dark: "{colors.primary.500}",
            _light: "{colors.primary.530}",
            _amoled: "{colors.primary.500}",
          },
          hover: {
            value: {
              _dark: "{colors.primary.500}",
              _light: "{colors.primary.530}",
              _amoled: "{colors.primary.500}",
            },
          },
          active: {
            value: {
              _dark: "{colors.primary.430}",
              _light: "{colors.primary.600}",
              _amoled: "{colors.primary.430}",
            },
          },
        },
        background: {
          value: {
            _dark: "rgba(255, 255, 255, 0)",
            _light: "rgba(255, 255, 255, 0)",
            _amoled: "rgba(255, 255, 255, 0)",
          },
          hover: {
            value: {
              _dark: "{colors.primary.500}",
              _light: "{colors.primary.530}",
              _amoled: "{colors.primary.500}",
            },
          },
          active: {
            value: {
              _dark: "{colors.primary.430}",
              _light: "{colors.primary.600}",
              _amoled: "{colors.primary.430}",
            },
          },
        },
      },
    },
  },
  redesign: {
    button: {
      primary: {
        background: {
          value: {
            _dark: "{colors.brand.500}",
            _light: "{colors.brand.500}",
            _amoled: "{colors.brand.500}",
          },
        },
        pressed: {
          background: {
            value: {
              _dark: "{colors.brand.600}",
              _light: "{colors.brand.600}",
              _amoled: "{colors.brand.600}",
            },
          },
        },
      },
      secondary: {
        border: {
          value: {
            _dark: "rgba(255, 255, 255, 0.2)",
            _light: "rgba(0, 0, 0, 0.08)",
            _amoled: "rgba(255, 255, 255, 0.2)",
          },
        },
        pressed: {
          background: {
            value: {
              _dark: "{colors.primary.700}",
              _light: "{colors.primary.230}",
              _amoled: "{colors.primary.700}",
            },
          },
        },
      },
      danger: {
        background: {
          value: {
            _dark: "{colors.red.430}",
            _light: "{colors.red.430}",
            _amoled: "{colors.red.430}",
          },
        },
        pressed: {
          background: {
            value: {
              _dark: "{colors.red.500}",
              _light: "{colors.red.500}",
              _amoled: "{colors.red.500}",
            },
          },
        },
      },
      positive: {
        background: {
          value: {
            _dark: "{colors.green.430}",
            _light: "{colors.green.430}",
            _amoled: "{colors.green.430}",
          },
        },
        pressed: {
          background: {
            value: {
              _dark: "{colors.green.500}",
              _light: "{colors.green.500}",
              _amoled: "{colors.green.500}",
            },
          },
        },
      },
      floating: {
        background: {
          value: {
            _dark: "{colors.white.500}",
            _light: "{colors.white.500}",
            _amoled: "{colors.white.500}",
          },
        },
        pressed: {
          background: {
            value: {
              _dark: "{colors.primary.730}",
              _light: "{colors.primary.730}",
              _amoled: "{colors.primary.730}",
            },
          },
        },
      },
    },
  },
  input: {
    background: {
      value: {
        _dark: "{colors.primary.700}",
        _light: "{colors.primary.200}",
        _amoled: "{colors.primary.700}",
      },
    },
    placeholder: {
      text: {
        value: {
          _dark: "{colors.input-placeholder-text-dark}",
          _light: "{colors.primary.560}",
          _amoled: "{colors.input-placeholder-text-dark}",
        },
      },
    },
  },
  info: {
    positive: {
      background: {
        value: {
          _dark: "rgba(35, 165, 90, 0.1)",
          _light: "rgba(36, 147, 78, 0.05)",
          _amoled: "rgba(35, 165, 90, 0.1)",
        },
      },
      foreground: {
        value: {
          _dark: "{colors.green.360}",
          _light: "{colors.green.400}",
          _amoled: "{colors.green.360}",
        },
      },
      text: {
        value: {
          _dark: "{colors.white.500}",
          _light: "{colors.black.500}",
          _amoled: "{colors.white.500}",
        },
      },
    },
    warning: {
      background: {
        value: {
          _dark: "rgba(240, 178, 50, 0.1)",
          _light: "rgba(175, 118, 21, 0.1)",
          _amoled: "rgba(240, 178, 50, 0.1)",
        },
      },
      foreground: {
        value: {
          _dark: "{colors.yellow.300}",
          _light: "{colors.yellow.400}",
          _amoled: "{colors.yellow.300}",
        },
      },
      text: {
        value: {
          _dark: "{colors.white.500}",
          _light: "{colors.black.500}",
          _amoled: "{colors.white.500}",
        },
      },
    },
    danger: {
      background: {
        value: {
          _dark: "rgba(242, 63, 67, 0.1)",
          _light: "rgba(218, 55, 60, 0.1)",
          _amoled: "rgba(242, 63, 67, 0.1)",
        },
      },
      foreground: {
        value: {
          _dark: "{colors.red.400}",
          _light: "{colors.red.430}",
          _amoled: "{colors.red.400}",
        },
      },
      text: {
        value: {
          _dark: "{colors.white.500}",
          _light: "{colors.black.500}",
          _amoled: "{colors.white.500}",
        },
      },
    },
    help: {
      background: {
        value: {
          _dark: "rgba(0, 170, 252, 0.1)",
          _light: "rgba(0, 107, 231, 0.1)",
          _amoled: "rgba(0, 170, 252, 0.1)",
        },
      },
      foreground: {
        value: {
          _dark: "{colors.blue.345}",
          _light: "{colors.blue.430}",
          _amoled: "{colors.blue.345}",
        },
      },
      text: {
        value: {
          _dark: "{colors.white.500}",
          _light: "{colors.black.500}",
          _amoled: "{colors.white.500}",
        },
      },
    },
    box: {
      background: {
        value: {
          _dark: "rgba(0, 170, 252, 0.1)",
          _light: "rgba(0, 170, 252, 0.1)",
          _amoled: "rgba(0, 170, 252, 0.1)",
        },
      },
    },
  },
  channeltextarea: {
    background: {
      value: {
        _dark: "{colors.primary.560}",
        _light: "{colors.primary.160}",
        _amoled: "{colors.primary.800}",
      },
    },
  },
  activity: {
    card: {
      background: {
        value: {
          _dark: "{colors.primary.700}",
          _light: "{colors.white.500}",
          _amoled: "{colors.primary.700}",
        },
      },
    },
  },
  logo: {
    primary: {
      value: {
        _dark: "{colors.white.500}",
        _light: "{colors.brand.500}",
        _amoled: "{colors.white.500}",
      },
    },
  },
  focus: {
    primary: {
      value: {
        _dark: "{colors.blue.345}",
        _light: "{colors.blue.345}",
        _amoled: "{colors.blue.345}",
      },
    },
  },
  android: {
    navigation: {
      scrim: {
        background: {
          value: {
            _dark: "rgba(12, 12, 13, 0.5)",
            _light: "rgba(249, 249, 249, 0.5)",
            _amoled: "rgba(12, 12, 13, 0.5)",
          },
        },
      },
      bar: {
        background: {
          value: {
            _dark: "{colors.primary.830}",
            _light: "{colors.primary.100}",
            _amoled: "{colors.primary.830}",
          },
        },
      },
    },
    ripple: {
      value: {
        _dark: "rgba(255, 255, 255, 0.07)",
        _light: "rgba(0, 0, 0, 0.12)",
        _amoled: "rgba(255, 255, 255, 0.07)",
      },
    },
  },
  bug: {
    reporter: {
      modal: {
        submitting: {
          background: {
            value: {
              _dark: "rgba(17, 18, 20, 0.6)",
              _light: "rgba(255, 255, 255, 0.6)",
              _amoled: "rgba(17, 18, 20, 0.6)",
            },
          },
        },
      },
    },
  },
  forum: {
    post: {
      extra: {
        media: {
          count: {
            container: {
              background: {
                value: {
                  _dark: "rgba(35, 36, 40, 0.8)",
                  _light: "rgba(235, 237, 239, 0.8)",
                  _amoled: "rgba(35, 36, 40, 0.8)",
                },
              },
            },
          },
        },
      },
      tag: {
        background: {
          value: {
            _dark: "rgba(35, 36, 40, 0.9)",
            _light: "rgba(235, 237, 239, 0.9)",
            _amoled: "rgba(35, 36, 40, 0.9)",
          },
        },
      },
    },
  },
  live: {
    stage: {
      tile: {
        border: {
          value: {
            _dark: "rgba(78, 80, 88, 0.6)",
            _light: "rgba(109, 111, 120, 0.15)",
            _amoled: "rgba(78, 80, 88, 0.6)",
          },
        },
      },
    },
  },
  user: {
    profile: {
      header: {
        overflow: {
          background: {
            value: {
              _dark: "rgba(30, 31, 34, 0.5)",
              _light: "rgba(255, 255, 255, 0.5)",
              _amoled: "rgba(30, 31, 34, 0.5)",
            },
          },
        },
      },
    },
  },
  display: {
    banner: {
      overflow: {
        background: {
          value: {
            _dark: "rgba(30, 31, 34, 0.5)",
            _light: "rgba(255, 255, 255, 0.5)",
            _amoled: "rgba(30, 31, 34, 0.5)",
          },
        },
      },
    },
  },
  modal: {
    background: {
      value: {
        _dark: "{colors.primary.600}",
        _light: "{colors.white.500}",
        _amoled: "{colors.primary.600}",
      },
    },
    footer: {
      background: {
        value: {
          _dark: "{colors.primary.630}",
          _light: "{colors.primary.130}",
          _amoled: "{colors.primary.630}",
        },
      },
    },
  },
  profile: {
    gradient: {
      overlay: {
        value: {
          _dark: "rgba(0, 0, 0, 0.6)",
          _light: "rgba(255, 255, 255, 0.6)",
          _amoled: "rgba(0, 0, 0, 0.6)",
        },
      },
      section: {
        box: {
          value: {
            _dark: "rgba(0, 0, 0, 0.45)",
            _light: "rgba(255, 255, 255, 0.45)",
            _amoled: "rgba(0, 0, 0, 0.45)",
          },
        },
      },
      message: {
        input: {
          border: {
            value: {
              _dark: "rgba(78, 80, 88, 0.48)",
              _light: "rgba(109, 111, 120, 0.24)",
              _amoled: "rgba(78, 80, 88, 0.48)",
            },
          },
        },
      },
      note: {
        background: {
          value: {
            _dark: "rgba(0, 0, 0, 0.3)",
            _light: "rgba(255, 255, 255, 0.3)",
            _amoled: "rgba(0, 0, 0, 0.3)",
          },
        },
      },
      profile: {
        body: {
          background: {
            hover: {
              value: {
                _dark: "rgba(255, 255, 255, 0.16)",
                _light: "rgba(0, 0, 0, 0.08)",
                _amoled: "rgba(255, 255, 255, 0.16)",
              },
            },
          },
        },
      },
      role: {
        pill: {
          background: {
            value: {
              _dark: "rgba(35, 36, 40, 0.5)",
              _light: "rgba(255, 255, 255, 0.5)",
              _amoled: "rgba(35, 36, 40, 0.5)",
            },
          },
          border: {
            value: {
              _dark: "rgba(255, 255, 255, 0.2)",
              _light: "rgba(35, 36, 40, 0.2)",
              _amoled: "rgba(255, 255, 255, 0.2)",
            },
          },
        },
      },
    },
  },
  scrollbar: {
    thin: {
      thumb: {
        value: {
          _dark: "{colors.primary.730}",
          _light: "rgba(78, 80, 88, 0.3)",
          _amoled: "{colors.primary.700}",
        },
      },
      track: {
        value: {
          _dark: "rgba(0, 0, 0, 0)",
          _light: "rgba(0, 0, 0, 0)",
          _amoled: "rgba(0, 0, 0, 0)",
        },
      },
    },
    auto: {
      thumb: {
        value: {
          _dark: "{colors.primary.730}",
          _light: "{colors.primary.300}",
          _amoled: "{colors.primary.600}",
        },
      },
      track: {
        value: {
          _dark: "{colors.primary.630}",
          _light: "{colors.primary.160}",
          _amoled: "{colors.primary.860}",
        },
      },
      scrollbar: {
        color: {
          thumb: {
            value: {
              _dark: "{colors.primary.730}",
              _light: "{colors.primary.230}",
              _amoled: "{colors.primary.700}",
            },
          },
          track: {
            value: {
              _dark: "{colors.primary.630}",
              _light: "{colors.primary.130}",
              _amoled: "{colors.primary.630}",
            },
          },
        },
      },
    },
  },
} as const satisfies SemanticTokens["colors"];
