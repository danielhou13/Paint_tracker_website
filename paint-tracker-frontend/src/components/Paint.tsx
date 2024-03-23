import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function Paint({paint, index}) {
    // use draggable from react-beautiful-dnd
  return (
    <Draggable draggableId = {`${paint.id}`} key={paint.id} index={index}>
        {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <h4>{paint.colour}</h4>
            </div>
        )}
    </Draggable>
  )
}
