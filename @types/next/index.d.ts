import * as next from "next";
import * as http from "http";
declare module "next" {
  interface UrlProps {
    readonly query: { [key: string]: string };
  }

  interface UrlComponent {
    readonly url: next.UrlProps;
  }

  interface Context {
    readonly pathname: string;
    readonly query: any;
    readonly asPath: string;
    readonly req?: http.IncomingMessage;
    readonly res?: http.ServerResponse;
    readonly jsonPageRes?: Response;
    readonly err?: any;
  }
}
