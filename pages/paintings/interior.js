import Head from 'next/head'
import fetchFromCMS from '../../lib/service';
import func from '../../lib/global'
import Layout from '../../components/Layout';

export default function Abstract_Pt({ paintingItems }) {

    let paintings = paintingItems.slice().reverse().filter(p => p.category == 'interior')

    return (
        <Layout>

            <Head>
                <title>Anne Schouler - Interior paintings</title>
                {/* CSS Box style sheet */}
                <link rel="stylesheet" href="../../css/cssbox.css" />
            </Head>

            <div className="content content_project">
                <h4 className="content-title">Interior</h4>

                {/* Cards generation */}
                <div className="gallery">
                    <ul>
                        {/* Gallery generation */}
                        {paintings.map((p, index) => (
                            <li>
                                <a>
                                    <img className="cssbox_thumb"
                                        onClick={() => func.gallery.pop(index)}
                                        src={p.image.url}
                                        alt={p.image.name}
                                        loading="lazy" />
                                    <span className="cssbox_full cssbox_hidden">
                                        <div className="cssbox_wrapper">
                                            <div className="cssbox_fit">
                                                <img src={p.image.url} />
                                                <span className="cssbox_size">{p.sizes}</span>
                                            </div>
                                        </div>
                                        <a className="cssbox_close"
                                            onClick={() => func.gallery.shut(index)}>
                                        </a>
                                        <a className="cssbox_next"
                                            onClick={() => func.gallery.switch(
                                                index,
                                                func.gallery.getNext(index, paintings.length)
                                            )}
                                        >
                                            &#8594;
                                        </a>
                                        <a className="cssbox_prev"
                                            onClick={() => func.gallery.switch(
                                                index,
                                                func.gallery.getPrev(index, paintings.length)
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

export async function getStaticProps() { // Fetch the corresponding collection and returns it
    const paintingItems = await fetchFromCMS('paintings');
    return {
        props: { paintingItems },
        revalidate: 1,
    };
}