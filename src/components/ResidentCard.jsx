import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({resident}) => {

  const [residents, setResidents] = useState();
  console.log(residents)
    useEffect(() => {
      
        axios.get(resident)
        .then((res) => setResidents(res.data))
        .catch((err) => console.log(err))
    }, [])
  
  return (
    <article>
      <div className="conteiner">
        <div className='conteinerCard'>
          <img src={residents?.image} alt="" />
          
          {
            residents?.status === 'Alive' && <p className='conteiner--status'><span className='logo-alive'></span>{residents?.status}</p>
          }

          {
            residents?.status === 'Dead' && <p className='conteiner--status'><span className='logo-dead'></span>{residents?.status}</p>
          }

          {
            residents?.status === 'unknown' && <p className='conteiner--status'><span className='logo-unknown'></span>{residents?.status}</p>
          }
        </div>
          <section className='sectionul'>
            <h2>{residents?.name}</h2>
            <ul>
              <li>Specie</li>
              <li>{residents?.species}</li>
              <li>Origin </li>
              <li>{residents?.origin.name}</li>
              <li>Times Appear </li>
              <li>{residents?.episode.length}</li>
            </ul>
          </section>
      </div>
    </article>
  )
}

export default ResidentCard