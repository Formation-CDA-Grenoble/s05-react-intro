import React from 'react';

import { Layout, Article } from '../components';

import data from '../data';


function generateArticles(data) {
  return data.map(function(item, index) {
    return <Article
      title={item.title}
      text={item.text}
      id={index} />;
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
