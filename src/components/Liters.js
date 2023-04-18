import React from "react";

export const Liters =()=>{
    return (
        <div>
            <form>
                <label for="refuel-quantity">The quantity of refueling in liters: </label>
                <input type="number" id="refuel-quantity" name="refuel-quantity" step="0.01" min="0"></input>
            </form>
            
        </div>
    )
}