import React, {useState} from "react";

function NewPlantForm({onNewPlant}) {
  const newPlant = {
    name:"", 
    image:"", 
    price:""
  }
  const [formData, setFormData] = useState(newPlant)

  const handleSubmit = (event) => {
    event.preventDefault()
    onNewPlant(formData)
  }
  
  const handleName= (event) => {
    setFormData({...formData, name: event.target.value})
  }

  const handleImage = (event) => {
    setFormData({...formData, image: event.target.value})
  }

  const handlePrice = (event) => {
    setFormData({...formData, price: event.target.value})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          onChange={handleName} />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          onChange={handleImage}/>
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          onChange={handlePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
