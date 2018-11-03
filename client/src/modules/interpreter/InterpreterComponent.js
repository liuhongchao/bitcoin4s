import React from 'react';
import ScriptOpCodeList from '../transaction/ScriptOpCodeList';

class InterpreterComponent extends React.Component {

  state = {
    isVisible: true
  };

  render() {
    const {interpretResult} = this.props;
    const {scriptPubKey, scriptSig, currentScript, stack, altStack, stage} = interpretResult.state;
    const result = interpretResult.result.type === 'Result' ? (interpretResult.result.value ? 'True' : 'False') : 'NoResult';
    const executionDescription = result === 'NoResult' ? `Executing ${stage.type}` : `Execution finished with result: ${result}`;

    return (
      <div style={ {maxWidth: '550px', margin: '0 auto'} }>
        <p><i>{executionDescription}</i></p>
        <p><b>ScriptPubKey:</b></p>
        <ScriptOpCodeList opCodes={scriptPubKey} />
        <p><b>ScriptSig:</b></p>
        <ScriptOpCodeList opCodes={scriptSig} />
        <p><b>Current Script:</b></p>
        <ScriptOpCodeList opCodes={currentScript} />
        <p><b>Current Stack:</b></p>
        <ScriptOpCodeList opCodes={stack} />
        <p><b>Current Alt Stack:</b></p>
        <ScriptOpCodeList opCodes={altStack} />
      </div>
    )
  }
};

export default InterpreterComponent;