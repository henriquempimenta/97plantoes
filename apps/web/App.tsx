import { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import TermsAndPrivacyPage from './components/TermsAndPrivacyPage';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  if (path === '/termos-de-uso' || path === '/termos') {
    return <TermsAndPrivacyPage />;
  }

  return <LandingPage onGoToApp={() => { }} />;
}
