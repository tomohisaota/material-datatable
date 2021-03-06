import React from "react";
import classNames from "classnames";
import TableCell from "@material-ui/core/TableCell";
import {withStyles} from "@material-ui/core/styles";

const defaultBodyCellStyles = {
    root: {
        padding: "4px 8px 4px 8px",
    },
    cellHide: {
        display: "none",
    },
    cellStacked: {
        "@media screen and (max-width: 960px)": {
            display: "inline-block",
            backgroundColor: "#FFF",
            fontSize: "16px",
            height: "24px",
            width: "calc(50% - 80px)",
            whiteSpace: "nowrap",
        },
    },
    responsiveStacked: {
        "@media screen and (max-width: 960px)": {
            display: "inline-block",
            fontSize: "16px",
            width: "calc(50% - 80px)",
            whiteSpace: "nowrap",
            height: "24px",
        },
    },
};

class MaterialDatatableBodyCell extends React.Component {
    handleClick = () => {
        const {colIndex, options, children, dataIndex, rowIndex} = this.props;
        if (options.onCellClick) {
            options.onCellClick(children, {colIndex, rowIndex});
        }
    };

    render() {
        const {children, classes, colIndex, columnHeader, options, dataIndex, rowIndex, ...otherProps} = this.props;

        return [
            <TableCell
                key={1}
                className={classNames({
                    [classes.root]: true,
                    [classes.cellHide]: true,
                    [classes.cellStacked]: options.responsive === "stacked",
                })}>
                {columnHeader}
            </TableCell>,
            <TableCell
                key={2}
                onClick={this.handleClick}
                className={classNames({
                    [classes.root]: true,
                    [classes.responsiveStacked]: options.responsive === "stacked",
                })}
                {...otherProps}>
                {children}
            </TableCell>,
        ];
    }
}

export default withStyles(defaultBodyCellStyles, {name: "MaterialDatatableBodyCell"})(MaterialDatatableBodyCell);
