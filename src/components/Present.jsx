import React from 'react'

const Present = (props) => {

    return (
        <div className='present'>
            <h3>Present Student</h3>
            <ul>
                {props.stu
                    .filter((item) => item.isPresent === true)
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

export default Present