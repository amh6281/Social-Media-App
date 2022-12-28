import React, { useState } from "react";
import "./update.scss";

const Update = ({ setOpenUpdate }) => {
  const [texts, setTexts] = useState({
    name: "",
    city: "",
    website: "",
  });

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  return (
    <div className="update">
      업데이트
      <form>
        <input type="file" />
        <input type="file" />
        <input type="text" name="name" onChange={handleChange} />
        <input type="file" name="city" onChange={handleChange} />
        <input type="file" name="website" onChange={handleChange} />
      </form>
      <button onClick={() => setOpenUpdate(false)}>X</button>
    </div>
  );
};

export default Update;
