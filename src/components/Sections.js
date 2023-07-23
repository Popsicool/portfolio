import React from 'react'
import "../styles/sections.css"
export const Sections = (props) => {
  const title = props.details.title
  const left = props.details.do
  const right = props.details.skills
  return (
    <>
    <div className='secTitle'>
      {title} skills
    </div>
        <div className='row'>
            <div className='col-md-6 do'>
                <p>What i do ?</p>
                <div className='sPo'>
                  <div className='sPi'></div>
                </div>
                <div>
                  {left.map((each) => (
                    <div className='sec' key={each.title}>
                        <img src={each.img} alt="pen icon"/>
                        <div>
                            <h4 className='doTitle'>{each.title}</h4>
                            <p className='doText'>{each.text}</p>
                        </div>

                    </div>
                  ))}
                </div>

            </div>
            <div className='col-md-6 do'>
              <p>Skills ?</p>
              <div>
                {right.map((each) => (
                  <div className='prog-con' key={each.title}>
                    <div className='prog-top'>
                      <h6 className='prog-text'>{each.title}</h6>
                      <p>{each.level}</p>
                    </div>
                    <div className='bar-outer'>
                      <div className='bar-inner' style={{width: each.level}}>
                      </div>
                    </div>
                  </div>
                ))}

              </div>

            </div>

        </div>
    </>
  )
}
