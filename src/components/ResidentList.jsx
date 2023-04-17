import React from 'react'
import ResidentCard from './ResidentCard';

const ResidentList = ({location}) => {
    const residents = location?.residents;
    console.log(residents)
  return (
    <div className="card--item">
        {
            residents?.map((resident) => <ResidentCard key={resident} resident={resident} />)
        }
    </div>
  )
}

export default ResidentList 