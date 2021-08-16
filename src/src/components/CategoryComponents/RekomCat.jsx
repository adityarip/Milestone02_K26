import React from 'react'
import styled from 'styled-components'
// import Star from './src/src/pages/Category/Black_Star.svg.png'

const Title = styled.div`
    width: 43rem;
    height: 5rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    color: #333333;
    text-align: center;
    padding-top: 40px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    width: auto;
    height: 15rem;
    box-shadow: 0px 100px 135px rgba(0, 0, 0, 0.1);
    border-radius: 45px;
    margin: 15px 33px;
`

const Shopname = styled.div`
    padding-left: 22rem;
    padding-top: 1rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 82px;
    color: #333333;
`

const Deskripsi = styled.div`
    padding-left: 22rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    color: #515050;
`

const Harga = styled.div`
    text-align: right;
    padding-top: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    color: #515050;
    padding-right: 3rem;
`

const Box = styled.button`
    width: 8rem;
    height: 3rem;
    background: #FDBD5D;
    border-radius: 26px;
    align-self: flex-end;
    margin-top: 1rem;
    margin-right: 1rem;
`

const Vote = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 1.3rem;
    color: #000000;
    text-align: center;
    padding-top: 0.5rem;
`

const Background = styled.div`
    height: 1000px;
    left: 0px;
    top: 200px;
    background: linear-gradient(
    180deg
    ,rgba(253,189,93,0.56) 0%,rgba(251,145,112,0.69) 100%);
    border-radius: 120px;
    margin-bottom: -85px;
`

const RekomCat = () => {
    return (
        <Background>
            <Title>Rekomendasi Makanan</Title>
            <Card>
                <Shopname>Martabak Holland</Shopname>
                <Deskripsi>Martabak Biasa, Martabak Spesial, Martabak Garing, Ekstra Isi</Deskripsi>
                <Harga>Rp25.000</Harga>
                <Box>
                    <Vote>Upvote</Vote>
                </Box>
            </Card>
            <Card>
            <Shopname>Nasi Goreng Sedap Malam</Shopname>
                <Deskripsi>Nasi Goreng, Mie Goreng, Capcay Goreng, Mie Rebus, Bihun Goreng</Deskripsi>
                <Harga>Rp15.000</Harga>
                <Box>
                    <Vote>Upvote</Vote>
                </Box>
            </Card>
            <Card>
            <Shopname>Shihlin</Shopname>
                <Deskripsi>Crispy Chicken, Seafood Tempura, Happy! Ricebox</Deskripsi>
                <Harga>Rp50.000</Harga>
                <Box>
                    <Vote>Upvote</Vote>
                </Box>
            </Card>
        </Background>
    )
}

export default RekomCat