import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddMonster = () => {
  const name = useRef("");
  const description = useRef("");
  const kills = useRef("");
  const navigate = useNavigate();

  const addMonsterHandler = () => {
    const payload = {
      name: name.current.value,
      description: description.current.value,
      kills: kills.current.value,
    };

    axios.post("http://localhost:8000/monster", payload).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="w-full max-w-xs mx-auto mt-10">
      <form className="bg-white shadow-md   rounded px-8 pt-6 pb-8 mb-4 ">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Monster name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Monster name"
            ref={name}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="description"
          >
            description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder="description"
            ref={description}
          />
          <p className="text-red-500 text-xs italic"></p>
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="kills"
          >
            kills
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="kills"
            placeholder="kills"
            ref={kills}
          />
          <p className="text-red-500 text-xs italic"></p>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={addMonsterHandler}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 monster. All rights reserved.
      </p>
    </div>
  );
};

export default AddMonster;
