import { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(false);

  const toggleMessage = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={toggleMessage}>
        Show Message
      </button>

      {show && <p>Welcome to React</p>}
    </div>
  );
}

export default ToggleMessage;