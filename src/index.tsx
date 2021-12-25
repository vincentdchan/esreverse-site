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
  margin-top: 3rem;
  text-align: center;
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

function MainBody() {
  return (
    <BodyContainer>
      <BigTitleContainer>
        Esreverse is a reverse engineer tool for Web
      </BigTitleContainer>
      <CodeBlockContainer>
        <CodeBlock>
          {`esreverse <url>`}
        </CodeBlock>
      </CodeBlockContainer>
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
        `}
      />
      <MainBody />
    </AppContainer>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
