import React from "react";
import { Table } from "../../components/table";

function TableTesting() {
    const columns = ["Name", "Age", "Email"];
    const data = [
        {
            Name: "John Doe",
            Age: 30,
            Email: "John@email.com"
        },
        {
            Name: "John Doe",
            Age: 30,
            Email: "John@email.com"
        },
        {
            Name: "John Doe",
            Age: 30,
            Email: "John@email.com"
        },

    ];
    return (
        <>
        <div>
            <h1>Simple Table</h1>
            <Table columns={columns} data={data} />
        </div>
        </>
    );
};

export default TableTesting;