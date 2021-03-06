import React from "react";
import ReactDOM from "react-dom";
import MaterialDatatable from "../../src/";
import Button from "@material-ui/core/Button/Button";

class Example extends React.Component {

    render() {
        const columns = [
            {   
                name: 'Name', 
                field: 'name',
                options: {
                    width: 70,
                    
                },
            },
            {
                name: 'Title', 
                field: 'title'
            },
            {
                name: 'Location', 
                field: 'location'
            },
            {
                name: 'Age', 
                field: 'age'
            },
            {
                name: 'Salary', 
                field: 'salary'
            },
            {
                name: 'Veeeeery loooooooooong title', 
                field: 'salary',
                options: {
                    width: 100,
                    headerNoWrap: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return (
                            <Button size="large" variant={"contained"} color={"secondary"}>
                                Edit
                            </Button>
                        );
                    },
                    customValue: (dataObject) => {
                        return  dataObject.salary +"Edit";
                    },
                },
            }
            ,
            {
                name: 'SubFieldData',
                field: 'subFieldData',
                options: {
                    width: 100,
                    headerNoWrap: true,
                    customBodyRender: (dataObject, tableMeta, updateValue) => {
                        return (
                            <div>
                                <Button size="large" variant={"contained"} color={"secondary"}>
                                    {dataObject.salary * 10} 
                                </Button>
                            </div>
                        );
                    },
                    customSortValue: (dataObject) => {
                        return (dataObject.salary * 10);
                    },
                    customValue: (dataObject) => {
                        return (dataObject.salary * 10);
                    },
                    
                },
            }
        ];

        const data = [
            {name: "Veeeeery loooooooooong naaaaaaaaaaame", title: "Title 1", location: "Location 1", age: 30, salary: 10, subFieldData: {value:"11111111"}},
            {name: "Name 2", title: "Title 2", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 3", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 4", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 5", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 6", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 7", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 8", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 9", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 10", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 11", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 12", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 13", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 14", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 15", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 16", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 17", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 18", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 19", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 20", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 21", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 22", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 23", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 24", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 25", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 26", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 27", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
            {name: "Name 2", title: "Title 28", location: "Location 2", age: 31, salary: 11, subFieldData: {value:"222222222"}},
        ];

        const options = {
            filter: true,
            selectableRows: true,
            usePaperPlaceholder: false,
            filterType: 'multiselect',
            responsive: 'stacked',
            rowsPerPage: 10,
            onRowsSelect: (rowsSelected, allRows) => {
                console.log(rowsSelected, allRows);
            },
            onRowsDelete: (rowsDeleted) => {
                console.log(rowsDeleted, "were deleted!");
            },
            onChangePage: (numberRows) => {
                console.log(numberRows);
            },
            onSearchChange: (searchText) => {
                console.log(searchText);
            },
            onColumnSortChange: (column, direction) => {
                console.log(column, direction);
            },
            onColumnViewChange: (column, action) => {
                console.log(column, action);
            },
            onFilterChange: (column, filters) => {
                console.log(column, filters);
            },
            onCellClick: (cellIndex, rowIndex) => {
                console.log(cellIndex, rowIndex);
            },
            onRowClick: (rowData, rowState) => {
                console.log(rowData, rowState);
            }
        };

        return (
            <MaterialDatatable title={"ACME Employee list"} data={data} columns={columns} options={options}/>
        );

    }
}

ReactDOM.render(<Example/>, document.getElementById("app-root"));
