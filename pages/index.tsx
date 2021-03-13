import React from 'react';
import Image from 'next/image';
import { Meta } from '../components/Meta';
import { InstitutionSearch } from '../components/InstitutionSearch';

const Home = () => {
  const meta = {
    title: 'Notion Take Home',
  };

  return (
    <div className="mw--md m-horizontal--auto p-around--large">
      <Meta meta={meta} />

      <section className="layout-gt-xs-row layout-align-center-center">
        <div className="ta-center--lt-sm flex-order-gt-xs-2">
          <Image alt="Caspar David Friedrich on a mountain" height={384} priority src="/img/home-hero.png" width={384} />
        </div>
        <div className="mw--560 m-top--large-lt-sm m-right--xx-large-gt-xs">
          <h1>Find the university that’s right for you.</h1>
          <p className="m-top--large">Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque autem totam.</p>
        </div>
      </section>

      <section className="m-top--xxx-large">
        <InstitutionSearch />
      </section>
    </div>
  );
};

export default Home;
