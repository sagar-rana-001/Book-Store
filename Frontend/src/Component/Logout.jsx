import React from 'react'

const Logout = () => {
    const handleLogout = (() => {
        console.log(object)
    })
    return (
        <>
            <div>
                <button
                    className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

        </>
    )
}

export default Logout
