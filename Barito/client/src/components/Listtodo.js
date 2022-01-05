import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo, hasdone } from "../store/actionCreator/listAction";
import { Button } from "react-bootstrap";
import bird from "../assets/bird-dance.gif";
import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();
  const { listtodo, isLoading } = useSelector((state) => state.list);
  const [dataCorona, setDataCorona] = useState(0);

  useEffect(() => {
    dispatch(fetchTodo());
    var options = {
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/country/code",
      params: { code: "id" },
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "0ab433840emshfe226486d2580c1p1f7838jsn3704de90486a",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data[0].confirmed, "INI DATANYA");
        setDataCorona(response.data[0].confirmed);
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log(listtodo, "INI LISTTODO");
  }, []);

  const listdone = (e) => {
    // e.preventDefault();
    dispatch(hasdone(e));
  };
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }

  if (isLoading) {
    return (
      <>
        <img
          style={{ marginLeft: 500, marginTop: 250 }}
          src={bird}
          alt="loading..."
        />
      </>
    );
  }

  return (
    <>
      <center>
        <>
          Coronavirus cases in Indonesia is {numberWithCommas(dataCorona)}{" "}
          please do home activity
        </>
      </center>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <div
                style={{
                  backgroundColor: "#0477bb",
                  width: 85,
                  paddingLeft: 10,
                  borderRadius: 20,
                  color: "white",
                }}
              >
                Number
              </div>
            </th>
            <th scope="col">
              <div
                style={{
                  backgroundColor: "#4FC3F7",
                  width: 65,
                  paddingLeft: 10,
                  borderRadius: 20,
                  color: "whitesmoke",
                }}
              >
                To Do
              </div>
            </th>
            <th scope="col">
              {" "}
              <div
                style={{
                  backgroundColor: "#0477bb",
                  width: 130,
                  paddingLeft: 10,
                  borderRadius: 20,
                  color: "white",
                }}
              >
                Mark as done
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {JSON.stringify(employees)} */}
          {listtodo.map((e, i) => {
            return (
              <tr key={e.id}>
                <td
                  style={{
                    textDecorationLine: e.isDone ? "line-through" : "none",
                  }}
                >
                  {i + 1}
                </td>
                <td
                  style={{
                    textDecorationLine: e.isDone ? "line-through" : "none",
                  }}
                >
                  {e?.list}
                </td>
                <td>
                  {" "}
                  {!e.isDone ? (
                    // <Button variant="danger" onClick={() => listdone(e.id)}>
                    //   +
                    // </Button>
                    <Button
                      style={{ color: "white" }}
                      variant="info"
                      onClick={() => listdone(e.id)}
                    >
                      +
                    </Button>
                  ) : (
                    <></>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
