import React from "react";

export const Price =()=>{
    return (
      
            <div class="price-row">
                <form>
                    <label for="refuel-price">The price of the refueling : </label>
                    <input type="number" id="refuel-price" name="refuel-price" step="0.01" min="0"/>
                    
                </form>
                
            </div>
        
    )
}