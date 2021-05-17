import Head from 'next/head'
import Link from 'next/link'
import func from '../../lib/global'
import fetchFromCMS from '../../lib/service';
import Layout from '../../components/Layout';

export default function Residencial_ID({ designItems }) {

  let projects = designItems.slice().reverse().filter(p => p.category == 'residencial')

  return (
    <Layout>

      <Head>
        <title>Anne Schouler - Interior design</title>
      </Head>

      <div className="content">
        <h4 className="content-title">Residential</h4>
        <div className="categories categories__wrap">

          {/* Cards generation */}
          {projects.map((p) => (
            <div className="category category__header">
              <div className="category-title ">{ p.title }{ func.gets.get_card_location(p.location) } </div>
              <a className="category-image">
                <Link as={`/project/${p.slug}`} href="/project/[id]">
                  <img src={p.image.url} alt="Category" />
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
  const designItems = await fetchFromCMS('designs');
  return {
    props: { designItems },
    revalidate: 1,
  };
}