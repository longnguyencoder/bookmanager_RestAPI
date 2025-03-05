import React from 'react'
// const StudentCode = "SV001";
// const StudentFirtName = "Nguyễn";
// const StudentLastName = "Diêng";

const StudentItem = (props) => {
    return (
        <tr>
            <td>
                {props.studentCode}
            </td>
            <td>
                {props.studentLastName}
            </td>
            <td>
                {props.studentFirtName}
            </td>
        </tr>


    )
}

export default StudentItem
