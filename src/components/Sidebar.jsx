import React from 'react'

const Sidebar = () => {
  return (
    <div>
       <aside className="w-64 bg-white border-r p-4">
      <h2 className="text-xl font-semibold mb-4">Workspaces</h2>
      <ul>
        <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">General</li>
        <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Development</li>
        <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Design</li>
      </ul>
    </aside>
    </div>
  )
}

export default Sidebar

