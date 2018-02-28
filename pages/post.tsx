import Layout from "../components/MyLayout";
import { UrlComponent } from "../typings/next/UrlComponent";

interface PageProps extends UrlComponent {
}

const Page: React.SFC<PageProps> = ({url}) => (
  <Layout>
    <h1>{url.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
);

export default Page;
