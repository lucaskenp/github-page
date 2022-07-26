import { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    color: ${colors.primaryColor};
    line-height:1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;

  }

  h1 {
    font-size: 6rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: 5.5rem;
  }

  h2{
    font-size: 6rem;
    margin-bottom: 5rem ;
    text-transform: uppercase;
    line-height: 1.2;
  }

  h3 {
    font-size: 5rem;
  }

  h4 {
    font-size: 4.5rem;
  }

  h5 {
    font-size: 4rem;
    text-transform: uppercase;
  }

  h6 {
    font-size: 3.5rem;
    text-transform: uppercase;
  }

  a{
    text-decoration: none;
  }

  p{
    margin-bottom: 3rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 4rem;
  }

  /* h1 {
    font-size: 5rem;
  }

  p {
    font-size: 3rem;
    font-weight: medium;
    color: rgb(83, 83, 83);
  } */

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
  }

  .cta {
    font-weight: bold;
    padding: 1rem 2rem;
  }

  .hire {
    background-color: white;
    border: 0.2rem solid black;
  }

  .hire:hover {
    background-color: black;
    border: 0.2rem solid black;
    color: white;
  }

  .project {
    background-color: black;
    border: 0.2rem solid black;
    color: white;
  }

  .project:hover {
    background-color: white;
    color: black;
  }

  figure {
    position: relative;
  }

  .me-img {
    border: 0.5rem solid black;
    border-bottom-left-radius: 50%;
  }

  .img-bg {
    width: 35rem;
    height: 45rem;
    background-color: black;
    position: absolute;
    top: -1rem;
    left: 2rem;
    border-bottom-left-radius: 50%;
    z-index: -1;
  }

  @media screen and (min-width: 800px) {
    .content {
      flex-direction: row;
      margin: 8rem;
    }

    h1 {
      font-size: 7rem;
    }

    .cta {
      padding: 2rem 3rem;
      font-size: 1.6rem;
    }
  }

  // nav
  .main-content{
    max-width: 160rem;
    margin: 0 auto;
    padding: 10rem ${colors.gap};
  }

  .white-bg{
    background-color: ${colors.whiteColor};
    color: ${colors.primaryColor} ;
  }

  .menu {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: 0.1rem solid var(--light-gray-color);
  }

  .menu-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
  }

  .menu h1 {
    font-size: 2.3rem;
    color: var(--primary-color);
  }

  .menu h1 a {
    color: inherit;
  }

  .menu ul {
    list-style: none;
    display: flex;
  }

  .menu ul li a {
    display: block;
    padding: 2rem;
    font-size: 1.8rem;
    color: var(--primary-color);
    position: relative;
  }

  .menu ul li a::after {
    content: '';
    position: absolute;
    bottom: 1rem;
    left: 50%;
    width: 0;
    height: 0.2rem;
    background: var(--secondary-color);
    transition: all 300ms ease-in-out;
  }

  .menu ul li a:hover::after {
    width: 50%;
    left: 25%;
  }

`;
