import { useState } from "react";
import AccountMenuButton from "./AccountMenuButton";


function AccountPanel() {

    const [isMenuOpen,setMenuStatus] = useState(false);


    return (<div className='w-full flex justify-between'>
        <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
            <img className='w-6 h-6' src='/public/images/common/Vector.svg'/>
        </div>
        <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
            <img className='w-6 h-6' src='/public/images/common/Vector(1).svg'/>
        </div>
        <div>
            <p>User Name</p>
            <p>User Status</p>
        </div>
        <div className='w-10 h-10 rounded-full flex justify-center items-center '>
            <AccountMenuButton imageLink=""/>
        </div>
    </div>);
}

export default AccountPanel;