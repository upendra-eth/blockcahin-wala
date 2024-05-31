// Copyright 2024 user
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 h-16'>

        <div className='logo font-bold text-lg'> Blockchain Wala!</div>
        <ul className='flex justify-between gap-4'> 
        <li>Home </li>
        <li> About</li>
        <li> Projects</li>
        <li>Signup</li>
        <li>Login</li>

        </ul>
     
    </nav>
  )
}

export default Navbar
