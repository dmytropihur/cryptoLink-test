import { Hero } from './components/Hero';
import { Application } from './components/Application';
import { About } from './components/About';
import { MultiChain } from './components/MultiChain';
import { Card } from './components/Card';
import { Layout } from './layouts/Layout';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <MultiChain />
      <Card />
      <Application />
    </Layout>
  );
}

export default App;
