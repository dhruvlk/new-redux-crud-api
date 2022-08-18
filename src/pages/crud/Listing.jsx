import React, { useEffect, useState } from "react";
import {
  getUsersFromApiMiddleware,
  editUsersFromApiMiddleware,
  deleteUsersFromApiMiddleware,
} from "../../middlewares/crud-middlewares";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
// import '../crud/style.css'
import Delete from "./Delete";
import { getUserId } from "../../action/crud-action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Table from "react-bootstrap/Table";

const Listing = () => {
  const [form, setForm] = useState(false);
  const [del, setDel] = useState(false);
  const dispatch = useDispatch();
  const { usersList, usersListLoading, userSaveLoading, userSaveStatus } =
    useSelector((state) => state.crudReducer);

  const handleChangeClick = () => {
    setForm(!form);
  };

  const handleGetData = (id) => {
    dispatch(editUsersFromApiMiddleware(id));
    setForm(!form);
  };

  const handleClearData = (id) => {
    dispatch(getUserId(id));
    setDel(!del);
  };

  const handleDelete = (id) => {
    let choice = window.confirm("Are you sure you want to DELETE this record?");
    if (!choice) {
      return;
    }
    dispatch(deleteUsersFromApiMiddleware(id));
    window.alert("User deleted successfully!");
  };

  useEffect(() => {
    dispatch(getUsersFromApiMiddleware());
  }, []);

  useEffect(() => {
    if (!userSaveLoading) {
      if (userSaveStatus) {
        dispatch(getUsersFromApiMiddleware());
      }
    }
  }, [userSaveLoading, userSaveStatus]);

  return (
    <div>
      {usersListLoading ? (
        <Skeleton count={15} />
      ) : (
        <Table striped bordered hover variant="dark">
          <button style={{}} onClick={() => setForm(!form)}>
            Add
          </button>
          <tbody>
            {usersList &&
              usersList.map((_) => {
                return (
                  <tr key={_.id}>
                    <td>{_.name}</td>
                    <td>{_.email}</td>
                    <td>{_.gender}</td>
                    <td>{_.status}</td>
                    <td>
                      <button onClick={() => handleGetData(_.id)}>Edit</button>
                      &nbsp;&nbsp;
                      <button onClick={() => handleDelete(_.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
      {form ? <Form click={() => handleChangeClick()} /> : ""}
      {del ? <Delete click={() => handleClearData()} /> : ""}
    </div>
  );
};

export default Listing;
