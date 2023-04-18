import React, { useState } from 'react';
import { Header } from './components/Header';
import { CarName } from './components/CarName';
import { Liters } from './components/Liters';
import { Price } from './components/Price';
import { Distance } from './components/Distance';



import './App.css';

function App() {
  const [carName, setCarName] = useState("");
  const [refuelQuantity, setrefuelQuantity]= useState("")
  const [refuelPrice, setrefuelPrice]= useState("")
  const [refuelDistance, setrefuelDistance]= useState("")
  const [refuelingHistory, setRefuelingHistory]= useState([])
  function handleAddRefueling() {
    // Lấy thông tin từ các input fields và xử lý
    var carName = document.getElementById("car-name").value;
    var refuelQuantity = parseFloat(document.getElementById("refuel-quantity").value);
    var refuelPrice = parseFloat(document.getElementById("refuel-price").value);
    var refuelDistance = parseFloat(document.getElementById("refuel-distance").value);
    
    const refueling = {
      carName,
      refuelQuantity,
      refuelPrice,
      refuelDistance
    };
    setRefuelingHistory([...refuelingHistory, refueling]);
    setCarName("")
    setrefuelQuantity("")
    setrefuelPrice("")
    setrefuelDistance("")

    // Add refueling to refueling history list
    //refuelingHistory.push(refueling);
    // Calculate and display total expenses and consumption
    const totalExpenses = refuelingHistory.reduce((acc, curr) => acc + curr.price, 0);
    const totalConsumption = refuelingHistory.reduce((acc, curr) => acc + curr.liters, 0);
    const totalDistance = refuelingHistory.reduce((acc, curr) => acc + curr.distance, 0);
    const avgExpensesPer100Km = (totalExpenses / totalDistance) * 100;
    const avgConsumptionPer100Km = (totalConsumption / totalDistance) * 100;
  }
  return (
    <div>
      <Header/>
      <div className='car'>
        <CarName value={carName} onChange={e => setCarName(e.target.value)}/>
        <Liters value={refuelQuantity} onChange={e => setrefuelQuantity(e.target.value)}/>
        <Price value={refuelPrice} onChange={e => setrefuelPrice(e.target.value)}/>
        <Distance value={refuelDistance} onChange={e => setrefuelDistance(e.target.value)}/>
        <button id="add-refueling-btn" type="button" onClick={handleAddRefueling}>Add Refueling Expense</button>
      </div>
    </div>
  );
}

export default App;
