import Head from 'next/head'
import fetchFromCMS from '../lib/service';
import func from '../lib/global'
import Link from 'next/link'
import Layout from '../components/Layout';

export default function Frescoes({ frescoItems }) {

  let projects = frescoItems.slice().reverse() // Order the projects correctly

  return (
    <Layout>

      <Head>
        <title>Anne Schouler - Frescoes</title>
      </Head>

      <div className="content">
        <h4 className="content-title">Frescoes work</h4>
        <div className="categories categories__wrap">

          {/* Cards generation */}
          { projects.map( (p) => (
            <div className="category category__header">
              <div className="category-title ">{ p.title }{ func.gets.get_card_location(p.location) } </div> 
              <a className="category-image">
                <Link as={`/fresco/${p.slug}`} href="/fresco/[id]">
                  <img src={ p.image.url } alt="Category"/>
                </Link>
              </a>
            </div>
          ))}

          {/* Last card to send last real flexbox element to the left */}
          <div className="category category__last"></div>
        </div>
      </div>
    </Layout>
  );
};


export async function getStaticProps() { // Fetch the corresponding collection and returns it
  const frescoItems = await fetchFromCMS('frescoes');
  return {
    props: { frescoItems },
    revalidate: 1,
  };
}