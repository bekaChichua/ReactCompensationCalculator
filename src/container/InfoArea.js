import styled from 'styled-components';

const InfoArea = ({children}) => {
  return (
  <>
    <Title>Quam Tristique Condimentum</Title>
    <StyledText>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.</StyledText>
    {children}
    <Title gridName="title2" fontSize="32px" fontHeight="35px" topPadding="24px">
        Fringilla Euismod Adipiscing Ipsum
    </Title>
    <StyledText gridName="content2">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.
    </StyledText>
    <ImageContainer>
        <Image></Image>
    </ImageContainer>
    <StyledUl>
       <li> Tellus Ullamcorper Inceptos</li>
       <li> Magna Condimentum </li>
       <li> Mattis Tristique</li>
       <li> Pharetra Pellentesque Dapibus</li>
       <li> Aenean Inceptos</li>
       <li> Parturient Bibendum</li>
    </StyledUl>
  </>
  );
};

export default InfoArea;

const ImageContainer = styled.div`
    padding-top: 24px;
    grid-area: image;
`

const Image = styled.div`
    grid-area: image;
    margin: auto;
    max-width: 240px;
    min-width: 200px;
    height: 180px;
    background: url(img.png), #C4C4C4;
    background-position: center;
    background-size: cover;
    border-radius: 4px;
`

const StyledUl = styled.ul`
    list-style: none;
    grid-area: list;
    margin-left: 5px;
    min-width: 360px;
    li::before{
        content: "";
        display: inline-block; 
        width: 16px;
        height: 4px;
        background: linear-gradient(90deg, #911812 0%, #E1261C 100%);
        margin-bottom: 5px;
        margin-right: 5px;
    }
    li:nth-child(n+3):nth-child(-n+4)::before{
        margin-left: 30px;
        content: "";
        display: inline-block; 
        width: 12px;
        height: 4px;
        background: linear-gradient(90deg, #D3DAE8 0%, #A7B7D8 100%);
        margin-bottom: 5px;
        margin-right: 8px;
    }
    li {
        padding-bottom: 0.5em;
        font-style: normal;
        color: #FFFFFF;
    }
`

const StyledText = styled.p`
  grid-area: ${props => props.gridName || "content"};
  font-style: normal;
  color: #ffffff;
`
const Title = styled.h1`
  grid-area: ${props => props.gridName || "title"};
  padding-top: ${props => props.topPadding};
  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.fontSize || "40px"};
  line-height: ${props => props.fontHeight || "50px"};
  letter-spacing: -0.02em;
  color: #ffffff;
  @media (max-width: 800px) {
  text-align: center;
}
`