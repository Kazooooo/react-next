import Layout from "../components/MyLayout";
import { UrlComponent } from "../typings/next/UrlComponent";

const Content:React.SFC<{title: string}> = ({title}) => (
  <div>
    <h1>{title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

interface PageProps extends UrlComponent {
}

const Page: React.SFC<PageProps> = ({url}) => (
  <Layout>
    <Content title={url.query.title} />
  </Layout>
);

export default Page;
