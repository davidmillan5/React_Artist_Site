import './Shop.css';
export const Shop = () => {
  let items = [
    {
      id: 1,
      name: 'Terminamos y Otros Poemas Sin Terminar',
      description:
        'Un sabio dijo una vez: «Pocas cosas hipnotizan tanto en este mundo como una llama y como la luna, será porque no podemos cogerlas o porque nos iluminan en la penumbra». Realmente no sé si alguien dijo esta cita o me la acabo de inventar pero deberían de haberla escrito porque el poder hipnótico que ejercen esa mujer de rojo y esa dama blanca sobre el ser humano es digna de estudio. Todo final implica un principio y viceversa, como el ciclo de la noche y el día, como las fases de la luna desde la nueva hasta la llena pasando por su sequía.',
      price: 20,
      available_units: 15,
      reference: 'Lorem ipsum dolor sit amet.',
      image:
        'https://static.cegal.es/imagenes/marcadas/9788467/978846704746.gif',
      link: 'https://www.buscalibre.com.co/libro-terminamos-y-otros-poemas-sin-terminar-david-martinez-alvarez-espasa-libros-s-l/9788467047462/p/47310296?bmkt_source=google&bmkt_campaign=878570393&gclid=CjwKCAjwo7iiBhAEEiwAsIxQEaBelH4F29u5dmjcu1YWpIK_Er1kNxImQC7VKX65yBDpVjAI9gWrABoCkuEQAvD_BwE',
    },
    {
      id: 2,
      name: 'El Mundo Es Un Gato Jugando con Australia',
      description:
        'Aunque pueda parecer lo contrario, El mundo no es un gato jugando con Australia es un truco de escapismo; de escapismo de uno mismo. Siempre he creído que hay personas que son hogar, personas que te hacen sentir como en casa, protegido y con ganas de echar raíces o la llave por dentro. En este libro cuento lo que pocos te dicen: qué ocurre después de las perdices y de los finales felices cuando la verdad finalizan y se echa el telón. Bienvenidos a mi cuaderno de bitácora, a mi galería de muchitantos fracasos y dos triunfos, a mi trayecto por corazones...',
      price: 20,
      available_units: 15,
      reference: 'Lorem ipsum dolor sit amet.',
      image:
        'https://libreriadelau.vtexassets.com/arquivos/ids/12843019-800-auto?v=637034676901330000&width=800&height=auto&aspect=true',
      link: 'https://www.buscalibre.com.co/libro-el-mundo-es-un-gato-jugando-con-australia/9789584280312/p/51885345',
    },
    {
      id: 3,
      name: 'El Acercamiento De La Mujer Cactus y El Hombre Globo',
      description:
        'Sáhara ama las flores aunque tiene nombre de desierto. Sáhara trabaja en el negocio familiar. Una pequeña floristería en Malasaña. Ciro es un joven lleno de aspiraciones frustradas. Vive en una habitación en Lavapiés. Ciro choca con Nicolás, un repartidor de comida. Decide suplantar su identidad y trabajar con su nombre. Nico-Ciro y Sáhara chocan en el Ojalá. Abren varias puertas que son volcanes. Y deciden arder. David Martínez Álvarez se desviste de Rayden y construye una novela que es poesía,  tragico.',
      price: 20,
      available_units: 15,
      reference: 'Lorem ipsum dolor sit amet.',
      image: 'https://static.megustaleer.com/images/libros/SL97499.jpg',
      link: 'https://www.buscalibre.com.co/libro-preventa-acercamiento-de-la-mujer-cactus-el-rayden-suma-de-letras/9788491297499/p/54398494',
    },
    {
      id: 4,
      name: 'Amoratado: Metamorfosis del nudo al lazo',
      description:
        '«Llamé durante mucho tiempo "amor" a lugares que no lo eran, engañándome con la complacencia.....',
      price: 20,
      available_units: 15,
      reference: 'Lorem ipsum dolor sit amet.',
      image: 'https://www.cervantes.com/imagen.php?ean=9788408253662&ancho=250',
      link: 'https://www.panamericana.com.co/amoratado-638958/p',
    },
    {
      id: 5,
      name: 'Herido Diario',
      description:
        'Herido diario es una vida entera exprimida y colada en un año con sus cuatro estaciones: La caída del otoño y su golpe, la hipotermia del invierno y su abrigo, el deshielo, la ilusión y la alergia de la primavera y el verano y su desapego. Cualquier parecido con la...',
      price: 20,
      available_units: 10,
      reference: 'Lorem ipsum dolor sit amet.',
      image: 'https://m.media-amazon.com/images/I/81-y+nBVSCL.jpg',
      link: 'https://www.buscalibre.com.co/libro-herido-diario-david-martinez-alvarez-martinez-alvarez-rayden-libro-fisico/9788494268687/p/46424399',
    },
    {
      id: 6,
      name: 'Cantinela',
      description:
        'A quienes la escuchamos, una canción nos evoca la época en que la descubrimos.  A aquella persona con quien la compartimos. El sentimiento que nos provocó. Para quien la crea, el proceso es similar: transitar por ella es reencontrarse en otro espacio y tiempo...',
      price: 20,
      available_units: 15,
      reference: 'Lorem ipsum dolor sit amet.',
      image: 'https://m.media-amazon.com/images/I/51LOp-rgPOL.jpg',
      link: 'https://www.casadellibro.com.co/libro-cantinela/9788408247173/12460996',
    },
  ];

  // OnClick Event

  const eventHandler = (event) => {
    event.target.classList.add('blackandwhite');
  };

  const eventReturn = (event) => {
    event.target.classList.remove('blackandwhite');
  };

  const imgEnhancer = (event) => {
    event.target.classList.add('enhancer');
  };

  return (
    <>
      {/* you map an array */}
      <div className="container">
        <div className="row">
          {items.map((item) => {
            return (
              <div
                className="card my-3 mx-3"
                style={{ width: '24rem' }}
                key={item.id}
              >
                <img
                  src={item.image}
                  className="card-img-top img-fluid rounded mx-auto d-block my-2"
                  alt="..."
                  onMouseOver={eventHandler}
                  onMouseLeave={eventReturn}
                  onClick={imgEnhancer}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{item.name}</h5>
                  <p className="card-text text-center">{item.description}</p>
                  <p className="card-text text-center">Price: $ {item.price}</p>
                  <p className="card-text text-center">
                    Available Units: {item.available_units}
                  </p>
                  <a
                    href={item.link}
                    className="btn btn-dark d-flex justify-content-around"
                    target="_blank"
                  >
                    Buy
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
