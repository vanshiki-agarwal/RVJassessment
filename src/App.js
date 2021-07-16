import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Users from "./components/Users";
import NewUser from "./components/NewUser";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const res = await axios.get("https://gorest.co.in/public-api/users");
      setUsers(res.data.data);
      setLoading(false);
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      <div className="container px-0">
        <div className="my-4 d-flex justify-content-end">
          <div
            onClick={() => setModalShow(true)}
            className="btn-flip"
            data-back="+"
            data-front="New User"
          ></div>
        </div>

        <NewUser
          show={modalShow}
          setUsers={setUsers}
          users={users}
          onHide={() => setModalShow(false)}
        />
        <div className="row my-2 table-header">
          <div className="col text-center">
            <strong>ID</strong>
          </div>
          <div className="col text-center">
            <strong>Name</strong>
          </div>
          <div className="col text-center">
            <strong>Actions</strong>
          </div>
        </div>
      </div>

      {!loading && <Users setUsers={setUsers} users={users} />}
    </div>
  );
};

export default App;
