import React, { useState } from "react";
import Input from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const MainMenuDisplay = props => {
  const [qNum, setQNum] = useState(10);
  return (
    <div className="main-menu">
      <h1>How many Questions do you want</h1>
      <Input
        type="number"
        value={qNum}
        onChange={e => setQNum(e.target.value)}
      />
      <Button variant="primary" onClick={e => props.getQuestions(e, qNum)}>
        Next
      </Button>
    </div>
  );
};

export default MainMenuDisplay;
