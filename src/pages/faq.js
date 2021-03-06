import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Image from 'gatsby-image'


import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import Container from '../components/Container'
import Content from '../components/Content'

export default class FaqPage extends React.Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark

    return (
      <Wrapper>
            <Header background={frontmatter.image.childImageSharp.sizes} tagline={frontmatter.tagline}/>

          <Container>
            <Content><div dangerouslySetInnerHTML={{ __html: html }}  /></Content>
          </Container>
      </Wrapper>
    )
  }
}

FaqPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query FaqQuery {
    markdownRemark(frontmatter: {templateKey: { eq: "faq" }}) {
      html
      frontmatter {
        image {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
              aspectRatio
            }
          }
        }
        tagline
      }
    }
  }
`

const Tagline = styled.h1`
`