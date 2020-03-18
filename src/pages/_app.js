import { Component } from 'react';
import Fonts from '~/components/Fonts';
import theme from '~/utils/theme';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import { ThemeProvider as ScThemeProvider } from 'styled-components';

class MyApp extends Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>
            Scratchpay: Simple & friendly, payment plans for medical financing
          </title>
        </Head>
        <ThemeProvider theme={ theme }>
          <ScThemeProvider theme={ theme }>
            <Component { ...pageProps } />
          </ScThemeProvider>
        </ThemeProvider>
        <style global="true">{`
          * {
            padding: 0;
            margin: 0;
          }
          img {max-width:100%;}
        `}</style>
      </>
    );
  }
}

export default MyApp;
