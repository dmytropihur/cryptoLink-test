import { Hero } from './components/Hero';
import { App as AppComponent } from './components/App';

import { Footer } from './components/Footer';
import { About } from './components/About';
import { MultiChain } from './components/MultiChain';
import { Card } from './components/Card';

function App() {
  return (
    <>
      <Hero />
      <About />
      <MultiChain />
      <Card />
      <AppComponent />
      <Footer />
    </>
  );
}

export default App;
