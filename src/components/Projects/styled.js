import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ContainerProjects = styled.section`

  .landing-page p{
    padding-top: 20px;

    color: ${colors.primaryColor};
    text-align: center;
  }

  .landing-page h5{
    padding-top: 10px;
    text-align: center;

  }

  .landing-page img{

    display: block;
    width: 34rem;
    margin-left: auto;
    margin-right: auto;
    border: 0.2rem solid ${colors.primaryColor};
    border-radius: 20px;
    margin-top: 10px;
  }
`;
