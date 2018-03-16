import * as Markdown from "react-markdown";
import Layout from "../components/MyLayout";
import { UrlComponent, Context } from "next";

interface PostProps extends UrlComponent {
}

const Post: React.SFC<PostProps> = (props) => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <div className="markdown">
      <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link)
And we can have a title as well.

### this is a title

And here's the content.
      `}/>
      <style jsx global>{`
        .markdown {
          font-family: "Arial";
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  </Layout>
);

export default Post;
