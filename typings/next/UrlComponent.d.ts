export interface UrlComponent {
  url: UrlProps;
}

export interface UrlProps {
  query: {[key:string]: string};
}
