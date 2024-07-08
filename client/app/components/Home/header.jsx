import Image from "next/image";
import { BellIcon, ChatIcon, ChevronDownIcon, 
        HomeIcon, UserGroupIcon, ViewGridIcon,
        UsersIcon
    } from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon, 
    } from "@heroicons/react/outline";

import HeaderIcon from "./header-icon";

function Header() {
    return (
        <div className="sticky top-0 z-50 w-full bg-white flex justify-between items-center p-2 lg:px-5 shadow-md">

            {/* left */}
            <div className="flex items-center">
                <Image 
                src="https://links.papareact.com/5me"
                width={40}
                height={40}
                layout="fixed"
                />

                <div className="hidden md:inline-flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className='h-6 text-grey-600'/>
                    <input 
                        className="flex ml-2 items-center bg-transparent outline-none
                        placeholder-grey-500 flex-shrink" 
                        type="text" 
                        placeholder="Search Facebook"
                    />
                </div>
            </div>

            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={UsersIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>

            {/* right */}
            <div className="flex items-center gap-2 sm:space-x-2">
                <Image/>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
            </div>

        </div>
    );
}

export default Header;