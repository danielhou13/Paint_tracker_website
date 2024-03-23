import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Paint from "./Paint";

export default function KanbanColumns({ title, paints, id }) {
  // use droppable from react-beautil-dnd
  return (
    <div>
      {title}
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
            }}
            {...provided.droppableProps}
          >
            {paints.map((paint, index) => (
              <Paint key={index} paint={paint} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
