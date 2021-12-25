import React, { useState } from 'react';
import { UnControlled as CodeMirror, Controlled as ControlledCodeMirror } from 'react-codemirror2';
import styled from '@emotion/styled';
import * as rjs from 'esreverse-web';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-dark.css';
import 'codemirror/mode/javascript/javascript';

const SidePadding = 48;

const PreviewContainer = styled.div`
	display: flex;
`;

const PreviewCell = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  width: 48%;
`;

const PreviewLeft = styled(PreviewCell)`
  padding-left: ${SidePadding}px;
`;

const PreviewRight = styled(PreviewCell)`
  padding-right: ${SidePadding}px;
`;

const CodeMirrorOutline = styled.div`
  padding: 16px;
  background: #0a0e14;
  border-radius: 16px;
`;

const theme = 'ayu-dark';

function Preview() {
  const [content, setContent] = useState('');

  return (
    <PreviewContainer>
      <PreviewLeft>
        <p>Before</p>
        <CodeMirrorOutline>
          <CodeMirror
            value="console.log('hello world')"
            options={{
              mode: 'javascript',
              theme,
              lineNumbers: true,
            }}
            onChange={(editor, data, value) => {
              setContent(rjs.reverse(value));
            }}
          />
        </CodeMirrorOutline>
      </PreviewLeft>
      <PreviewRight>
        <p>After</p>
        <CodeMirrorOutline>
          <ControlledCodeMirror
            value={content}
            options={{
              mode: 'javascript',
              theme,
              lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setContent(value);
            }}
          />
        </CodeMirrorOutline>
      </PreviewRight>
    </PreviewContainer>
  );
}

export default React.memo(Preview);
