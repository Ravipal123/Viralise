import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchTeamTournaments = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState({});

 

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`https://lichess.org/api/tournament/${id}`);
      const responseData = response.data;
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <>
      <div className="p-4">
        <input
          type='text'
          placeholder='Write your ID..'
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="p-2 border rounded-md"
        />
        <button onClick={handleSubmit} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">Search</button>
      </div>

      <table className="table-auto mx-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">FullName</th>
            <th className="px-4 py-2">CreatedBy</th>
            <th className="px-4 py-2">No. of Players</th>
            <th className="px-4 py-2">StartAt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">{data.id}</td>
            <td className="border px-4 py-2">{data.fullName}</td>
            <td className="border px-4 py-2">{data.createdBy}</td>
            <td className="border px-4 py-2">{data.nbPlayers}</td>
            <td className="border px-4 py-2">{data.startsAt}</td>

          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SearchTeamTournaments;
