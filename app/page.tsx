import ButtonLink from "./components/buttonLink";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-6 text-xl">
      <div className="h-[calc(100vh-260px)] max-w-[1000px] flex items-center">
        ¿Sabías que en el corazón del Carmen existe un edificio promovido y casi
        construido por los vecinos, falleros, y la parroquia del Carme? La riada
        de 1957 destruyó muchas de las viviendas más bajas de nuestro barrio.
        Tras esta catástrofe, y ayudado por la parroquia de la santísima cruz,
        vecinos, falleros de Na Jordana, y la propia parroquia empezaron a
        organizarse y consiguieron construir un edificio con fines sociales en
        unos terrenos ubicados en lo que hoy es Na Jordana 32, el Edificio de
        los Falleros.
      </div>
      <div className="h-[500px] w-full bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/falleros.jpg')]"></div>
      <div className="h-[calc(100vh-260px)] max-w-[1000px] flex items-center">
        El Edificio de los Falleros llama la atención por su altura, que
        sobresale de las edificaciones de la calle Na Jordana. Pero... ¿porque
        de esta altura? Debemos de remontarnos a la década de los 50 cuando el
        Arquitecto Mayor del Ayuntamiento de Valencia, Javier Goerlich Lleó,
        presentó un plan de reforma interior del Barrio del Carmen, cuyo plano,
        sin firma ni fecha, parece proceder de los años 30, se conserva en la
        sección Gran Valencia del Archivo Histórico de la Generalitat. Este plan
        consistia en el esponjamiento del trazado medieval del barrio del Carme
        y la prolongación de la avenida del oeste hasta el cauce del rio Turia.
        Es por esto, que en el ayuntamiento de Valencia concedió permisos y
        licencias a este edifico de 10 alturas, que iba a formar parte del
        frontal de la futurística avenida del oeste. El Edificio de los Falleros
        iba a ser el final ¡de la Avenida del oeste!
      </div>
      <div className="h-[500px] w-full bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/map-of-city.png')]"></div>
      <div className="h-[calc(100vh-260px)] max-w-[1000px] flex items-center">
        El Edificio de los Falleros se construyó con el fin loable, tras la
        riada del 57 que anegó todas las primeras plantas de viviendas del
        barrio del Carmen, de proporcionar a los socios de la cooperativa de un
        hogar digno, higiénico, y económico. Esto es un fin que podríamos
        perseguir aún hoy pero que dadas las condiciones de la vivienda en
        nuestro barrio se hace imposible para las familias que siempre lo han
        habitado y vivido.
      </div>
      <div className="h-[500px] w-full bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/doc4.png')]"></div>
      <div className="h-[calc(100vh-260px)] max-w-[1000px] flex items-center">
        Y en 1965, tan solo 8 años tras la fatídica riada que anegó el centro de
        valencia, se concedió cada una de las viviendas a los socios de la
        cooperativa de viviendas de la santísima cruz, con un precio económico
        de cuatro millones, cuatrocientas noventa y dos mil pesetas, unos 23.200
        € del momento, ¿Valió la pena? ¡Por supuesto que sí! 20 familias del
        barrio del Carme, falleros, miembros de su parroquia, vecinos,
        accedieron a unos hogares sanos, higiénicos, y modernos…!incluso con uno
        de los primeros ascensores del barrio el Carme!
      </div>
      <div className="h-[500px] w-full bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/doc3.png')]"></div>
      <div className="h-[300px] flex flex-col items-center justify-center gap-4">
        <ButtonLink text="Conocer a los vecinos" href="/vecinos" />
      </div>
    </div>
  );
}
