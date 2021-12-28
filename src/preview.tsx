import React, { PureComponent } from 'react';
import { UnControlled as CodeMirror, Controlled as ControlledCodeMirror } from 'react-codemirror2';
import styled from '@emotion/styled';
import * as rjs from 'esreverse-web';
import { debounce } from 'lodash-es';
import { Dropdown } from 'react-bootstrap';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-dark.css';
import 'codemirror/mode/javascript/javascript';
import 'bootstrap/dist/css/bootstrap.min.css'

const SidePadding = 48;

const PreviewContainer = styled.div`
	display: flex;
`;

const PreviewCell = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  width: 48%;
  display: flex;
  flex-direction: column;
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

const ErrorPanelContainer = styled(CodeMirrorOutline)`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #780c51;
`;

const PreviewTitleContainer = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
`;

const Title = styled.div`
  height: 48px;
  line-height: 48px;
  margin-right: 12px;
`;

const theme = 'ayu-dark';

interface PreviewState {
  content: string;
  errorMsg: string | null;
}

export function ErrorPanel(props: { message: string }) {
  return (
    <ErrorPanelContainer>
      {props.message}
    </ErrorPanelContainer>
  );
}

class Preview extends PureComponent<{}, PreviewState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      content: '',
      errorMsg: null,
    };
  }

  computeReverse = debounce((content: string) => {
    let result = '';
    try {
      result = rjs.reverse(content);
      this.setState({
        content: result,
        errorMsg: null,
      });
    } catch (err) {
      this.setState({
        errorMsg: err.toString(),
      });
    }
  }, 200);

  render() {
    return (
      <PreviewContainer>
        <PreviewLeft>
          <PreviewTitleContainer>
            <Title>
              Before
            </Title>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Examples
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </PreviewTitleContainer>
          <CodeMirrorOutline>
            <CodeMirror
              value="console.log('hello world')"
              options={{
                mode: 'javascript',
                theme,
                lineNumbers: true,
              }}
              onChange={(editor, data, value) => {
                this.computeReverse(value);
              }}
            />
          </CodeMirrorOutline>
        </PreviewLeft>
        <PreviewRight>
          <PreviewTitleContainer>
            <Title>After</Title>
          </PreviewTitleContainer>
          {this.state.errorMsg ? (
            <ErrorPanel message={this.state.errorMsg} />
          ) : (
            <CodeMirrorOutline>
              <ControlledCodeMirror
                value={this.state.content}
                options={{
                  mode: 'javascript',
                  theme,
                  lineNumbers: true,
                }}
                onBeforeChange={(editor, data, value) => {
                  this.setState({
                    content: value,
                  });
                }}
              />
            </CodeMirrorOutline>
          )}
        </PreviewRight>
      </PreviewContainer>
    );
  }
}

export default Preview;
