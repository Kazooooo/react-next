import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import { UrlComponent, Context } from "next";

interface PostProps extends UrlComponent {
  show: any;
}

const Post: React.SFC<PostProps> = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function (context: Context) {
  const { id } = context.query;
  const res = await fetch(`http://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
}

export default Post;
