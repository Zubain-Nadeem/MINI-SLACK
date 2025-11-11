import React from 'react'

const UserPanel = () => {
  return (
    <div>
       <aside className="hidden lg:block w-64 bg-white border-l p-4">
      <h3 className="text-lg font-semibold mb-3">Members</h3>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Ali Raza</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span>Fatima</span>
        </li>
      </ul>
    </aside>
    </div>
  )
}

export default UserPanel
