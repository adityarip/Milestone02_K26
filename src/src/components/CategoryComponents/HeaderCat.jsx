import React from 'react'
import styled from 'styled-components'
import Food from '../../shared/food.svg'
import Clothes from '../../shared/clothes.svg'
import Supplies from '../../shared/homesupp.svg'
import Tech from '../../shared/tech.svg'
import Stat from '../../shared/stationery.svg'
import Health from '../../shared/healthcare.svg'
import More from '../../shared/more.png'

const CatPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    color: #333333;
`

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 10rem;
    margin: 2rem;
`

const CatButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #FFFFFF;
    border-radius: 36px;
    width: 16rem;
    height: 22rem;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)
`

const CardText = styled.div`
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-size: 1.5rem;
    margin: 1.5rem;
`

const HeaderCat = () => {
    return (
        <CatPage>
            <Title>We Promote Best Services</Title>
            <Button>
                <CatButton>
                    <img src={Food}/>
                    <CardText>Food</CardText>
                    <img src={More}/>
                </CatButton>
                <CatButton>
                    <img src={Clothes}/>
                    <CardText>Clothes</CardText>
                    <img src={More}/>
                </CatButton>
                <CatButton>
                    <img src={Supplies}/>
                    <CardText>Home Supplies</CardText>
                    <img src={More}/>
                </CatButton>
            </Button>
            <Button>
                <CatButton>
                    <img src={Tech}/>
                    <CardText>Technology</CardText>
                    <img src={More}/>
                </CatButton>
                <CatButton>
                    <img src={Stat}/>
                    <CardText>Stationery</CardText>
                    <img src={More}/>
                </CatButton>
                <CatButton>
                    <img src={Health}/>
                    <CardText>Healthcare</CardText>
                    <img src={More}/>
                </CatButton>
            </Button>
        </CatPage>
    )
}

export default HeaderCat
