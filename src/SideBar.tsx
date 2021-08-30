import { Link } from "react-router-dom";

export interface SideBarProps {
    items: Array<{ name: string, to: string }>;
    icons: Array<{ name: string, to: string, icon: any }>;
    onLogout?: () => Promise<void>
    children: any;
}


export function SideBar(props: SideBarProps) {
    const { items, children } = props;
    return (
        <div className="w-full flex">
            <div className="flex flex-col w-full md:w-64 lex-shrink-0">
                <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                    <Link to="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                        Alpaki
                    </Link>
                    <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">

                    </button>
                </div>
                <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
                    {
                        items.map(item => (
                            <Link key={item.to} to={item.to} className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                {item.name}
                            </Link>
                        ))
                    }
                    {/* <div className="relative">
                        <button className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                            <span>Dropdown</span>
                        </button >
                        <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg">
                            <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                                <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                                <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                                <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                            </div>
                        </div>
                    </div> */}
                </nav>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}