import React from 'react'



const Absent = (props) => {

    return (
        <div className='absent'>
            <h3>Absent Student</h3>

            <ul>
                {props.stu
                    .filter((item) => item.isPresent === false)
                    .map((stu) => (
                        <li key={stu.id}>
                            <span>{stu.title}</span>
                            <button onClick={() => props.toggleHandler(stu.id)}>Accidentally Added</button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Absent