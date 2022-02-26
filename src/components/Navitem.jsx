import React from 'react';


const Navitem = ({props}) => {
  return (
    <div>
      <ul>
        <li className={props.itemClassName}><a href={props.linkName}>{props.name}</a></li>
      </ul>
    </div>
  )
}

export default Navitem
