import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Article.css';

function Article(props) {
  return (
    <article class="Article">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Article;
