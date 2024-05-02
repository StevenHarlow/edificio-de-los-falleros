import ButtonLink from "./components/buttonLink";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full text-xl">
      <div className="flex flex-col justify-center items-center w-full bg-blue-gradient">
        <div className="py-20 max-w-[1000px] flex flex-col gap-10 justify-center items-center">
          <p>
            En el barrio del Carmen resiste un edificio testigo de la valencia
            que no llegó a ser. La Valencia moderna y esponjada de Goerlich que
            nunca llegó, y que planeaba alargar la avenida del Oeste hasta el
            río Túria, destruyendo en aras de la modernidad y la salubridad,
            gran parte del barrio del Carmen y del mercado.
          </p>
          <p>
            La supuesta modernización del entramado medieval del centro
            histórico nunca llegó a realizarse debido a la negativa de varias
            familias adineradas cercanas al mercado central. No obstante, y tras
            las pérdidas que supuso la riada de 1957, 20 familias del barrio se
            organizaron para construir una vivienda digna e
            &quot;higiénica&quot; liderados por la parroquia de la Santísima
            Cruz, también conocida como iglesia del Carmen. Esta nueva vivienda
            se alineó según la reglamentación y planos urbanísticos de entonces
            y constituyó en el barrio del Carmen un hito de modernidad y de
            cohesión del barrio.
          </p>
          <div className="flex gap-10">
            <Image
              src="/falla.jpeg"
              alt="falla del barrio"
              width={300}
              height={300}
            />
            <Image
              src="/flood.jpeg"
              alt="mucho agua"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="h-[500px] w-full bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/falleros.jpg')]"></div>
      <div className="flex flex-col justify-center items-center w-full bg-blue-gradient">
        <div className="py-20 max-w-[1000px] flex flex-col gap-6 justify-center items-center">
          <p>
            Algunos carmelitanos, entre ellos muchos falleros y familiares de
            NJ, se agruparon en una cooperativa surgida del seno de la Parroquia
            del Carme o de la Santísima Cruz, con el fin de construir un nuevo
            edificio que implicaría viviendas seguras y modernas (por ejemplo,
            con lavabos, que no abundaban anteriormente) para sus socios. Esta
            cooperativa fue la responsable del encargo y ejecución de las obras
            bajo el seguimiento constante e interesado de todos sus socios. Fue
            tal el ambiente de unión y trabajo de la construcción de este
            edificio que alguno de los paletas se quedó a trabajar en el
            edificio como conserje, el señor Eugenio, que falleció tras largos
            años de servicio en la comunidad.
          </p>
          <div className="flex">
            <Image src="/doc3.png" alt="documento" width={300} height={300} />
          </div>
        </div>
      </div>
      <div className="h-[500px] w-full bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/map-of-city.png')]"></div>
      <div className="flex flex-col justify-center items-center w-full bg-blue-gradient">
        <div className="pt-20 pb-10 max-w-[1000px] flex flex-col gap-10 justify-center items-center">
          <p>
            Y en 1965, tan solo 8 años tras la fatídica riada que anegó el
            centro de valencia, se concedió cada una de las viviendas a los
            socios de la cooperativa de viviendas de la santísima cruz, con un
            precio económico de cuatro millones, cuatrocientas noventa y dos mil
            pesetas, unos 23.200 € del momento. Se repartieron en orden por
            sorteo de los socios, en asamblea que tuvo lugar en los locales de
            la parroquia. Cada uno de los vecinos, por estricto orden de sorteo
            fue eligiendo piso y puerta en base a sus gustos e intereses… ¿Valió
            la pena? ¡Por supuesto que sí! 20 familias del barrio del Carme,
            falleros, miembros de su parroquia, vecinos, accedieron a unos
            hogares sanos, higiénicos, y modernos…con baño en el interior de
            cada vivienda e incluso con uno de los primeros ascensores del
            barrio el Carmen!.
          </p>
          <div className="flex">
            <Image src="/doc4.png" alt="documento" width={500} height={300} />
          </div>
        </div>
        <div className="pb-20 flex flex-col items-center justify-center gap-4">
          <ButtonLink text="Conocer a los vecinos" href="/vecinos" />
        </div>
      </div>
    </div>
  );
}
