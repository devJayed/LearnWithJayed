import { Helmet } from "react-helmet-async";

type PageSeoProps = {
  title: string;
  description: string;
  canonical?: string;
};

export function PageSeo({ title, description, canonical }: PageSeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Helmet>
  );
}
