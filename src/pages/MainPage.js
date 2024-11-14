// MainPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostPreview from '../components/PostPreview';

function MainPage() {
  return (
    <div>
      <Header />
      <main style={{ padding: '10px' }}>
        {[...Array(5)].map((_, i) => (
          <PostPreview key={i} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
