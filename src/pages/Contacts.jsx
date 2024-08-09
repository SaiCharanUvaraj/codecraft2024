import React from 'react'
import Profile from '../components/Porfile'
import Faculty from '../components/Faculty'

export const Contacts = () => {
  return (
    <div>
        <h1 className='text-center text-3xl font-bold p-5'>Contacts</h1>
        <h1 className='text-center text-2xl font-bold'>Faculty Coordinators</h1>
        <div>
            <div className='lg:flex lg:gap-x-28 gap-y-11 lg:p-5 justify-center' >
                <Faculty  src="https://www.innovatia23.tech/nithya.jpeg" name="Dr.M.Nithya" post="Head of the department" email="asdf@gmail.com"/>
            </div>
            <div className='lg:flex lg:gap-32 lg:p-5 justify-center'>
                <div>
                <Faculty src="https://www.innovatia23.tech/yuvaraj.jpeg" name="Prof.G.Yuvaraj " post="Co-Ordinator" email="qwer@gmail.com"/>
                </div>
                <div>
                <Faculty src="https://www.innovatia23.tech/Shiny.jpg" name="Prof.A.Shiny  " post="Co-Ordinator" email="qwer@gmail.com"/>
                </div>
            </div>
            <div className='lg:flex lg:gap-y-16 lg:gap-x-20 lg:justify-center mt-5'>
                <div>
                    <Faculty src="https://www.innovatia23.tech/nandini.jpeg" name="Prof Nandhini Devi" post="Professor" email="asdf@gmail.com"/>
                </div>
                <div>
                    <Faculty src="https://www.innovatia23.tech/shariff.jpeg" name="Prof.M.Ashan Sherif " post="Professor" email="asdf@gmail.com"/>
                </div>
                <div>
                    <Faculty src="https://www.innovatia23.tech/lakshmi.jpeg" name="Prof.Lakshmi Narayanan" post="Professor" email="asdf@gmail.com"/>
                </div>
                <div>
                    <Faculty src="https://t4.ftcdn.net/jpg/07/88/67/21/240_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg" name="AAAAAA" post="Professor" email="asdf@gmail.com"/>
                </div>
                <div>
                    <Faculty src="https://t4.ftcdn.net/jpg/07/88/67/21/240_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg" name="AAAAAA" post="Professor" email="asdf@gmail.com"/>
                </div>
            </div>
        </div>
        <h1 className='text-2xl text-center p-5 font-bold'>Student Co-Ordinators</h1>
        <div id='student_coordinators' className='lg:flex lg:gap-x-28 lg:justify-center '>
            <div>
                <Profile src="https://t4.ftcdn.net/jpg/07/88/67/21/240_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg" name="AAAAAAA" post="Team-Lead" no="1234567890" email="abc@gmail.com"/>
            </div>
            <div>
                <Profile src="https://t4.ftcdn.net/jpg/07/88/67/21/240_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg" name="BBBBBB" post="xyz" no="1234567890" email="abc@gmail.com"/>
            </div>
            <div>
                <Profile src="https://t4.ftcdn.net/jpg/07/88/67/21/240_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg" name="CCCCC" post="xyz" no="1234567890" email="abc@gmail.com"/>
            </div>
        </div>
        <div className='lg:flex lg:gap-x-28 lg:justify-center  p-5 '>
            <div>
                <Profile src="https://t4.ftcdn.net/jpg/07/88/67/21/240_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg" name="DDDDDD" post="xyz" no="1234567890" email="abc@gmail.com"/>
            </div>
            <div>
                <Profile src="https://t4.ftcdn.net/jpg/07/88/67/21/240_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg" name="EEEEEE" post="xyz" no="1234567890" email="abc@gmail.com"/>
            </div>
        </div>
    </div>
  )
}
