import React from 'react';
import Image from 'next/image';
import { Meta } from '../components/Meta';

const Download = () => {
    const meta = {
      title: 'Download',
    };

    return (
      <div className="mw--md m-horizontal--auto p-around--large">
        <Meta meta={meta} />

      <section className="layout-gt-xs-row layout-align-center-center">
        <div className="ta-center--lt-sm flex-order-gt-xs-2">
          <Image alt="Caspar David Friedrich on a mountain" height={384} src="/img/home-hero.png" width={384} />
        </div>
        <div className="mw--560 m-top--large-lt-sm m-right--xx-large-gt-xs">
          <h1>Download.</h1>
          <p className="m-top--large">Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque autem totam.</p>
        </div>
      </section>
    </div>
  );
};

export default Download;
