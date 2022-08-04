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
    font-size: 2rem;
    text-transform: uppercase;
  }

  h6 {
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  a{
    text-decoration: none;
  }

  p{
    margin-bottom: 1rem;
  }

  // nav
  .menu {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: 0.1rem solid ${colors.lightGrayColor};
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
    color: ${colors.primaryColor};
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
    color: ${colors.primaryColor};
    position: relative;
  }

  .menu ul li a::after {
    content: '';
    position: absolute;
    bottom: 1rem;
    left: 50%;
    width: 0;
    height: 0.2rem;
    background: ${colors.secondaryColor};
    transition: all 300ms ease-in-out;
  }

  .menu ul li a:hover::after {
    width: 50%;
    left: 25%;
  }

  .menu-spacing{
    height: 8.8rem;
  }

  .main-bg{
    background-color: #212121;
    color: ${colors.lightGrayColor};
  }

  .white-bg{
    background-color: ${colors.whiteColor};
    color:${colors.primaryColor} ;
  }

  .main-content{
    max-width: 140rem;
    margin: 0 auto;
    padding: 1rem ${colors.gap};
  }

  .intro-content{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 8.8rem);
  }

  .section {
    min-height: calc(100vh - 8.8rem);
  }

  .section p {
    font-weight: bold;
    color: ${colors.lightGrayColor};
  }

  .portfolio-text{
    text-align: center;
  }

  figure {
    position: relative;
    z-index: 1;
  }

  .img-me{
    border-bottom-left-radius: 50%;
    border: 0.5rem solid black;
    z-index: -1;
  }

  .img-black{
    width: 35rem;
    height: 45rem;
    background-color: black;
    position: absolute;
    top: -1rem;
    left: 2rem;
    border-bottom-left-radius: 50%;
    z-index: -2;

  }

  .potfolio-content{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  .bg{
    background: ${colors.lightGrayColor};
    width: 35rem;
    height: 35rem;
    border-radius: 20px;
  }
`;
