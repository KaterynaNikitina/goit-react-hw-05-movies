import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/movies-api';
import { CastList, Item, Image, Title, Text } from './Cast.styled';
import { nanoid } from 'nanoid';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      try {
        const castData = await getMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        console.log('Smthg went wrong');
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <CastList>
      {!cast || cast.length === 0 ? (
        <p>There is no cast info about this movie</p>
      ) : (
        cast.map(({ profile_path, name, character }) => {
          return (
            <Item key={nanoid()}>
              <Image
                src={
                  profile_path
                    ? `https://www.themoviedb.org/t/p/original/${profile_path}`
                    : defaultImg
                }
                alt={name}
                width="300"
              ></Image>
              <Title>{name}</Title>
              <Text>{character}</Text>
            </Item>
          );
        })
      )}
    </CastList>
  );
};

export default Cast;
