//Core
import React, { FC } from 'react';

//Types
import { Person } from '../../../bus/people/types';

//Styles
import { PersonInfoContainer, StyledInfo, StyledInfoTitle, StyledInfoItem, StyledLink } from './styles';


export const PersonInfo: FC<Person> = (props) => {
    if (!props.name) {
        return <p>No peron found</p>;
    }

    return (
        <PersonInfoContainer>
            <StyledInfoTitle>{props.name}</StyledInfoTitle>

            <StyledInfo>Gender: {props.gender}</StyledInfo>
            <StyledInfo>Birth date: {props.birth_year}</StyledInfo>
            <StyledInfo>Eye color: {props.eye_color}</StyledInfo>
            <StyledInfo>Hair color: {props.hair_color}</StyledInfo>
            <StyledInfo>Mass: {props.mass}</StyledInfo>
            <StyledInfo>Skin color: {props.skin_color}</StyledInfo>

            <StyledInfo>Character's homeworld:
                <StyledLink href = { props.homeworld }> {props.name}'s homeworld</StyledLink>
            </StyledInfo>

            <StyledInfo>Films: {
                props.films.map((film, index) => {
                    return (
                        <StyledInfoItem>
                            <StyledLink href = { film }>Link to film info: {index + 1}</StyledLink>
                        </StyledInfoItem>
                    );
                })
            }
            </StyledInfo>
            <StyledInfo>Starships: {
                props.starships.map((ship, index) => {
                    return (
                        <StyledInfoItem>
                            <StyledLink href = { ship }>Link to starship info: {index + 1}</StyledLink>
                        </StyledInfoItem>
                    );
                })
            }
            </StyledInfo>
            <StyledInfo>Url: <StyledLink href = { props.url }>Info about {props.name}</StyledLink></StyledInfo>
            <StyledInfo>Created: {props.created}</StyledInfo>
            <StyledInfo>Edited: {props.edited}</StyledInfo>
        </PersonInfoContainer>
    );
};
