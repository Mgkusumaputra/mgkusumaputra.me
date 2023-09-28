type certificate = {
  slug: string;
  entry: {
    title: string;
    Url: string;
    orgLogo: string;
    Org: string;
    issuedDate: string;
  };
};

type Post = {
  slug: string;
  entry: {
    title: string;
    publishedAt: string;
  };
};

export function sortPosts<P extends Post>(posts: P[]) {
  return posts.sort(
    (a, b) =>
      new Date(b.entry.publishedAt).getTime() -
      new Date(a.entry.publishedAt).getTime()
  );
}

export function sortCertificates<C extends certificate>(posts: C[]) {
  return posts.sort(
    (a, b) =>
      new Date(b.entry.issuedDate).getTime() -
      new Date(a.entry.issuedDate).getTime()
  );
}

export function formatDate(date: string) {
  const [day, month, year] = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(new Date(date))
    .split(" ");
  return `${day} ${month} ${year}`;
}

export function formatCertificateDate(date: string) {
  const [month, year] = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  })
    .format(new Date(date))
    .split(" ");
  return `${month} ${year}`;
}
