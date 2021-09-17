//Core
import React, { FC } from 'react';

//Types
import { Person } from '../../../bus/people/types';

//Styles
import { PersonInfoContainer, StyledInfo, StyledInfoTitle, StyledInfoItem } from './styles';


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
            <StyledInfo>Homeworld: {props.homeworld}</StyledInfo>
            <StyledInfo>Films: {
                props.films.map((film) => {
                    return <StyledInfoItem> {film}</StyledInfoItem>;
                })
            }
            </StyledInfo>
            <StyledInfo>Starships: {
                props.starships.map((ship) => {
                    return <StyledInfoItem> {ship}</StyledInfoItem>;
                })
            }
            </StyledInfo>
            <StyledInfo>Vehicles: {
                props.vehicles.map((vehicle) => {
                    return <StyledInfoItem> {vehicle}</StyledInfoItem>;
                })
            }
            </StyledInfo>
            <StyledInfo>Url: {props.url}</StyledInfo>
            <StyledInfo>Created: {props.created}</StyledInfo>
            <StyledInfo>Edited: {props.edited}</StyledInfo>
        </PersonInfoContainer>
    );
};
