import styled from "styled-components";

export const NavBar=styled.div`
top: 0;
height:25px;
z-index: 100;
display: flex;
padding: 15px;
position: sticky;
align-items: center;
background-color: #000;
justify-content: space-between;

@media (max-width: 640px) {
 
}
`


export const Button=styled.button`
width: 3rem;
height: 3rem;
position: relative;
border-radius: 50%;
variant: outlined-primary;

@media (max-width: 640px) {
  width: 2.8rem;
  height: 2.8rem;

}

.nav__link_roundedCircle{
  bottom: 0;
  right: 0;
  color: #fff;
  width: 1.5rem;
  display: flex;
  height: 1.5rem;
  font-size: 13px;
  border-radius: 50%;
  position: absolute;
  text-align:center;
  align-items: center;
  justify-content:center;
  transform: translate(25%, 25%);

  @media (max-width: 640px) {
    bottom: 0;
    font-size: 11px;
    margin-right: 15px;
    transform: translate(25%, 25%);
  }




  // .nav__link__icon{
  //   width: 34px;
  //   height: 35px;
  //   object-fit: contain;

  //   @media (max-width: 640px) {
  //     width: 32px;
  //     height: 33px;
  
  //   }

 
  // }

  
`