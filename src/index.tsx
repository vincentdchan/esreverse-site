import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

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
`;

const HeaderContainer = styled.div`
  background: url('./bg.png');
  background-size: 5rem;
`;

function MainHeader() {
  return (
    <HeaderContainer>
      <BigTitleContainer>
        Esreverse is a reverse engineer tool for Web
      </BigTitleContainer>
      <CodeBlockContainer>
        <CodeBlock>
          {`esreverse <url>`}
        </CodeBlock>
      </CodeBlockContainer>
      <div style={{ height: '2rem' }} />
    </HeaderContainer>
  )
}

function MainBody() {
  return (
    <BodyContainer>
      <Paragraph>
        <SubTitle>Feature</SubTitle>
        <ul>
          <li>Automatically trace JavaScripts from HTML.</li>
          <li>Format JavaScripts files.</li>
          <li>Reverse <b>generator/async/await</b> syntaxes.</li>
        </ul>
      </Paragraph>
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
