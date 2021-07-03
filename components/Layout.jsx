import Head from 'next/head'
import Navbar from './shared/Navbar'

const Layout = ({ children }) => (
    <div className="wrapper">
        <Head>
            <title>Anne Schouler</title>
            <meta name="title" content="Anne Schouler - Interior Designer and Painter" />
            <meta name="description" content="Anne Schouler's personal portfolio." />
            <meta name="keywords" content="Anne Schouler, Schouler, Painter, Mallorca, Interior Design, Palma de Mallorca" />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta property="og:image" content="https://res.cloudinary.com/anne-schouler/image/upload/v1622114160/thumbnail_format_A_sania_spa_39f5a5c50a.jpg" />
        </Head>
        <main>
            <Navbar />
            {children}
        </main>
        <footer>
            <a href="mailto:anneschouler@hotmail.com">anneschouler@hotmail.com</a>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        <script src="/js/sidebar.js"></script>
    </div>
)

export default Layout;