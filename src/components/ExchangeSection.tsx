import axios from 'axios';
import { AlertCircle, TrendingDown, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CryptoPrice {
  symbol: string;
  price: number;
  change24h: number;
}

const ExchangeSection = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchPrices = async () => {
      try {
        const response = await axios.get('/api/v2/public/get-ticker');
        if (!mounted) return;

        if (response.data?.result?.data) {
          const cryptoSymbols = ['BTC_USDT', 'ETH_USDT', 'XRP_USDT', 'XLM_USDT'];
          const cryptoData = response.data.result.data
            .filter((crypto: any) => cryptoSymbols.includes(crypto.i))
            .map((crypto: any) => ({
              symbol: crypto.i.split('_')[0],
              price: Number(crypto.a) || 0,
              change24h: Number(crypto.c) || 0
            }));
          setPrices(cryptoData);
          setError(null);
        }
      } catch (err) {
        if (!mounted) return;
        setError('Error al cargar los precios. Por favor, intente más tarde.');
        console.error('Error fetching crypto prices:', err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="p-8 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="p-8 text-center text-red-500 flex flex-col items-center gap-2">
          <AlertCircle className="w-6 h-6" />
          <p className="text-sm">{error}</p>
        </div>
      );
    }

    return (
      <table className="w-full max-w-full table-auto text-center border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-100 text-[1.2rem] text-[var(--grey)]">Moneda</th>
            <th className="py-3 px-6 bg-gray-100 text-[1.2rem] text-[var(--grey)]">Precio</th>
            <th className="py-3 px-6 bg-gray-100 text-[1.2rem] text-[var(--grey)]">Cambio 24h</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((crypto, index) => (
            <tr key={crypto.symbol} className="border-t">
              <td className="py-4 px-6 bg-white text-[1.6rem] font-medium text-[var(--grey)]">
                {crypto.symbol}
              </td>
              <td className="py-4 px-6 bg-white text-[1.4rem] text-[var(--grey)]">
                ${crypto.price.toFixed(2)}
              </td>
              <td className={`py-4 px-6 text-[1.4rem] ${crypto.change24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {crypto.change24h > 0 ? (
                  <div className="flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {crypto.change24h.toFixed(2)}%
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <TrendingDown className="w-4 h-4 mr-2" />
                    {crypto.change24h.toFixed(2)}%
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <section className="w-full py-[80px] text-center">
      <div className="w-[200px] h-[200px] mx-auto mb-[50px] bg-[url('https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500')] bg-cover bg-center" />

      <div className="w-[90%] min-w-[288px] max-w-[900px] mx-auto">
        <h2 className="mb-[30px] text-[2.4rem] font-bold leading-[2.6rem] text-[var(--black)]">
          Visibilizamos todas las tasas de cambio.
        </h2>
        <p className="mb-[30px] text-[1.4rem] font-medium leading-[1.6rem] text-[var(--grey)]">
          Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.
        </p>
      </div>

      <div className="w-[90%] min-w-[300px] max-w-[1200px] mx-auto font-['Inter']">
        <p className="mb-[15px] text-[1.8rem] font-bold leading-[2.5rem] text-[var(--bitcoin-orange)]">
          Monedas:
        </p>

        <div className="w-full min-w-[300px] max-w-[100%] mx-auto bg-[var(--off-white)] rounded-[15px] overflow-hidden">
          {renderContent()}
        </div>

        <div className="w-[190px] h-[30px] mx-auto mt-[15px] p-[8px] rounded-[8px] bg-[var(--soft-orange)]">
          <p className="text-[1.2rem] leading-[1.5rem] text-[var(--warm-black)]">
            <b>Actualizado:</b> {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExchangeSection;
