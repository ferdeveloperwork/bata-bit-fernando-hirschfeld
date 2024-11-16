import { CheckCircle, Clock, DollarSign, Eye } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Clock,
    title: 'Tiempo real',
    description: 'Nuestra API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.'
  },
  {
    id: 2,
    icon: Eye,
    title: 'No hay tasas escondidas',
    description: 'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'
  },
  {
    id: 3,
    icon: DollarSign,
    title: 'Compare monedas',
    description: 'No más rumores, con Batabit sabrás el valor real de cada moneda en el mercado actual.'
  },
  {
    id: 4,
    icon: CheckCircle,
    title: 'Información confiable',
    description: 'Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.'
  }
];

const ProductFeatures = () => {
  return (
    <section className="relative w-full min-w-[320px] py-[20px] px-[10px] bg-[var(--warm-black)]">
      <div className="absolute w-[40px] h-[25px] top-[-10px] left-[calc(50%-30px)] bg-[url('/assets/icons/batata.svg')] bg-cover bg-center" />

      <div className="w-[90%] min-w-[300px] mx-auto mt-[50px] text-center text-white">
        <h2 className="text-[2.4rem] font-bold mb-4">Creamos un producto sin comparación.</h2>
        <p className="text-[1.4rem] font-medium leading-[1.8rem] text-[var(--light-grey)] mb-[20px]">
          Confiable y diseñado para su uso diario.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.id} className="w-[90%] min-w-[280px] max-w-[400px] h-[150px] mx-auto p-[15px] bg-[var(--black)] rounded-[5px] shadow-lg">
              <Icon aria-hidden="true" className="w-[20px] h-[20px] mb-[10px] text-[var(--bitcoin-orange)]" />
              <h3 className="ml-[15px] text-[1.8rem] font-bold leading-[1.8rem] mb-[10px] text-white">
                {feature.title}
              </h3>
              <p className="text-[1.4rem] font-normal leading-[1.8rem] text-[var(--light-grey)]">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProductFeatures;
