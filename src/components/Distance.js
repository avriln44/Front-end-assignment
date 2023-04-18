import React from "react";

export const Distance =()=>{
    return (
        <div>
            <form>
                <label for="refuel-distance">Distance:</label> 
                <input type="number" id="refuel-distance" name="refuel-distance" step="0.01" min="0"></input>
            </form>
            
        </div>
    )
}