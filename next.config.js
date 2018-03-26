const withAwesomeTypescript = require("next-awesome-typescript");
module.exports = withAwesomeTypescript({}, {
  exportPathMap: () => ({
      "/" : { page: "/" },
      "/about": { page: "/about" },
      "/p/hello-nextjs": { page: "/post", query: { title: "Hello Next.js" } },
      "/p/learn-nextjs": { page: "/post", query: { title: "Learn Next.js is awesome" } },
      "/p/deploy-nextjs-nextjs": { page: "/post", query: { title: "Deploy apps with Zeit" } },
      "/p/exporting-pages": { page: "/post", query: { title: "Learn to Export HTML Pages" } },
    }),
});
