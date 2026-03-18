import { memo } from "react";

function Char({ charObj, animDelay }) {
  return (
    <div className="cell">
      <div
        className={"cell-inner " + charObj.type}
        style={{ animationDelay: `${animDelay}s` }}
      >
        {charObj.value}
      </div>
    </div>
  );
}

export default memo(Char);
