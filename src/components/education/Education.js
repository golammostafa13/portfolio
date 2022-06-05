import React from 'react';
import { Table } from 'reactstrap';
import './Education.css';

export const Education = () => {
  return (
    <Table className='table'>
        <thead>
            <tr className="table_head">
                <th>Degree</th>
                <th>Department</th>
                <th>Institute</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>BSc</th>
                <th>CSE<p>CGPA-3.50</p></th>
                <th>Rangamati Science and Technology University</th>
                <th>2015-2022</th>
            </tr>
            <tr>
                <th>HSC</th>
                <th>Science<p>GPA-4.67</p></th>
                <th>Kalikapur Abdul Matin Khasru College</th>
                <th>2013-2015</th>
            </tr>
            <tr>
                <th>SSC</th>
                <th>Science<p>GPA-5.00</p></th>
                <th>Majigacha Akteruzzaman High School</th>
                <th>2012-2013</th>
            </tr>
        </tbody>
    </Table>
  )
}
