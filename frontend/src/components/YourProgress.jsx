import {useState, useEffect} from "react";
export default function YourProgress() {
  const [userInfo, YourProgress] = useState([]);
// this rought get user's information from the database
  useEffect(() => {
    const getloginInfo = async () => {
      let response = await fetch("http://localhost:8888//:id");
      let data = await response.json();
      console.log(data);
      YourProgress(data);
    }
    getloginInfo();
  }, []);
  // show user's goal and achievement
  return (
    <table className="showProgress">
      <tr>
        <th>Year</th>
      </tr>
        {
          userInfo.map((userInfo) => (
            <tr>
              <td>{userInfo.userName}</td>
            </tr>
          ))
        }
  </table>
  );
}