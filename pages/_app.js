import { appWithTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import '../styles/globals.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
