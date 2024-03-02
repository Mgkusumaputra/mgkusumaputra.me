type certificate = {
  slug: string;
  entry: {
    title: string;
    Url: string;
    orgLogo: string;
    Org: string;
    issuedDate: string | null;
  };
};

type Post = {
  slug: string;
  entry: {
    coverImage: string;
    title: string;
    publishedAt: string;
  };
};

export function sortPosts<P extends Post>(posts: P[]) {
  return posts.sort(
    (a, b) =>
      new Date(b.entry.publishedAt).getTime() -
      new Date(a.entry.publishedAt).getTime(),
  );
}

export function sortCertificates<C extends certificate>(posts: C[]) {
  return posts.sort((a, b) => {
    const dateA = a.entry.issuedDate
      ? new Date(a.entry.issuedDate).getTime()
      : 0;
    const dateB = b.entry.issuedDate
      ? new Date(b.entry.issuedDate).getTime()
      : 0;
    return dateB - dateA;
  });
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
