//Core
import React, { FC, useState } from 'react';

// Styles
import { AccordionContainer, AccordionItem, AccordionQuestion, AccordionAnswer } from './styles';


type PropTypes = {
    data: Array<{question: string, answer: string }>,
    title?: string,
};

export const Accordion: FC<PropTypes> = ({ data, title = 'Accordion by def props' }) => {
    const [ selectedAccordion, setSelectedAccordion ] = useState<number>(0);

    return (
        <AccordionContainer>
            <h1>{title}</h1>
            {data.map((accordionItem, index) =>{
                return (
                    <AccordionItem
                        className = { selectedAccordion === index ? 'selected' : '' }
                        key = { `accordion-item-${index}` }
                        onClick = { () => setSelectedAccordion(index) }>
                        <AccordionQuestion className = 'accordion-question'>
                            <span>{`${index + 1}. ${accordionItem.question}`}</span>
                        </AccordionQuestion>
                        <AccordionAnswer className = 'accordion-answer'>
                            { accordionItem.answer }
                        </AccordionAnswer>
                    </AccordionItem>
                );
            })}
        </AccordionContainer>
    );
};
