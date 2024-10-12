import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  // Hàm tính tuổi dựa trên ngày sinh
  const calculateAge = () => {
    if (!birthdate) return;

    const birthDate = new Date(birthdate);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Điều chỉnh tuổi nếu chưa đến ngày sinh nhật trong năm hiện tại
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div>
      <h3>Age Calculator</h3>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        placeholder="Enter your birthdate"
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        <div>
          <h4>Your age is: {age} years</h4>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
