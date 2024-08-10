import DomainCard from "../components/DomainCard";
const Domain = () => {
    const cards=[
        {
            title:"Website Development",
            image:"https://th.bing.com/th?id=OIP.xi_VY54V535hztHz11VTyQHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
            description:"Build dynamic and responsive web applications that push the boundaries of innovation. Showcase your skills in front-end, back-end, or full-stack development."
        },
        {
            title:"Mobile App Development",
            image:"https://th.bing.com/th?id=OIP.O4b29g448P1Js7pElwG6-AHaFC&w=303&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
            description:"Create intuitive and impactful mobile apps that enhance user experiences. Whether native or cross-platform, bring your app ideas to life."
        },
        {
            title:"Artificial Intelligence",
            image:"https://th.bing.com/th?id=OIP.KwPFjO2CC4CXhWNkNkpmLAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
            description:"Develop intelligent systems using the latest in AI and machine learning. Innovate solutions that can transform industries and shape the future."
        }
        ];
  return (
    <div className="grid items-center justify-center pt-28" id="domain">
        <p className="text-center text-5xl font-bold text-white pb-5">Domains Available</p>
        <div className="grid md:grid-cols-3 gap-5 md:px-10 px-20">
            {cards.map((card,index) => <DomainCard key={index} title={card.title} description={card.description} image={card.image}/> ) }
        </div>
    </div>
  )
}

export default Domain