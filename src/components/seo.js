import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function SEO({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  );

  const keyword = site.siteMetadata.keywords;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;

  return (
    <Helmet htmlAttributes={{ lang: "id" }}>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>

      {/* Meta Tags untuk SEO */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keyword} />
      <meta name="author" content={site.siteMetadata.author} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph untuk sosial media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />

      {children}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default SEO;
