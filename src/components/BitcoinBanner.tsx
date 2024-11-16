import React from 'react';

const BitcoinBanner: React.FC = () => {
  return (
    <section
      aria-label="Banner promocional de Bitcoin"
      className="w-full min-w-[320px] h-[50vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=1200')"
      }}
    >
      <h2 className="pt-[50px] md:pt-0 px-4 text-[2rem] md:text-[2.4rem] font-bold leading-[2.6rem] text-center text-white">
        Conócelo hoy
      </h2>
    </section>
  );
};

export default BitcoinBanner;
