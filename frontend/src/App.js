import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Router from './routes';
import i18n from './translation';

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

export default App;
