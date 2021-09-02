// Core
import styled from 'styled-components';

export const AccordionContainer = styled.section`
    font-family: Verdana;
    width: 800px;
    margin-top: 50px;

    h1 {
    text-transform: capitalize;
    margin-bottom: 30px;
    text-align: center;
  }
`;

export const AccordionQuestion = styled.div`
    position: relative;
    padding: 15px 30px;
    background: #F1F4FB;
    font-size: 16px;
    color: rgba(0,0,0,0.6);
    line-height: 24px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 22px;
    transition: color 0.3s;

    :hover {
        color: #000;
    }

    &::after {
        content: '+';
        position: absolute;
        right: 30px;
        text-align: center;
    } 
`;

export const AccordionAnswer = styled.p`
    padding: 0 30px;
    margin: 0 0 22px;
    font-size: 16px;
    color: #000;
    display: none;
`;

export const AccordionItem = styled.div`
    margin-bottom: 10px;

    &:hover {
      .accordion-question {
        color: #000;
      }
    }

    &.selected {
      .accordion-question {
        cursor: initial;
        color: #4886FF;

        &::after {
          content: '-';
        }
      }

      .accordion-answer {
        display: inline-block;
      }
    }
`;
