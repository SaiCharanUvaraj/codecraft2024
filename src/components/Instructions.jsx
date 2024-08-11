import React from 'react'
import '../styles/Info.css'
const Instructions = (props) => {
    return (
        
        <div className=" max-w-md mx-auto p-4 mt-10">
            <h1 className="text-white text-3xl font-bold mb-16 text-center">{props.title}</h1>
            <div className="bgblue">
                <div className="card">
                <h2 className="text-white text-2xl font-semibold mb-2">{props.subheading}</h2>
                <p className="text-white mb-8">{props.paragraph}</p>
                </div>
            </div>
            <div className="bgblue">
                <div className="card">
                <h2 className="text-white text-2xl font-semibold mb-2">{props.subheading1}</h2>
                <p className="text-white mb-8">{props.paragraph1}</p>
                </div>
            </div>
            <div className="bgblue">
                <div className="card">
                <h2 className="text-white text-2xl font-semibold mb-2">{props.subheading2}</h2>
                <p className="text-white mb-8">{props.paragraph2}</p>
                </div>
            </div>
            <div className="bgblue">
                <div className="card">
                <h2 className="text-white text-2xl font-semibold mb-2">{props.subheading3}</h2>
                <p className="text-white mb-8">{props.paragraph3}</p>
                </div>
            </div>
        </div>
                
      );
}

export default Instructions