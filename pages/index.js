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
        <div className="categories">
          <div className="category">
            <div className="category-title">Interior Design</div>
            <a href="/interior-design" className="category-image">
              <img src="https://via.placeholder.com/575x647.png" alt="Category" />
            </a>
          </div>
          <div className="category">
            <div className="category-title">Frescoes</div>
            <a href="/frescoes" className="category-image">
              <img src="https://via.placeholder.com/575x647.png" alt="Category" />
            </a>
          </div>
          <div className="category">
            <div className="category-title">Paintings</div>
            <a href="/paintings" className="category-image">
              <img src="https://via.placeholder.com/575x647.png" alt="Category" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};