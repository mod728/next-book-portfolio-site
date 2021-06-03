import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="ページが見つかりません" description="これは404ページです" /> 
    <div style={{textAlign: "center", height: "70vh"}}>
      <h1>404: Not Found</h1>
      <p>ページが見つかりません。</p>
    </div>
  </Layout>
)

export default NotFoundPage