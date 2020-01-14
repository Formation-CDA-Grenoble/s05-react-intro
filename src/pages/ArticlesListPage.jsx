import React from 'react';

import Layout from '../components/Layout';

import Article from '../components/Article';

import data from '../data';


function generateArticles(data) {
  return data.map(function(item) {
    return <Article title={item.title} text={item.text} />;
  });
}

function Page() {
  return (
    <Layout>
      {generateArticles(data)}
    </Layout>
  );
}

export default Page;
