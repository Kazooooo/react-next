interface UrlComponent {
  url: UrlProps;
}

interface UrlProps {
  query: { [key: string]: string };
}

interface Context {
  readonly pathname: string;
  readonly query: any;
  readonly asPath: string;
  readonly req?: any;
  readonly res?: any;
  readonly jsonPageRes?: Response;
  readonly err?: any;
}
