import Head from 'next/head'
import Layout from '../components/Layout';

export default function Frescoes() {
  const entries = ['Project 1', 'Project 2', 'Project 3', 'Project 4'];
  return (
    <Layout>

      <Head>
        <title>Anne Schouler - Frescoes</title>
      </Head>

      <div className="content">
        <h4 className="content-title">Interior design work</h4>
        <div className="categories categories__wrap">

          {/* Cards generation */}
          {entries.map( (p) => (
            <div className="category category__header">
              <div className="category-title ">{p} - Location </div>
              <a href="click.html" className="category-image">
                <img src="https://via.placeholder.com/575x647.png" alt="Category" />
              </a>
            </div>
          ))}

          {/* Last card for the to send last real flexbox element to the left */}
          <div className="category category__last"></div>
        </div>
      </div>
    </Layout>
  );
};