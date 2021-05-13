import Head from 'next/head'
import Layout from '../components/Layout';

export default function InteriorDesign() {
  return (
    <Layout>

      <Head>
        <title>Anne Schouler - Interior Design</title>
      </Head>

      <div className="content content__center">
        <h4 className="content-title">Interior Design</h4>
        <div className="categories">
          <div className="category category__reverse">
            <div className="category-title ">Residential</div>
            <a href="/interior-design/residential" className="category-image">
              <img src="https://via.placeholder.com/575x647.png" alt="Category" />
            </a>
          </div>
          <div className="category category__reverse">
            <div className="category-title">Hospitality</div>
            <a href="/interior-design/hospitality" className="category-image">
              <img src="https://via.placeholder.com/575x647.png" alt="Category" />
            </a>
          </div>
          <div className="category category__reverse">
            <div className="category-title">Retail</div>
            <a href="/interior-design/retail" className="category-image">
              <img src="https://via.placeholder.com/575x647.png" alt="Category" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};