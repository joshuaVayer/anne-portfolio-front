import Head from 'next/head'
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
              <div className="category-title ">{p.title} - {p.location} </div>
              <a href={"/interior-design/project/" + p.slug} className="category-image">
                <img src={p.image.url} alt="Category" />
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