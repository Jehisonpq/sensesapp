import React from "react";
import { useSelector } from "react-redux";

const TagProcedimiento = (props) => {
  const listProceduresId = useSelector((state) => state.listProceduresId);
  const listProceduresShortName = useSelector(
    (state) => state.listProceduresShortName
  );
  const listProceduresColor = useSelector((state) => state.listProceduresColor);

  const index = listProceduresId.findIndex((element) => element === props.id);

  return (
    <div
      className="item-tag"
      style={{ backgroundColor: listProceduresColor[index] }}
    >
      {listProceduresShortName[index]}
    </div>
  );
};

export default TagProcedimiento;
