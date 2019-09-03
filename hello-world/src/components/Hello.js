import React from 'react'

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Rado T</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('div',null,'Hello Peter')
    )
}

export default Hello