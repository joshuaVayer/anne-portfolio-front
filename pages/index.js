import Head from 'next/head'
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>Anne Schouler - Home</title>
        <link></link>
      </Head>

      <div class="content content__center">
        <div class="categories">
          <div class="category">
            <div class="category-title">Interior Design</div>
            <a href="click.html" class="category-image">
              <img src="https://via.placeholder.com/575x647.png" alt="Category" />
            </a>
          </div>
          <div class="category">
            <div class="category-title">Frecoes</div>
            <a href="click.html" class="category-image">
              <img src="https://via.placeholder.com/575x647.png" alt="Category" />
            </a>
          </div>
          <div class="category">
            <div class="category-title">Paintings</div>
            <a href="click.html" class="category-image">
              <img src="https://via.placeholder.com/575x647.png" alt="Category" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};