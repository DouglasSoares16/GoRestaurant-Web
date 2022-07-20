import { extendTheme } from "@chakra-ui/react"

const customTheme = {
  colors: {
    red: {
      "500": "#C72828"
    },
    yellow: {
      "400":"#FFB84D"
    },
    gray: {
      "600": "#3D3D4D",
      "500": "#6C6C80",
      "200": "#E4E4EB",
      "100": "#F0F0F5"
    },
    green: {
      "400": "#39B100"
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "white"
      }
    }
  }
}

export const theme = extendTheme({ customTheme });