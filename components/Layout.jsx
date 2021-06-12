import Head from 'next/head'
import Navbar from './shared/Navbar'

const Layout = ({ children }) => (
    <div className="wrapper">
        <Head>
            <title>Anne Schouler</title>
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