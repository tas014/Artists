import React from 'react';
import '../components/App/index.css';
import Layout from '../containers/Layout'
import Main from '../components/Main'

function Home() {
  return (
    <div className="App">
      <Layout>
          <Main />
      </Layout>
    </div>
  );
}

export default Home;