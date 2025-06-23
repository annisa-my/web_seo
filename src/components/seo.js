import * as React from "react"
import { usestasticquery, graphql } from "gatsby"
import PropTypes from "prop-types"; // SEO Description 
import { propTypes } from "gatsby-plugin-image/dist/src/components/gatsby-image.server";

function SEO( { description, title, children }) {
    const  { site } = usestasticquery (
        graphql`
            query { 
                site  {
                    siteMetadata {
                        title 
                        description
                            author 
                        keywords
                    }
                }
            }
        `
    )
    const keyword = site.siteMetadata.keywords
    const metaDescription = description || site.siteMetadata.description 
    const defaultTitle = site.siteMetadata.title 



    SEO.defaultProps = { 
        lang: `en`,
        meta: [],
        description: ``,
    }

    SEO. prototype = {
        description: PropTypes.string,
        lang: propTypes.string,
        meta: propTypes.arrayOf(propTypes.object),
        title: propTypes.string.isRequired,
    }
    return (
        <>
            <title>{defaultTitle  ? `${title}  | ${defaultTitle}` : title}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={keywords} />
            <meta property="og:type" content="website" />
        
        
        
        
        
        </>
    )
}

export default SEO 