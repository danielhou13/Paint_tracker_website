import React, { useCallback, useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import KanbanColumns from './KanbanColumns';


export default function KanbanBoard() {
        //setup the three states for the kanban board
    const [available, setAvailable] = useState([{colour:"white", id:'0'},
                                                {colour:"black",id:'1'}, 
                                                {colour:"gray",id:'2'}, 
                                                {colour:"blue",id:'3'}, 
                                                {colour:"purple", id:'4'}])
    const [runningLow, setRunningLow] = useState([])
    const [outOfStock, setOutOfStock] = useState([])
    const onDragEnd = (result) => {
        console.log(result)
        // get where we are dropping the item (source), 
        // where the item came from (destination), 
        // and the id of the item (draggableid)
        const {source, destination, draggableId} = result;

        //if we go out of bounds, we just return nothing and dont do anything
        if (!destination) {
            return;
        }

        // retrieve the paint object we will need to move around
        const paint = findItemById(draggableId, [...available, ...runningLow, ...outOfStock]);

        //two considerations: 1. if changing columns, delete from previous and add to new
        //2. if dragging within a column, find way to change index of array

        //1. changing column functionality
        if (source.droppableId !== destination.droppableId) {
            deleteItem(source.droppableId, draggableId)
            updatePaintColumn(destination.droppableId, paint);
        }

    }

    //function to insert the paint into its new column based on destination from result above
    function updatePaintColumn(destinationDroppableId, paint) {
        let newPaint;
        switch (destinationDroppableId) {
            case "1":   // Available
                newPaint = { ...paint};
                setAvailable([...available, newPaint]);
                break;
            case "2":  // low on pain
                newPaint = { ...paint};
                setRunningLow([...runningLow, newPaint]);
                break;
            case "3":  // out of stock
                newPaint = { ...paint};
                setOutOfStock([...outOfStock, newPaint]);
                break;
        }
    }
    //easy way of removing from array
    function deleteItem(sourceDroppableId, paintId) {
        switch (sourceDroppableId) {
            case "1":
                setAvailable(removeItemById(paintId, available));
                break;
            case "2":
                setRunningLow(removeItemById(paintId, runningLow));
                break;
            case "3":
                setOutOfStock(removeItemById(paintId, outOfStock));
                break;
        }
    }
    

    // retrieve item by id above
    function findItemById(id, array) {
        return array.find((item) => item.id == id);
    }

    // delete the item based on id above
    function removeItemById(id, array) {
        return array.filter((item) => item.id != id);
    }

    //adding in styling here for now
    return (
        <DragDropContext onDragEnd={onDragEnd}
        >
            <h2 style={{textAlign: "center"}}>Paint Availability</h2>
            <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    width: "1300px",
                }}>
                <KanbanColumns title={"Available"} paints = {available} id = {"1"}/>

                <KanbanColumns title={"Running Low"} paints = {runningLow} id = {"2"}/>

                <KanbanColumns title={"Out of Stock"} paints = {outOfStock} id = {"3"}/>
            </div>
        </DragDropContext>
    )
};
