
import React, { useState, useEffect } from 'react';


function App() {
  
  const [names, setNames] = useState(() => {
    const savedNames = localStorage.getItem('names');
    return savedNames ? JSON.parse(savedNames) : [];
  });

  
  const [nameInput, setNameInput] = useState('');

  
  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(names));
  }, [names]);

  
  const handleAddName = () => {
    if (nameInput.trim()) {
      setNames([...names, nameInput]);
      setNameInput(''); 
    }
  };

  return (
    <div className="App">
      <h1>Список имён</h1>
      <input 
        type="text" 
        value={nameInput} 
        onChange={(e) => setNameInput(e.target.value)} 
        placeholder="Введите имя" 
      />
      <button onClick={handleAddName}>Добавить</button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


