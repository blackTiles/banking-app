/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { db } from "./firebase";

function Transactions() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    db
    .collection("transactions")
    .onSnapshot((snapshot) =>
      setState(
        snapshot.docs.map((doc) => ({ id: doc.id,  data: doc.data() }))
      )
    )
    // console.log(`${state[2]?.data.createdAt.toDate().toDateString()} ${state[2].data.createdAt.toDate().toLocaleTimeString('en-US')}`)
  }

  return (
    <div className="transactions" css={CSS} style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,88,1) 35%, rgba(12,19,20,1) 100%)",
    }}>
      <h1 style={{
        color: "white",
      }}>Transaction History</h1>
      <div className="table">
        <table>
          <thead>
            <tr key={"id-1"}>
              <td>UID</td>
              <td>Payer</td>
              <td>Receiver</td>
              <td>Amount</td>
              <td>Created At</td>
            </tr>
          </thead>
          <tbody>
            {state.map((obj, i) => (
              <tr key={`id${i}`} className={i % 2 === 0 ? "" : "light"}>
                <td>{i+1}</td>
                <td>{obj.data.sender}</td>
                <td>{obj.data.receiver}</td>
                <td>{obj.data.amount}</td>
                <td>{`${obj.data.createdAt}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const CSS = css`
  font-family: "Roboto", sans-serif;
  h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    color: var(--star-command-blue);
    
  }
  @media screen and (max-width: 400px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  .table {
    display: table;
    overflow: scroll;
    table {
      background-color: #fff;
      table-layout: fixed;
      color: var(--powder-blue);
      border-collapse: collapse;
      border: 1px solid #bdc3c7;
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);
      thead {
        background-color: var(--navy-blue);
        tr {
          transition: all .2s ease-in;
          cursor: pointer;
          header{
            background-color: #16a085;
            color: #fff;
        }
          td {
            padding: 20px;
            text-align: left;
            font-weight: 700;
            border-bottom: 1px solid #ddd;
            ion-icon {
              font-size: 20px;
            }
          }
        }
      }
      
      tbody {
        background-color: var(--cerulean-crayola);
        tr {
          a{
            color: #BF0000;
            transition: all 0.3s ease;
          }
          a:hover {
            text-decoration: underline;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
            text-align: right;
          }
        }
        tr:hover {
          background-color: #f5f5f5;
          transform: scale(1.02);
          box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);
      }
        .light {
          background-color: var(--sky-blue-crayola);
        }
      }
    }
  }
`;

export default Transactions;