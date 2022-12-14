import React from 'react'
import lookbook from '../../assets/Cargo_woman.jpeg'
import "./Lookbook.css"
import UseCountdown from '../../components/CounDown/UseCountdown'

const Lookbook = () => {
    const endTime=new Date().getTime()+60000*200; 
    const [timeLeft]=UseCountdown(endTime);

    const days=Math.floor(timeLeft /864000)%60
    const hours=Math.floor(timeLeft / 3600000) %60
    const minutes = Math.floor(timeLeft / 60000) % 60;
    const seconds = Math.floor(timeLeft / 1000) % 60;


  return (
    <div className='alldivcount'>
       <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="left col-lg-6">
                    <img className='img-fluid img1' src={lookbook} alt="" />
                </div>
                <div className='white'>
                           <div className="countdowndiv col-lg-12 text-center">
                           <div className="hll">
                           <p className='h5'>We are opening up soon!</p>
                           <p className='h5t'>We are opening up soon!</p>
                           </div>
                            <div className="alltimecount">
                            <div className="countdown row">
                               <div className='time'>
                               <span className='timer d'>{`${days} : `}</span>
                               <span className='timer h'>{`0${hours} :  `}</span>
                               <span className='timer'>{`${minutes} : `}</span>
                               <span className='timer'>{`${seconds}`}</span>
                               </div>
                            </div>
                            <div>
                            <div className='timename'>
                               <span className='dys' >DAYS  </span>
                               <span className='hrs' > HOURS  </span>
                               <span className='mnt'> MINUTES  </span>
                               <span className='scd'> SECONDS  </span>
                               </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Lookbook