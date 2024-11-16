import BitcoinBanner from './components/BitcoinBanner';
import ExchangeSection from './components/ExchangeSection';
import Header from './components/Header';
import ProductFeatures from './components/ProductFeatures';

function App() {
  return (
    <div className="min-w-[320px]">
      <Header />
      <main>
        <ExchangeSection />
        <ProductFeatures />
        <BitcoinBanner />
      </main>
    </div>
  );
}

export default App;
