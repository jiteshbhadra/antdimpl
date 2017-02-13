import React from 'react';
import { Input } from 'antd';
import  {Button}  from 'antd';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;




class AntControls extends React.Component
{
   
    render()
    {
        return(
            <div>
            <div>
            <span>Text and Button Controls</span><br/>
            <Input placeholder="User Name"/><br/>
            <Input placeholder="Password"/><br/><br/>
            <Button type="primary">LOGIN</Button><br/>
            </div>
            <br/><hr/><br/>
            <div>
            <span>DatePicker Control</span><br/>
            <DatePicker/><br/>
            <span>Month Picker Control</span><br/>
            <MonthPicker /><br />
            <span>Range Picker Control</span><br/>
            <RangePicker />
            </div>
            </div>
        )
    }

}

export default AntControls