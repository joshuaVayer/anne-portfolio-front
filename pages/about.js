import Head from 'next/head'
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>Anne Schouler - Home</title>
        <link rel="stylesheet" href="/css/center.css"></link>
      </Head>

      <div className="content content__center">
        <div className="about">
          <div className="about-image">
            <img src="https://res.cloudinary.com/anne-schouler/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1625385456/About/image_about_qqj8wr.jpg" />
          </div>
          <div className="about-content">
            <div className="about-content__top">
              <p>
                After graduating from the prestigious Ecole Camondo in Paris, I lived 15 years in Southeast Asia working as an Interior Designer, developing furniture and decorative objects.
              </p>
              <p>I also got myself involved in on site follow up and general interior design for St Regis Residences, Accor Group Hotels (So Sofitel, Sofitel, M Gallery), Hyatt Hotels, Marriott…</p>
              <p>As well as these large projects, I offered a bespoke service for the residential projects of private customers. </p>
              <p>Living and working now in Palma de Mallorca, I have developed a more creative and artistic approach to Interior Design offering personalized Paintings and Frescoes.</p>
            </div>
            <hr/>
            <div className="about-content__bottom">
              <p>Tras terminar mis estudios en la Escuela Camondo de Paris, estuve residiendo 15 años en Asia del Sur Este, dedicándome al diseño tanto de muebles como de objectos de decoración.</p>
              <p>Cabe destacar que, trabajé como interiorista para cadenas hoteleras de lujo tal como St Regis Residences, Accor Group Hotels (So Sofitel, Sofitel, M Gallery), Hyatt Hotels, Marriott…</p>
              <p>Trabajé en proyectos residenciales como comerciales, siempre de forma personalizada para cubrir los deseos y necesidades de mis clientes.</p>
              <p>Ahora vivo en Palma de Mallorca, ofreciendo servicios de diseño con un enfoque artístico y creativo a través de Pinturas Murales y Frescos.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};