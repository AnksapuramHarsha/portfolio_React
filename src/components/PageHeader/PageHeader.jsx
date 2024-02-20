// import React from 'react'
import './PageHeader.scss';

const PageHeader = (props) => {
    const {header,icon}=props;
  return (
    <div className="titles">
        <div>
            {header}
        </div>
        <div>
            {icon}
        </div>
    </div>
  )
}

export default PageHeader