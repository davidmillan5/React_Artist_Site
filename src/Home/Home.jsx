import './Home.css';
import { History } from '../History/History';
import { Discography } from '../Discography/Discography';
import React from 'react';
import { Carousel } from '../Carousel/Carousel';
import { Footer } from '../shared/Footer/Footer';
import { Concerts } from '../Concerts/Concerts';

export function Home() {
  return (
    <>
      <section className="banner"></section>
      <section>
        <History></History>
      </section>
      <section>
        <Discography></Discography>
      </section>
      <section>
        <Carousel></Carousel>
      </section>
      <section>
        <Concerts></Concerts>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
}
