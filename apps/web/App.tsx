import { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import TermsAndPrivacyPage from './components/TermsAndPrivacyPage';

export default function App() {
  const [page, setPage] = useState(() => new URLSearchParams(window.location.search).get('page'));

  useEffect(() => {
    const onLocationChange = () => setPage(new URLSearchParams(window.location.search).get('page'));
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  if (page === 'termos-de-uso' || page === 'termos') {
    return <TermsAndPrivacyPage />;
  }

  return <LandingPage onGoToApp={() => { }} />;
}
