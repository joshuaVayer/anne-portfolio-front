import Head from 'next/head'
import func from '../../lib/global'
import fetchFromCMS from '../../lib/service';
import Layout from '../../components/Layout';

export default function Abstract_Pt({ paintingItems }) {

    let paintings = paintingItems.slice().reverse().filter(p => p.category == 'abstract')

    return (
        <Layout>

            <Head>
                <title>Anne Schouler - Abstract paintings</title>
                {/* CSS Box style sheet */}
                <link rel="stylesheet" href="../../css/cssbox.css" />
            </Head>

            <div className="content content_project">
                <h4 className="content-title">Abstract</h4>

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
                                        <img src={p.image.url} />
                                        <i>
                                            {func.gets.get_size(p.size)}
                                        </i>
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