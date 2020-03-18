import { createMuiTheme } from '@material-ui/core/styles';

const themeVars = {
  primaryScratchPayBlue: '#245CA6',
  primaryScratchPayLightBlue: '#A3C7ED',
  primaryScratchPayCobalt: '#293D99',
  primaryScratchPayNavy: '#212445',
  secondaryScratchPayCoral: '#F56E57',
  secondaryScratchPayYellow: '#FF5B81C',
  secondaryScratchPayBeige: '#FAF0E3',
  secondaryScratchPayDarkGrey: '#241F21',
  bpLg: 960
};

const { primaryScratchPayBlue, secondaryScratchPayCoral } = themeVars;

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Muli'].join(','),
    h4: {
      'fontWeight': 600,
    }
  },
  palette: {
    primary: {
      main: primaryScratchPayBlue
    },
    secondary: {
      main: secondaryScratchPayCoral
    }
  },
  overrides: {
    MuiTableHead: {
      root: {
        // fontWeight: 500,
        // backgroundColor: secondaryScratchPayCoral,
        // color: 'white'
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: secondaryScratchPayCoral,
        color: 'white'
      }
    }
  }
});

export default theme;
