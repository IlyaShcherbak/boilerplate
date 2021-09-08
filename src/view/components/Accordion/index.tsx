//Core
import React, { FC, useState } from 'react';

// Styles
import { AccordionContainer, AccordionItem, AccordionQuestion, AccordionAnswer } from './styles';


type PropTypes = {
    data: Array<{question: string, answer: string }>,
    title?: string,
};

export const Accordion: FC<PropTypes> = ({ data, title = 'Accordion by def props' }) => {
    const [ selectedAccordion, setSelectedAccordion ] = useState<Set<number>>(new Set([ 0 ]));

    const updateSelectedAccordion = (index: number) => {
        if (selectedAccordion.has(index)) {
            selectedAccordion.delete(index);
        } else {
            selectedAccordion.add(index);
        }
        setSelectedAccordion(new Set(selectedAccordion));
    };

    return (
        <AccordionContainer>
            <h1>{title}</h1>
            {data.map((accordionItem, index) =>{
                return (
                    <AccordionItem
                        className = { selectedAccordion.has(index) ? 'selected' : '' }
                        key = { `accordion-item-${index}` }
                        onClick = { () => updateSelectedAccordion(index) }>
                        <AccordionQuestion className = 'accordion-question'>
                            <span>{`${index + 1}. ${accordionItem.question}`}</span>
                        </AccordionQuestion>
                        { selectedAccordion.has(index) && (
                            <AccordionAnswer className = 'accordion-answer'>
                                { accordionItem.answer }
                            </AccordionAnswer>
                        )}
                    </AccordionItem>
                );
            })}
        </AccordionContainer>
    );
};
