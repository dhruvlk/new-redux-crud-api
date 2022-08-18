import React, { useEffect } from "react";
// import '../crud/style.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersFromApiMiddleware } from "../../middlewares/crud-middlewares";
import { deleteId } from "../../action/crud-action";

const Delete = (props) => {
  const dispatch = useDispatch();
  const { userSaveLoading, id, isValid } = useSelector(
    (state) => state.crudReducer
  );

  const handleDelete = () => {
    dispatch(deleteUsersFromApiMiddleware(id));
  };

  useEffect(() => {
    if (isValid === true) {
      props.click();
      dispatch(deleteId());
    }
  }, [isValid]);

  return (
    <>
      <div className="modal">
        <div className="modalContent">
          <span
            className="close"
            onClick={props.click}
            disabled={userSaveLoading}
          >
            &times;
          </span>
          <p>Are you sure you want to delete your account</p>
          <button
            className="del"
            onClick={handleDelete}
            disabled={userSaveLoading}
          >
            {userSaveLoading ? "Loading..." : "Delete"}
          </button>
          <button
            className="cancel"
            onClick={props.click}
            disabled={userSaveLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Delete;
