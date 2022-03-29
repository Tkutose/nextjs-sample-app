import { Dispatch, SetStateAction } from "react";

export default function Header(click:{setIsSubmit: Dispatch<SetStateAction<number>>}) {
    return (
        <div>
            <nav className="bg-white dark:bg-gray-800  shadow ">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full justify-between flex items-center">
                                <button
                                    className="flex-shrink-0 text-gray-800 text-2xl font-bold"
                                    onClick={() => click.setIsSubmit(0)}>
                                        nextjs-sample-app
                                </button>
                            tatsuya-kutose 2022/03
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}