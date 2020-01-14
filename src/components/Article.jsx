import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import '../styles/Article.css';

function Article(props) {
  console.log(props);
  const id = props.id;

  return (
    <article class="Article">
      <Link to={`/article/${id}`}>
        <h1>{props.title}</h1>
      </Link>
      <p>{props.text}</p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
