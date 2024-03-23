import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Paint from "../Paint/Paint";

// Reference for Droppable
// https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md
export default function KanbanColumns({ title, paints, id }) {
  // use droppable from react-beautiful-dnd
  return (
    <div className="col-4">
      <div className="title">{title}</div>
      <div className="card bg-light">
        <Droppable droppableId={id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {paints.map((paint, index) => (
                <Paint key={index} paint={paint} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
}
