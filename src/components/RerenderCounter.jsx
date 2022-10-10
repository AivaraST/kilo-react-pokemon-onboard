import { useEffect, useState } from 'react';

const vehicleTypes = ['Micro', 'Sedan', 'Hatchback', 'Universal', 'SUV'];

function RerenderCounter() {
  const [selectedType, setSelectedType] = useState('');
  const [renderTimes, setRenderTimes] = useState(0);

  useEffect(() => {
    setRenderTimes((value) => value + 1);
  }, [selectedType]);

  return (
    <div>
      <div>
        <div>Currently selected vehicle type: {selectedType || 'none'}</div>
        {vehicleTypes.map((vehicleType) => (
          <button
            key={vehicleType}
            type="submit"
            onClick={() => setSelectedType(vehicleType)}
          >
            {vehicleType}
          </button>
        ))}
      </div>
      <div>Component rendered {renderTimes} times;</div>
    </div>
  );
}

export default RerenderCounter;
