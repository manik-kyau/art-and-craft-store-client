import React from 'react';

const MyComponent = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <select className='text-xl font-semibold bg-[#23BE0A] px-3 py-3 rounded-md text-white outline-none' name="" id="" onChange={handleChange}>
      <option className='bg-white text-black' value="">Customization</option>
      <option className='bg-white text-black' value="Customization Yes">Customization Yes</option>
      <option className='bg-white text-black' value="Customization No">Customization No</option>
    </select>
  );
}

export default MyComponent;