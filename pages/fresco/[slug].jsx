import Layout from '../../components/Layout';
import func from '../../lib/global'
import fetchFromCMS from '../../lib/service';
import Head from 'next/head'


const FrescoItem = ({ frescoItem }) => {

  return (
    <Layout>

      <Head>
        <title>Anne Schouler - { frescoItem.title }</title>
        {/* CSS Box style sheet */}
        <link rel="stylesheet" href="../../css/cssbox.css"/>
      </Head>

      <div className="content content_project">
        <h4 className="content-title">{ frescoItem.title }<span>{ func.gets.get_card_location(frescoItem.location) }</span></h4>

        {func.gets.get_content(frescoItem.content)}

        <div className="gallery">
          <ul>
            { frescoItem.gallery.map((img, index) => (
              <li>
                <a>
                  <img 
                    className="cssbox_thumb" 
                    onClick={() => func.gallery.pop(index)} 
                    src={func.gets.get_image(img.formats, img.url)} 
                    alt={ frescoItem.title } loading="lazy" 
                  />
                  <span className="cssbox_full cssbox_hidden" data-full={index}>
                    <img src={ img.url } />
                    <a className="cssbox_close" 
                      onClick={() => func.gallery.shut(index)}>
                    </a>
                    <a className="cssbox_next"
                      onClick={() => func.gallery.switch(
                        index, 
                        func.gallery.getNext(index, frescoItem.gallery.length)
                      )}
                    >
                      &#8594;
                    </a>
                    <a className="cssbox_prev"
                      onClick={() => func.gallery.switch(
                        index, 
                        func.gallery.getPrev(index, frescoItem.gallery.length)
                      )}
                    >
                      &#8592;
                    </a>
                  </span>
                </a>
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
  const frescoItems = await fetchFromCMS('frescoes');
  return {
    paths: frescoItems.map((frescoItem) => ({
      params: {
        slug: frescoItem.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const frescoItem = await fetchFromCMS(`frescoes?slug=${params.slug}`);
  return {
    props: { frescoItem: frescoItem[0] },
    revalidate: 1,
  };
}


export default FrescoItem;


