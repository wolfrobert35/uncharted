import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../img/logo_white.png'
import rejsegaranti from '../img/rejsegaranti.png'

import Info from './ContactCard/Info'

const Footer = (props) => (
  <Wrapper>
      <Container>
        <Column>
            <Heading>Adventures</Heading>
            {
                props.packages.map(({ node: post }) => (
                    <Link to={post.fields.slug} key={post.id}>
                    {post.frontmatter.title}
                    </Link>
              ))
            }
        </Column>
        <Column>
            <Heading>Useful Links</Heading>
            
        </Column>
        <Column>
            <Heading>Reach Us Anytime</Heading>
            <Info />
        </Column>
        <Column>
            <Image src={logo} alt="Uncharted" />
            <p>Copyright © 2017 Uncharted IvS. All rights reserved.
            <br />CVR-number: 38716794</p>
            <Image src={rejsegaranti} alt="Rejsegaranti Fonden" />
        </Column>
      </Container>

  </Wrapper>
)

export default Footer

const Wrapper = styled.footer`
background-color: #1F233D
margin-top: 4rem
padding: 1rem
& a {
    display: block
    text-transform: uppercase
    font-weight: 600
    font-size: 1rem
    line-height: 2
}
& p {
    font-size: 1rem
    margin: 1rem 0
}
`

const Container = styled.div`
max-width: 1024px
margin: 2rem auto
display: grid
grid-template-columns: 1fr 1fr 1fr 1fr
`

const Column = styled.div`
`
const Heading = styled.h3`
font-weight: 200
margin-bottom: 1em
`
const Image = styled.img`
width: 100%
max-width: 140px
`