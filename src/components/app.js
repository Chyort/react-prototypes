import React from 'react';
import Table from './table'

export default () => {

    const students = [
        {
            name: 'Michael Gary Scott',
            course: 'Improv',
            grade: 67
        },
        {
            name: 'Dwight Schrute',
            course: 'Business Management',
            grade: 100
        },
        {
            name: 'Jim Halpert (Big Tuna)',
            course: 'Public Speaking',
            grade: 75
        },
        {
            name: 'Andrew Baines Bernard',
            course: 'A capella',
            grade: 87
        },
        {
            name: 'Pamela Morgan Halpert',
            course: 'Art Theory',
            grade: 99
        }
    ];

    return (
        <div className='container'>
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}