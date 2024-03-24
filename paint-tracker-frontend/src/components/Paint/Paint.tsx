import React, { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { paint } from "../paint";
import axios from "axios";

type PaintCardProps = {
  paint: paint;
  index: number;
  permissions: Array<string>;
  updatePaint: (paint: paint, newStock: number) => void;
};

//Reference for Draggable
//https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md
export default function Paint({
  paint,
  index,
  permissions,
  updatePaint,
}: PaintCardProps) {
  // use draggable from react-beautiful-dnd
  const [isEditing, setisEditing] = useState(false);
  const [canEdit, setcanEdit] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/can-edit")
      .then((response) => {
        console.log(response.data.message);
        setcanEdit(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //stop editing when we click out
  const handleBlur = () => {
    setisEditing(false);
  };

  //when we update the stock number, if the number is greater than 0, pass the paint and the new stock
  //to the higher level functions.
  const handleChange = (event) => {
    if (event.target.value >= 0) {
      updatePaint(paint, event.target.value);
    }
  };

  return (
    <Draggable draggableId={`${paint.id}`} key={paint.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card shadow-sm">
            <div className="card-body ">
              <h5 className="card-title">{paint.colour}</h5>
              {isEditing ? (
                <input
                  type="number"
                  value={paint.currentStock}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              ) : (
                <p className="card-text">Current Stock: {paint.currentStock}</p>
              )}
              {canEdit && (
                <button onClick={() => setisEditing(!isEditing)}>
                  Edit Stock
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
