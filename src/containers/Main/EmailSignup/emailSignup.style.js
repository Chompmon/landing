import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const EmailSignupArea = styled.div`
  width: 100%;
  padding: 75px 0;
  overflow: hidden;
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 20px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 460px;
  margin: 0 auto;
  text-align: center;

  img {
    display: inline-block;
    margin-bottom: 35px;
    @media only screen and (max-width: 667px) {
      margin-bottom: 27px;
      max-width: 50%;
    }
  }

  h2 {
    font-size: 48px;
    line-height: 60px;
    font-weight: 500;
    letter-spacing: -2px;
    margin-bottom: 30px;
    @media only screen and (max-width: 1366px) {
      font-size: 32px;
      line-height: 40px;
      letter-spacing: -1px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 667px) {
      font-size: 28px;
      line-height: 38px;
      letter-spacing: -0.5px;
      margin-bottom: 15px;
      padding: 0 15px;
    }
  }

  p {
    font-size: 16px;
    line-height: 33px;
    color: ${themeGet('colors.textColor', 'rgba(52, 61, 72, 0.8)')};
    @media only screen and (max-width: 667px) {
      line-height: 28px;
    }
  }
  
  form > * {
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
      &:focus {
    outline: none;
  }
  }
  
  form > input {
    border-radius: 4px;
    padding: .5rem;
    font-size: ${themeGet('fontSizes.3', '16')}px;
  font-weight: ${themeGet('fontWeights.2', '500')};
  width: 100%;
  margin: 8px 0;
  border: 1px solid #ccc;
  box-sizing: border-box;  
  }
  
  form > button {
  color: ${themeGet('colors.white', '#ffffff')};
  background-color: ${themeGet('colors.primary', '#028489')};
  font-size: ${themeGet('fontSizes.4', '16')}px;
  font-weight: ${themeGet('fontWeights.4', '500')};
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  }
`;

export default EmailSignupArea;
