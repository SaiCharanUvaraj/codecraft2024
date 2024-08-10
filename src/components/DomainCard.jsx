const DomainCard = (props) =>{
    return (
          <div className="transition-all duration-500 basis-1/3 bg-[#31363F] rounded-lg hover:shadow-lg hover:shadow-[#5F85DB]">
              <div className="text-center p-3 text-2xl font-bold text-black bg-[#5F85DB] rounded-t-lg">
                  {props.title}
              </div>
              <div className="flex flex-col justify-center items-center p-4">
                  <img className="w-full h-56 rounded-xl mt-2 mb-2 pr-2 pl-2" src={props.image}/>
                  <p className="text-white text-lg text-center pr-2 pl-2">
                      {props.description}
                  </p>
              </div>
          </div>
        )
    }
export default DomainCard