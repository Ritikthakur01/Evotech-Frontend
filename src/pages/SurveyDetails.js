import React from 'react'
import style from '../style/detail.module.css';
import { useState , useEffect } from 'react';

const SurveyDetails = () => {

    const [ data , setData ] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('https://evotech-60nz.onrender.com/getAllData',{
                method:"GET"
            }
            );
            const json = await res.json();
            setData(json.data);
        }
        fetchData()
        console.log("Ritikkkkkkkk",data);

    },[])


  return (
    <div className={style.detail_container}>
        <div className={style.detail_mainContainer}>
            <table>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Gender
                    </th>
                    <th>
                        Address
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Number
                    </th>
                    <th>
                        Nationality
                    </th>
                    <th>
                        Message
                    </th>
                </tr>
                <div className={style.details}>
                { data.map((item,index)=>{
                        return(
                            <tr key={index}  >
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.gender}
                                </td>
                                <td>
                                    {item.address}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.phoneNumber}
                                </td>
                                <td>
                                    {item.nationality}
                                </td>
                                <td>
                                    {item.message}
                                </td>
                            </tr>
                            )
                        })}
                    </div>
            </table>
        </div>
    </div>
  )
}

export default SurveyDetails
