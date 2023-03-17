import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { remaining } = useContext(AppContext);
    const [budget, setBudget] = useState('2000');
    return (
        <div className='alert alert-secondary'>
            <span>Budget: $</span>
            <input
                        required='required'
                        type='number'
                        max='20000'
                        min='spending'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => 
                            {
                                if (budget > 20000) {
                                    alert("The value cannot exceed 20000");
                                    setBudget(2000);
                                    return;
                                }
                                else if (budget < remaining) {
                                    alert("The value cannot be less than spending");
                                    setBudget(2000);
                                    return;
                                }

                                else
                                    setBudget(event.target.value)}
                            }
                        >
                        </input>
        </div>
    );
};
export default Budget;
