import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import Swal from "sweetalert2";
import { Toast } from "../../alerts";
import TableComponent from "../../Components/Table";
import useFetch from "../../Hooks/useFetch";

const Home = (props) => {
  const { state } = useFetch();
  const [successMessage] = useState("");
  const [table, setTable] = useState({
    title: "",
    body: "",
  });

  const fireSuccesMeesage = () => {
    successMessage.length &&
      Toast.fire({
        icon: "success",
        title: successMessage,
      });
  };

  const handleChange = (e) => {
    setTable({
      ...table,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .patch(state + table)
      .then((res) => {
        if (res.status === 200) {
          props.edit_post_action(table)
          Swal('Succesfully edited blog!', '', 'success')
        }
      })
      .catch((err) => {
        console.log(err)
        Swal('Error editing post', '', 'error')
      })
  }
  useEffect(fireSuccesMeesage, [successMessage]);
  return (
    <>
      <TableComponent table={table} handleChange={handleChange} handleSubmit={handleSubmit} isEdit />
    </>
  );
};

export default Home;
