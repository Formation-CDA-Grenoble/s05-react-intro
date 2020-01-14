import React from 'react';

import { Link } from 'react-router-dom';

import Article from '../components/Article';

import Layout from '../components/Layout';

import data from '../data';


class Page extends React.Component {
  state = {
    articleId: this.props.match.params.id,
  };

  nextArticle = () => {
    let newArticleId = this.state.articleId + 1;
    if (newArticleId >= data.length) {
      newArticleId = 0;
    }
    this.setState({ articleId: newArticleId });
  }
  
  render = function() {
    const articleData = data[this.state.articleId];

    return (
      <Layout>
        <Link to="/">Retour à l'accueil</Link>
        <Article title={articleData.title} text={articleData.text} />
        <button onClick={this.nextArticle}>Article suivant</button>
      </Layout>
    );
  }
}

export default Page;
