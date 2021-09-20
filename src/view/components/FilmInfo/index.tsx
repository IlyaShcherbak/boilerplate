//Core
import React, { FC } from 'react';

//Types
import { Film } from '../../../bus/films/types';

//Styles
import { FilmInfoContainer, StyledInfo, StyledInfoTitle } from './styles';


export const FilmInfo: FC<Film> = (props) => {
    if (!props.title) {
        return <p>No film found</p>;
    }

    return (
        <FilmInfoContainer>
            <StyledInfoTitle>{props.title}</StyledInfoTitle>

            <StyledInfo>Episede #: {props.episode_id}</StyledInfo>
            <StyledInfo>Opening Crawl: {props.opening_crawl}</StyledInfo>
            <StyledInfo>Director: {props.director}</StyledInfo>
            <StyledInfo>Producer: {props.producer}</StyledInfo>
            <StyledInfo>Release date: {props.release_date}</StyledInfo>
            {/* <StyledInfo>Planets: {
                props.planets.map((planet) => {
                    return <StyledInfoItem> {planet}</StyledInfoItem>;
                })
            }
            </StyledInfo> */}
            {/* <StyledInfo>Characters: {
                props.characters.map((char) => {
                    return <StyledInfoItem> {char}</StyledInfoItem>;
                })
            }
            </StyledInfo> */}
            {/* <StyledInfo>Starships: {
                props.starships.map((ship) => {
                    return <StyledInfoItem> {ship}</StyledInfoItem>;
                })
            }
            </StyledInfo> */}
            {/* <StyledInfo>Vehicles: {
                props.vehicles.map((vehicle) => {
                    return <StyledInfoItem> {vehicle}</StyledInfoItem>;
                })
            }
            </StyledInfo> */}
            <StyledInfo>Url: {props.url}</StyledInfo>
            <StyledInfo>Created: {props.created}</StyledInfo>
            <StyledInfo>Edited: {props.edited}</StyledInfo>
        </FilmInfoContainer>
    );
};
