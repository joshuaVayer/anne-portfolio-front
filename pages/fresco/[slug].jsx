import Layout from '../../components/Layout';
import fetchFromCMS from '../../lib/service';
import Head from 'next/head'


const FrescoItem = ({ frescoItem }) => {
  console.log(frescoItem.gallery[0].formats.large.url);
  return (
    <Layout>

      <Head>
        <title>Anne Schouler - { frescoItem.title }</title>
        {/* CSS Box style sheet */}
        <link rel="stylesheet" href="../../css/cssbox.css"/>
      </Head>

      <div className="content content_project">
        <h4 className="content-title">{ frescoItem.title }<span>{ get_location(frescoItem.location) }</span></h4>

        { get_content(frescoItem.content) }

        <div className="gallery">
          <ul>
            {/* Gallery generation */}
            {frescoItem.gallery.map((img, index) => (
              <li>
                <a id={ 'image' + index } href={ '#image' + index }>
                  <img className="cssbox_thumb" src={ get_image(img.formats) } alt={ frescoItem.title } loading="lazy" />
                  <span className="cssbox_full">
                    <img src={ img.url } />
                    </span>
                </a>
                <a className="cssbox_close" href="#void"></a>
                <a className="cssbox_next" href={ '#image' + next(index, frescoItem.gallery.length) }>&#8594;</a>
                <a className="cssbox_prev" href={ '#image' + prev(index, frescoItem.gallery.length) }>&#8592;</a>
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

// Checks if those fields exists
const get_content = (content) => {
  if (content != undefined) {
    return <p className="content-par">{content}</p>
  }
}
const get_location = (content) => {
  if (content != undefined) {
    return <span className="content-location">{" - " + content}</span>
  }
}

const get_image = (formats) => {
  if( formats.medium == undefined ){
    return formats.small.url
  }
  return formats.medium.url
}

// Arrow index calculation for the gallery
const next = (current, length) => {
  if (current == (length - 1)) {
    return 0
  }
  return current + 1
}
const prev = (current, length) => {
  if (current == 0) {
    return length - 1
  }
  return current - 1
}

export default FrescoItem;


