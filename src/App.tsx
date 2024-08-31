import React from 'react';
import './App.css';

type AppProps = {
  title?: string;
  subtitle?: string;
  isVisible?: boolean;
}

const App = (
  { 
    title = "기본 타이틀", 
    subtitle = "기본 서브타이틀", 
    isVisible = true
  }:AppProps): JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {isVisible && <p>This is visible</p>}
    </div>
  );
};

export default App;
