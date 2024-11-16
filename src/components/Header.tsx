// src/components/Header.tsx
import { Bitcoin } from 'lucide-react';

const Header = () => {
  return (
    <header
      className="relative flex flex-col items-center min-w-[320px] h-[334px] text-center bg-gradient-to-br from-[var(--black)] to-[var(--bitcoin-orange)]"
      role="banner"
    >
      <div className="mt-[60px]">
        <Bitcoin className="w-[151px] h-[24px] text-white" aria-hidden="true" />
      </div>

      <div className="w-[90%] min-w-[288px] max-w-[900px] mt-[50px] text-center">
        <h1
          className="text-[2.4rem] font-bold leading-[2.6rem] text-white"
          id="header-title"
        >
          La próxima revolución en el intercambio de criptomonedas
        </h1>
        <p className="mt-[25px] text-[1.4rem] font-medium leading-[1.8rem] text-[var(--soft-orange)]">
          Batabit te ayuda a navegar entre los diferentes precios y tendencias.
        </p>
        <a
          href="#plans"
          className="absolute left-[50%] translate-x-[-50%] top-[270px] block mt-[35px] px-[15px] py-[15px] w-[229px] h-[48px] bg-[var(--off-white)] shadow-md rounded-[4px] text-[1.4rem] font-bold text-[var(--black)] no-underline"
          aria-label="Conoce Nuestros Planes"
        >
          Conoce Nuestros Planes
          <span
            className="inline-block w-[13px] h-[8px] ml-[10px] bg-[url('/assets/icons/down-arrow.svg')] bg-cover bg-center bg-no-repeat"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </header>
  );
};

export default Header;
