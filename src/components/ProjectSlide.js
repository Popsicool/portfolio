import React from 'react'

export const ProjectSlide = (props) => {
    const list = props.list
    const handleClick = props.handleClick

  return (
    <div className="row">
        {list.map((each, idx) => (
            <div className='col-lg-2 col-sm-3 col-6 mt-4' key={idx} onClick={() => handleClick({category:each.category, selected:each})}>
                <div className='cd' style={{backgroundImage: `url(${each.img})`}}>
                    <p className='projectTitle'>
                        {each.title}
                    </p>
                </div>
            </div>
        ))}

    </div>
  )
}
