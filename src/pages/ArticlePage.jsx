import React from 'react';

import Article from '../components/Article';

import Layout from '../components/Layout';

import data from '../data';


class Page extends React.Component {
  state = {
    articleId: 0,
  };

  nextArticle = () => {
    let newArticleId = this.state.articleId + 1;
    if (newArticleId >= data.length) {
      newArticleId = 0;
    }
    this.setState({ articleId: newArticleId });
    console.log(this.state.articleId);
  }
  
  render = function() {
    const articleData = data[this.state.articleId];

    return (
      <Layout>
        <Article title={articleData.title} text={articleData.text} />
        <button onClick={this.nextArticle}>Article suivant</button>
      </Layout>
    );
  }
}

export default Page;
