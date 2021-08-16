import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    width: 100%;
    height: 30rem;

    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 45px;
`
const Greytext = styled.h3`
    position: relative;
    padding-left: 10rem;
    padding-top: 4rem;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 200%;
    line-height: 1rem;

    color: rgba(0, 0, 0, 0.39);
`;

const Shopname = styled.h1`
    position: relative;
    padding-left: 10rem;
    padding-top: 2rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 400%;
    line-height: 4rem;

    color: #333333;
`;

const Address = styled.h4`
    position: relative;
    padding-top: 2rem;
    padding-left: 10rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 150%;
    line-height: 2rem;

    color: #515050;
`;

const Price = styled.h4`
    position: relative;
    padding-top: 1rem;
    padding-left: 10rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 150%;
    line-height: 2rem;

    color: #515050;
`;

const Button = styled.button`
    position: relative;
    margin-left: 10rem;
    margin-top: 5rem;
    width: 12rem;
    height: 4.5rem;

    background: #FDBD5D;
    border-radius: 24px;
`;

const Image = styled.img`
    position: absolute;
    margin-top: 5rem;
    margin-left: 46rem;
    width: 20rem;
    height: 20rem;
    background-repeat: no-repeat;
    border-radius: 15px;
`;

function Layout(props) {

    return (
        <div>
            <Card>
                <div>
                    <Image src={props.url} />
                </div>
                <div>
                    <Greytext>Weekly's Top</Greytext>
                    <Shopname>{props.name}</Shopname>
                    <Address>{props.address}</Address>
                    <Price>{props.price}</Price>
                    <Button><h2>More</h2></Button>
                </div>
            </Card>
        </div>   
    );
}

export default Layout;