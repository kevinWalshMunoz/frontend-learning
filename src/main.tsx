import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-nlx2euz35vgankfs.us.auth0.com"
    clientId="6mwzLbaSYUBCHY2DU5nGbtwUHPok7r5U"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
)
