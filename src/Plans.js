import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import db from './firebase';
import './Plans.css'

const Plans = () => {
    const  [plans, setPlans] = useState([]);

    useEffect(() => {
        db.collection('plans').get().then(querySnapshot => {
            const plan = {} ;
            querySnapshot.forEach(planDoc => {
                plan[planDoc.id] = planDoc.data();
            })
            setPlans(plan)
        });
        // eslint-disable-next-line
    }, [])

    return (
        <div className='plans'>
            <p>Renewal Date: 1/12/2023</p>
            {Object.entries(plans).map(([planId, planData]) => {
                return (
                    <div className="plans_plan" key={planId}>
                        <div className="plan_info">
                            <h5>{planData.plan}</h5>
                            <p>{planData.description}</p>
                        </div>
                        <button>{planData.active ? 'Current Package' : 'Subscribe'} </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Plans