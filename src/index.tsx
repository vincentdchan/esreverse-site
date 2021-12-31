import React, { useState, Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

// mock for Codemirror
// Codemirror depends on a 'global' variable
(window as any).global = window;

const AppContainer = styled.div`
  font-family: -apple-system,system-ui,Source Sans Pro,Roboto,Helvetica,Helvetica Neue,Source Han Sans SC,Source Han Sans TC,PingFang SC,PingFang HK,PingFang TC,sans-serif;
  color: white;
`;

const BodyContainer = styled.div`
  margin: 0px auto;
  max-width: 700px;
  padding: 0px 1.0875rem 1.45rem;
`;

const BigTitleContainer = styled.h1`
  padding-top: 5rem;
  text-align: center;
`;

const SubTitle = styled.h2`
  margin-top: 2rem;
`;

const Paragraph = styled.div`
`

const Footer = styled.div`
  margin-top: 36px;
`;

const CodeBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 36px;
  padding-bottom: 36px;
`;

const CodeBlock = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  min-width: 460px;
  background: #1a1a1a;
  border-radius: 18px;
  color: #e1e1e1;
  transition: height 1s;

  pre {
    margin: 0px;
    font-size: 16px;
  }
`;

const HeaderContainer = styled.div`
  background: url('./bg.png');
  background-size: 5rem;
`;

const BrandContiner = styled.div`
  padding-top: 24px;
`;

const examples = [
  'esreverse https://mui.com/ -a',
  'esreverse https://nextjs.org/ -a -H "cookies: SESSION=abc"',
  'esreverse ./test.js'
];

const detailMessage = `esreverse <entry> [args]
Vincent Chan<okcdz@diverse.space>

-a, --aggressive  Reverse in aggressive mode
--no-emit         Do NOT emit files
--dist, -D <dir>  Dirs to emit
--worker          Run in workder mode
-H header         Add headers to http requests
-h, --help        Show help message`;

function PlayingCodeBlock() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let innterCount = 0;
    const ticket = setInterval(() => {
      setCount(innterCount++);
    }, 3000);

    return () => clearInterval(ticket);
  }, []);

  return (
    <CodeBlock>
      <pre>
        {examples[count % examples.length]}
      </pre>
    </CodeBlock>
  )
}

function DetailCodeBlock() {
  const [ showDetail, setShowDetail ] = useState(false);
  useEffect(() => {
    const ticket = setTimeout(() => {
      setShowDetail(true);
    }, 1000);

    return () => clearTimeout(ticket);
  }, []);

  return (
    <CodeBlock>
      <pre>
        {showDetail ? detailMessage : `esreverse <entry> [args]`}
      </pre>
    </CodeBlock>
  )
}

function MainCodeBlock() {
  const [ isHover, setIsHover ] = useState(false);
  
  return (
    <BodyContainer>
      <CodeBlockContainer
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ?
          <DetailCodeBlock />
          : <PlayingCodeBlock />
        }
      </CodeBlockContainer>
    </BodyContainer>
  );
}

function MainHeader() {
  return (
    <HeaderContainer>
      <BigTitleContainer>
        Esreverse is a reverse engineer tool for Web
      </BigTitleContainer>
      <MainCodeBlock />
      <div style={{ height: '2rem' }} />
    </HeaderContainer>
  )
}

const Preview = React.lazy(() => import('./preview'));

function MainBody() {
  return (
    <>
      <BodyContainer>
        <BrandContiner>
          <a href="https://www.npmjs.com/package/esreverse">
            <img alt="npm badge" src="https://img.shields.io/npm/v/esreverse.svg"/>
          </a>
          <a href="https://twitter.com/cdz_solo" style={{ marginLeft: '16px' }}>
            <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fcdz_solo" />
          </a>
        </BrandContiner>
        <Paragraph>
          <SubTitle>Feature</SubTitle>
          <ul>
            <li>Automatically trace JavaScripts from HTML.</li>
            <li>Format JavaScripts files.</li>
            <li>API similar to cURL.</li>
            <li>Reverse <b>generator/async/await</b> syntaxes.</li>
          </ul>
        </Paragraph>
      </BodyContainer>
      <Suspense fallback={<div></div>}>
        <Preview />
      </Suspense>
      <BodyContainer>
        <Paragraph>
          <SubTitle>Install</SubTitle>
          <CodeBlock>
            npm install -g esreverse
          </CodeBlock>
        </Paragraph>
        <Paragraph>
          <SubTitle>Platform</SubTitle>
          <ul>
            <li>macOS x64/arm64</li>
            <li>Linux x64</li>
            <li>Web</li>
          </ul>
        </Paragraph>
        <Footer>Built with <a href="https://github.com/vincentdchan/yesbuild">Yesbuild</a>. Copyright 2021.</Footer>
      </BodyContainer>
    </>
  )
}

function App() {
  return (
    <AppContainer>
      <Global
        styles={css`
          body {
            margin: 0px;
            background-color: #3e036a;
          }
          a {
            color: white;
          }
          a:active {
            color: white;
          }
          h1 {
            margin-top: 0px;
          }
        `}
      />
      <MainHeader />
      <MainBody />
    </AppContainer>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
