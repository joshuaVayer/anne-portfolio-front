import Layout from '../../components/Layout';
import func from '../../lib/global'
import fetchFromCMS from '../../lib/service';
import Head from 'next/head'


const DesignItem = ({ designItem }) => {
  return (
    <Layout>

      <Head>
        <title>Anne Schouler - { designItem.title }</title>
        {/* CSS Box style sheet */}
        <link rel="stylesheet" href="../../css/cssbox.css"/>
      </Head>

      <div className="content content_project">
        <h4 className="content-title">{ designItem.title }<span>{ func.gets.get_card_location(designItem.location) }</span></h4>

        { func.gets.get_content(designItem.content) }

        <div className="gallery">
          <ul>
            {/* Gallery generation */}
            {designItem.gallery.map((img, index) => (
              <li>
                <a id={ 'image' + index } href={ '#image' + index }>
                  <img className="cssbox_thumb" src={ func.gets.get_image(img.formats, img.url) } alt={ designItem.title } loading="lazy" />
                  <span className="cssbox_full">
                    <img src={ img.url } />
                    </span>
                </a>
                <a className="cssbox_close" href="#void"></a>
                <a className="cssbox_next" href={ '#image' + func.gallery.next(index, designItem.gallery.length) }>&#8594;</a>
                <a className="cssbox_prev" href={ '#image' + func.gallery.prev(index, designItem.gallery.length) }>&#8592;</a>
              </li>
            ))}

            {/* Empty <li> here so the final photo doesn't stretch like crazy */}
            <li></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

// API Connection
export async function getStaticPaths() {
  const designItems = await fetchFromCMS('designs');
  return {
    paths: designItems.map((designItem) => ({
      params: {
        slug: designItem.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const designItem = await fetchFromCMS(`designs?slug=${params.slug}`);
  return {
    props: { designItem: designItem[0] },
    revalidate: 1,
  };
}

export default DesignItem;


