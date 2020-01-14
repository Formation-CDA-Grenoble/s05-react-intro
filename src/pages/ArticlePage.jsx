import React from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Article from '../components/Article';


const data = [
  { title: "Bonjour Grenoble!", text: "Salut les copains" },
  { title: "Mon beau titre", text: "Comment allez-vous?" },
  { title: "Angular est-il en perte de vitesse?", text: "On dirait bien..." },
];


class Page extends React.Component {
  state = {
    articleId: 0,
  };

  nextArticle = () => {
    const newArticleId = this.state.articleId + 1;
    this.setState({ articleId: newArticleId });
    console.log(this.state.articleId);
  }
  
  render = function() {
    const articleData = data[this.state.articleId];

    return (
      <div id="container">
        <Navbar />
        <main>
          <Article title={articleData.title} text={articleData.text} />
          <button onClick={this.nextArticle}>Article suivant</button>
        </main>
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default Page;
