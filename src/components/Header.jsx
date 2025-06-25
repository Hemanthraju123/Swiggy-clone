import React,{useState} from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";

export default function Header() {
    const [toggle,setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links=[
        {
            icon:<IoIosSearch/>,
            name:"Search"
        },
        {
            icon:<CiDiscount1/>,
            name:"Offers"
        },
        {
            icon:"",
            name:"Help"
        },
        {
            icon:"",
            name:"Sign In"
        },
        {
            icon:"",
            name:"Cart"
        }
    ]


    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
                opacity: toggle ? 1:0,
                visibility: toggle ? "visible" : "hidden"
            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className='w-[400px] bg-white h-full absolute duration-[400ms]'
                    style={{
                        left: toggle ? '0%': '-100%'
                    }}
                ></div>
            </div>
            <header className='p-[15px] shadow-xl text-[#688b78] sticky top-0 bg-white z-[9999]'>
                <div className='max-w-[1200px] mx-auto  flex items-center'>
                    <div className='w-[100px] '>
                        <img src="images/Swiggy logo.png" className='w-full' alt=""/>
                    </div>
                    <div className=''>
                        <span className='font-bold border border-b-[3px] border-[black]'>Yendada</span> Vizag, Andhra, India <RxCaretDown fontSize={25} className='inline text-[#fc8019] 
                        cursor-pointer' onClick={showSideMenu} />
                    </div>
                    <nav className='flex list-none gap-10 ml-auto text-[18px] font-semibold '>
                        {
                            links.map(
                                (link,index) => {
                                    return <li key={index} className='cursor-pointer flex hover:text-[#fc8019] items-center gap-2'>
                                        {link.icon}
                                        {link.name}
                                    </li>
                                }
                            )
                        }
                    </nav>
                       

                </div>
      
            </header>
        </>
    )
}
