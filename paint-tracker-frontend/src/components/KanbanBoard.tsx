import React, { useCallback, useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import KanbanColumns from './KanbanColumns';


export default function KanbanBoard() {
        //setup the three states for the kanban board
    const [available, setAvailable] = useState([{colour:"white", id:'0'},{paint:"black",id:'1'}, {paint:"gray",id:'2'}, {paint:"blue",id:'3'}, {paint:"purple", id:'4'}])
    const [runningLow, setRunningLow] = useState([])
    const [outOfStock, setOutOfStock] = useState([])
    const onDragEnd = useCallback(() => {
    }, []);
    

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
}
