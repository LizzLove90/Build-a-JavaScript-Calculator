import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [expression, setExpression] = useState('');

  const handleNumberClick = (num) => {
    if (displayValue === '0' && num === '0') return;
    if (displayValue === '0' || displayValue === '-0') {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorClick = (operator) => {
    if (expression.slice(-1) === '.' || expression.slice(-1) === operator) return;
    if (expression.slice(-1) === '-' && operator === '-') return;
    setExpression(expression + displayValue + operator);
    setDisplayValue('0');
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setExpression('');
  };

  const handleEqualClick = () => {
    const result = eval(expression + displayValue).toString();
    setDisplayValue(result);
    setExpression('');
  };

  return (
    <div className="calculator">
      <div id="display" className="display">
        {displayValue}
      </div>
      <button id="clear" className="button" onClick={handleClearClick}>
        AC
      </button>
      <button id="divide" className="button" onClick={() => handleOperatorClick('/')}>
        /
      </button>
      <button id="multiply" className="button" onClick={() => handleOperatorClick('*')}>
        *
      </button>
      <button id="seven" className="button" onClick={() => handleNumberClick('7')}>
        7
      </button>
      <button id="eight" className="button" onClick={() => handleNumberClick('8')}>
        8
      </button>
      <button id="nine" className="button" onClick={() => handleNumberClick('9')}>
        9
      </button>
      <button id="subtract" className="button" onClick={() => handleOperatorClick('-')}>
        -
      </button>
      <button id="four" className="button" onClick={() => handleNumberClick('4')}>
        4
      </button>
      <button id="five" className="button" onClick={() => handleNumberClick('5')}>
        5
      </button>
      <button id="six" className="button" onClick={() => handleNumberClick('6')}>
        6
      </button>
      <button id="add" className="button" onClick={() => handleOperatorClick('+')}>
        +
      </button>
      <button id="one" className="button" onClick={() => handleNumberClick('1')}>
        1
      </button>
      <button id="two" className="button" onClick={() => handleNumberClick('2')}>
        2
      </button>
      <button id="three" className="button" onClick={() => handleNumberClick('3')}>
        3
      </button>
      <button id="equals" className="button" onClick={handleEqualClick}>
        =
      </button>
      <button id="zero" className="button" onClick={() => handleNumberClick('0')}>
        0
      </button>
      <button id="decimal" className="button" onClick={handleDecimalClick}>
        .
      </button>
    </div>
  );
};

export default Calculator;
