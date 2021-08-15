import React from 'react'
import styled from 'styled-components'
import Insta from '../../shared/instagram.svg'
import Twitter from '../../shared/twitter.svg'
import LINE from '../../shared/line.svg'
import email from '../../shared/email.svg'

const Footer = styled.div`
  box-sizing: border-box;
  font-size: 1rem;
  font-family: 'Poppins';

  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 50vh;
  flex-direction: column;
`
const Image = styled.div`
  float: left;
`

const H2 = styled.h2`
  position: relative;
  font-weight: 500;
  margin-bottom: 1rem;
`

const S1 = styled.section`
  width: 40%;
`

const S3 = styled.section`
  position: relative;
  width: 50%;
`
const S4 = styled.section`
  width: 100%;
  background: #181818;
  text-align: center;
  color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`
const IMG = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  padding-left: 1.7px;
  padding-top: 0px;
  padding-right: 2px;
`
const LI = styled.li`
  list-style: none;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  padding-top: 5px;
  padding-right: 2px;
  text-decoration: none;
  border-radius: 4px;
`
const LI_1 = styled.li`
  color: #999;
  text-decoration: none;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`

const UL = styled.ul`
  margin-top: 1rem;
  display: flex;
`
const UL_1 = styled.ul`
  margin-top: 1.5rem;
  display: flex;
`
const Line = styled.h2`
  position: absolute;
  margin-top: -10px;
  width: 50px;
  height: 2px;
  background: red;
`
const FooterContent = styled.footer`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: black;
  color: white;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Footer_p = styled.p`
  font-weight: 280;
  margin: 10px auto;
  line-height: 1.2rem;
  font-size: 1rem;
`

const BottomFooter = () => {
  return (
    <Footer>
      <FooterContent>
        <S1>
          <H2>About Us</H2>
          <Line />
          <Footer_p>
            Help Grant adalah platform berupa website untuk mempromosikan UMKM. Fitur utama platform ini adalah upvote UMKM favorit. 5 UMKM dengan upvote terbanyak akan ditampilkan pada weekly’s top dan home page. Diharapkan platform ini dapat membantu UMKM dalam meningkatkan pendapatan.
          </Footer_p>
          <UL>
            <LI><a href=""><img src={Insta} height="25rem" width="25rem" alt="c" /></a></LI>
            <LI><a href=""><img src={Twitter} height="25rem" width="25rem" alt="b" /></a></LI>
            <LI><a href=""><img src={LINE} height="25rem" width="25rem" alt="a" /> </a> </LI>
          </UL>
        </S1>
        <S3>
          <H2>Contact Info</H2>
          <Line />
          <UL_1>
            <LI_1>
              <IMG><img src={email} height="25rem" width="25rem" /></IMG>
              <span>menggokil@gmail.com</span>
            </LI_1>
          </UL_1>

        </S3>

      </FooterContent>
      <S4>
        <p>Copyright &copy;2020 HelpGrant. designed by <span>Figma</span></p>
      </S4>
    </Footer >
  )
}

export default BottomFooter
