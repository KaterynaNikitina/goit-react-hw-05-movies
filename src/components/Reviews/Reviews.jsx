import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReview } from 'services/movies-api';
import { ReviewList, Text } from './Review.styled';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchReview = async () => {
      try {
        const reviewData = await getMovieReview(movieId);
        setReview(reviewData);
      } catch (error) {
        const controller = new AbortController();
        controller.abort();
      }
    };

    fetchReview();
  }, [movieId]);

  return (
    <ReviewList>
      {review.length === 0 ? (
        <p>There is no any review.</p>
      ) : (
        review.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h4>Author: {author}</h4>
              <Text>{content}</Text>
            </li>
          );
        })
      )}
    </ReviewList>
  );
};

export default Reviews;
