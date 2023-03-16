// rafce
import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [value, setValue] = useState([]);

  // useEffect ทำฉันก่อน
  useEffect(() => {
    loadData();
  }, []); // allow fucn 2 parameter ( [] หมายถึง ป้องกันการเกิด infinity loop)

  const loadData = () => {
    axios.get("http://localhost:5000/api/product").then((res) => {
      console.log("res", res.data);
      setValue(res.data); // setValue เข้าไปอ่านแล้วส่งไปเก็บไว้ใน value
    }); // then คือเมื่อติดต่อกับหลังบ้านมาแล้ว ได้อะไรกลับมา
  };

  const handleDelete = async (id) => {
    console.log(id);
    await axios
      .delete("http://localhost:5000/api/product/" + id)
      .then((res) => console.log(res));
    loadData();
  };

  // const tt = () => {
  //   let dataFil = value.filter((e) => (e.name === "MSI"));
  //   console.log(dataFil);
  //   return dataFil.map((item) => (
  //     <li onClick={() => handleDelete(item._id)}>
  //       {item.name}: {item.detail}{" "}
  //     </li>
  //   ));
  // };

  return (
    <div>
      Products
      {/* {tt()} */}
      {/* {JSON.stringify(value)}  */}
      {/* { value.map((item)=>
        <li onClick={()=>handleDelete(item._id)}>{item.name}: {item.detail} </li>
      )} */}
      {value
        .filter((e) => e.name == "MSI")
        .map((e) => (
          <li onClick={() => handleDelete(e._id)}>
            {e.name}: {e.detail}
          </li>
        ))}
    </div>
  );
};

export default Products;
