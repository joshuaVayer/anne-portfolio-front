import Head from 'next/head'
import Layout from '../components/Layout';

export default function Painting() {
  return (
    <Layout>

      <Head>
        <title>Anne Schouler - Paintings</title>
      </Head>

      <div className="content content__center">
        <h4 className="content-title">Paintings</h4>
        <div className="categories">
          <div className="category category__reverse">
            <div className="category-title ">Interior paintings</div>
            <a href="/paintings/interior" className="category-image">
              <img src="https://res.cloudinary.com/dxaa1zmcg/image/upload/v1621248894/Anne/interior_painting_dvqmjp.jpg" alt="Category" />
            </a>
          </div>
          <div className="category category__reverse">
            <div className="category-title">Abstract</div>
            <a href="/paintings/abstract" className="category-image">
              <img src="https://res.cloudinary.com/dxaa1zmcg/image/upload/v1621248894/Anne/painting_1_vhmg51.jpg" alt="Category" />
            </a>
          </div>
          <div className="category category__reverse">
            <div className="category-title">Portraits</div>
            <a href="/paintings/portrait" className="category-image">
              <img src="https://res.cloudinary.com/dxaa1zmcg/image/upload/v1621248894/Anne/portrait_ijbxfg.jpg" alt="Category" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};