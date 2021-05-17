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
              <img src="https://res.cloudinary.com/dxaa1zmcg/image/upload/v1621248941/Anne/st_regis_prsidential_suite_me9r7t.jpg" alt="Interior Design" />
            </a>
          </div>
          <div className="category">
            <div className="category-title">Frescoes</div>
            <a href="/frescoes" className="category-image">
              <img src="https://res.cloudinary.com/dxaa1zmcg/image/upload/v1621248941/Anne/patio_Gerry_ynqj81.jpg" alt="Frescoes" />
            </a>
          </div>
          <div className="category">
            <div className="category-title">Paintings</div>
            <a href="/paintings" className="category-image">
              <img src="https://res.cloudinary.com/dxaa1zmcg/image/upload/v1621248894/Anne/painting_1_vhmg51.jpg" alt="Paintings" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};