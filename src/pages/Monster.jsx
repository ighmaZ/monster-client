import axios from "axios";
import { Container } from "postcss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Monster = () => {
  const [monsters, setMonsters] = useState([]);
  const [itemIdToDelete, setItemIdToDelete] = useState(0);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/add-monster`;
    navigate(path);
  };
  useEffect(() => {
    axios.get("http://localhost:8000/monster").then((response) => {
      setMonsters(response.data);
    });
  }, []);

  const deleteMonsterHandler = (id) => {
    setItemIdToDelete(id);

    axios.delete(`http://localhost:8000/monster/${itemIdToDelete}`).then(() => {
      setMonsters((existingData) => {
        return existingData.filter((_) => _._id !== itemIdToDelete);
      });
      //   setItemIdToDelete(0);
    });
  };

  return (
    <>
      <div className="flex justify-center mt-20">
        <div>
          <button
            id="btn-add"
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5 my-40"
            onClick={routeChange}
          >
            Add monsters
          </button>
        </div>
        <table className="table-fixed  border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-20 py-5">
                Monster's Name
              </th>
              <th className="border border-gray-300 px-20 py-5">Description</th>
              <th className="border border-gray-300 px-20 py-5">kills</th>
            </tr>
          </thead>
          <tbody>
            {monsters.map((monster) => (
              <tr key={monster._id}>
                <td className="border border-gray-400  px-20 py-5">
                  {monster.name}
                </td>
                <td className="border border-gray-400  px-20 py-5">
                  {monster.description}
                </td>
                <td className="border border-gray-400  px-20 py-5">
                  {monster.kills}
                </td>
                <td>
                  <button
                    id="btn-delete"
                    className="bg-pink-500 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded mx-2 border border-gray-400  "
                    onClick={() => {
                      deleteMonsterHandler(monster._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Monster;
