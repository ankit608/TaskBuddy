import React from 'react'

const Dashboard = () => {
  return (
    <>
    <nav className='navbar' style={{display:'flex'}}>
      <div className='nav-left'style={{flex:5}}>
      <div className='Task-option' style={{ display: "flex", alignItems: "center", gap: "8px" , padding:"10px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 34" fill="black">
<path d="M11.6569 30.4429H22.5685C25.5691 30.4429 28.0242 27.9878 28.0242 24.9871V9.98377C28.0242 7.25589 26.1147 5.07358 23.5232 4.6644C22.9776 3.70964 22.0229 3.16406 20.9317 3.16406H13.2937C12.2025 3.16406 11.2478 3.70964 10.7022 4.6644C8.11069 5.07358 6.20117 7.25589 6.20117 9.98377V24.9871C6.20117 27.9878 8.65627 30.4429 11.6569 30.4429ZM13.0209 6.02834C13.0209 6.02834 13.1573 5.89194 13.2937 5.89194H21.0681L21.2045 6.02834V6.9831C21.2045 7.11949 21.0681 7.25589 20.9317 7.25589H13.2937C13.1573 7.25589 13.0209 7.11949 13.0209 6.9831V6.02834ZM8.92905 9.98377C8.92905 8.89261 9.47463 8.07425 10.293 7.52867V7.66507C10.293 7.80146 10.4294 7.93786 10.4294 8.07425C10.4294 8.07425 10.4294 8.21064 10.5658 8.21064C10.5658 8.34704 10.7022 8.48343 10.7022 8.48343L10.8386 8.61983C10.8386 8.75622 10.975 8.75622 11.1114 8.89261L11.2478 9.02901L11.5205 9.3018L11.6569 9.43819C11.7933 9.43819 11.7933 9.57458 11.9297 9.57458C11.9297 9.57458 12.0661 9.57459 12.0661 9.71098C12.2025 9.71098 12.3389 9.84737 12.4753 9.84737H12.6117C12.8845 9.98377 13.0209 9.98377 13.2937 9.98377H21.7501C21.8865 9.98377 22.0229 9.98377 22.1593 9.84737C22.1593 9.84737 22.2957 9.84737 22.2957 9.71098C22.4321 9.71098 22.4321 9.57458 22.5685 9.57458L22.7049 9.43819C22.8413 9.43819 22.8413 9.3018 22.9776 9.1654L23.114 9.02901L23.3868 8.75622L23.5232 8.61983C23.5232 8.48343 23.6596 8.48343 23.6596 8.34704C23.6596 8.34704 23.6596 8.21064 23.796 8.21064C23.796 8.07425 23.9324 7.93786 23.9324 7.80146V7.66507C24.7508 8.07425 25.2963 9.02901 25.2963 10.1202V25.1235C25.2963 26.6238 24.0688 27.8514 22.5685 27.8514H11.6569C10.1566 27.8514 8.92905 26.6238 8.92905 25.1235V9.98377Z" fill="#000000" opacity={50}/>
<path d="M13.0221 22.2588H15.75C16.5684 22.2588 17.114 21.7133 17.114 20.8949C17.114 20.0765 16.5684 19.531 15.75 19.531H13.0221C12.2038 19.531 11.6582 20.0765 11.6582 20.8949C11.6582 21.7133 12.2038 22.2588 13.0221 22.2588ZM13.0221 16.8031H21.2058C22.0242 16.8031 22.5697 16.2575 22.5697 15.4391C22.5697 14.6208 22.0242 14.0752 21.2058 14.0752H13.0221C12.2038 14.0752 11.6582 14.6208 11.6582 15.4391C11.6582 16.2575 12.2038 16.8031 13.0221 16.8031Z" fill="#7B1984"/>
</svg>
  <span>TaskBuddy</span>
</div>
        <div className='List-Board' style={{display:'flex', gap:"10px",padding:"10px"}}>
          
        <div className='list-option' style={{ display: "flex", alignItems: "center", gap: "8px",  }}>
  <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.4116 5.59287H3.58984C3.35778 5.59287 3.13522 5.50068 2.97113 5.33659C2.80703 5.17249 2.71484 4.94993 2.71484 4.71787V3.58887C2.71484 3.3568 2.80703 3.13424 2.97113 2.97015C3.13522 2.80605 3.35778 2.71387 3.58984 2.71387H12.4116C12.6437 2.71387 12.8662 2.80605 13.0303 2.97015C13.1944 3.13424 13.2866 3.3568 13.2866 3.58887V4.71787C13.2863 4.94983 13.194 5.1722 13.0299 5.33622C12.8659 5.50024 12.6436 5.59254 12.4116 5.59287ZM3.58984 3.46387C3.55669 3.46387 3.5249 3.47704 3.50146 3.50048C3.47801 3.52392 3.46484 3.55572 3.46484 3.58887V4.71787C3.46484 4.75102 3.47801 4.78281 3.50146 4.80626C3.5249 4.8297 3.55669 4.84287 3.58984 4.84287H12.4116C12.4447 4.84287 12.4765 4.8297 12.5 4.80626C12.5234 4.78281 12.5366 4.75102 12.5366 4.71787V3.58887C12.5366 3.55572 12.5234 3.52392 12.5 3.50048C12.4765 3.47704 12.4447 3.46387 12.4116 3.46387H3.58984ZM12.4116 13.2854H3.58984C3.35778 13.2854 3.13522 13.1932 2.97113 13.0291C2.80703 12.865 2.71484 12.6424 2.71484 12.4104V11.2814C2.71484 11.0493 2.80703 10.8267 2.97113 10.6626C3.13522 10.4986 3.35778 10.4064 3.58984 10.4064H12.4116C12.6436 10.4067 12.8659 10.499 13.0299 10.663C13.194 10.827 13.2863 11.0494 13.2866 11.2814V12.4104C13.2866 12.6424 13.1944 12.865 13.0303 13.0291C12.8662 13.1932 12.6437 13.2854 12.4116 13.2854ZM3.58984 11.1564C3.55669 11.1564 3.5249 11.1695 3.50146 11.193C3.47801 11.2164 3.46484 11.2482 3.46484 11.2814V12.4104C3.46484 12.4435 3.47801 12.4753 3.50146 12.4988C3.5249 12.5222 3.55669 12.5354 3.58984 12.5354H12.4116C12.4447 12.5354 12.4765 12.5222 12.5 12.4988C12.5234 12.4753 12.5366 12.4435 12.5366 12.4104V11.2814C12.5366 11.2482 12.5234 11.2164 12.5 11.193C12.4765 11.1695 12.4447 11.1564 12.4116 11.1564H3.58984ZM12.4116 9.43912H3.58984C3.35778 9.43912 3.13522 9.34693 2.97113 9.18284C2.80703 9.01874 2.71484 8.79618 2.71484 8.56412V7.43512C2.71484 7.20305 2.80703 6.98049 2.97113 6.8164C3.13522 6.6523 3.35778 6.56012 3.58984 6.56012H12.4116C12.6436 6.56045 12.8659 6.65274 13.0299 6.81676C13.194 6.98079 13.2863 7.20315 13.2866 7.43512V8.56412C13.2866 8.79618 13.1944 9.01874 13.0303 9.18284C12.8662 9.34693 12.6437 9.43912 12.4116 9.43912ZM3.58984 7.31012C3.55669 7.31012 3.5249 7.32329 3.50146 7.34673C3.47801 7.37017 3.46484 7.40197 3.46484 7.43512V8.56412C3.46484 8.59727 3.47801 8.62906 3.50146 8.65251C3.5249 8.67595 3.55669 8.68912 3.58984 8.68912H12.4116C12.4447 8.68912 12.4765 8.67595 12.5 8.65251C12.5234 8.62906 12.5366 8.59727 12.5366 8.56412V7.43512C12.5366 7.40197 12.5234 7.37017 12.5 7.34673C12.4765 7.32329 12.4447 7.31012 12.4116 7.31012H3.58984Z" fill="black"/>
  </svg>
  <span>List</span>
</div>
              
           
            <div className='board-option'>
         
            <div className='list-option' style={{ display: "flex", alignItems: "center", gap: "8px",color:"#231F2082" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 34 34" fill="black">
<path d="M11.6569 30.4429H22.5685C25.5691 30.4429 28.0242 27.9878 28.0242 24.9871V9.98377C28.0242 7.25589 26.1147 5.07358 23.5232 4.6644C22.9776 3.70964 22.0229 3.16406 20.9317 3.16406H13.2937C12.2025 3.16406 11.2478 3.70964 10.7022 4.6644C8.11069 5.07358 6.20117 7.25589 6.20117 9.98377V24.9871C6.20117 27.9878 8.65627 30.4429 11.6569 30.4429ZM13.0209 6.02834C13.0209 6.02834 13.1573 5.89194 13.2937 5.89194H21.0681L21.2045 6.02834V6.9831C21.2045 7.11949 21.0681 7.25589 20.9317 7.25589H13.2937C13.1573 7.25589 13.0209 7.11949 13.0209 6.9831V6.02834ZM8.92905 9.98377C8.92905 8.89261 9.47463 8.07425 10.293 7.52867V7.66507C10.293 7.80146 10.4294 7.93786 10.4294 8.07425C10.4294 8.07425 10.4294 8.21064 10.5658 8.21064C10.5658 8.34704 10.7022 8.48343 10.7022 8.48343L10.8386 8.61983C10.8386 8.75622 10.975 8.75622 11.1114 8.89261L11.2478 9.02901L11.5205 9.3018L11.6569 9.43819C11.7933 9.43819 11.7933 9.57458 11.9297 9.57458C11.9297 9.57458 12.0661 9.57459 12.0661 9.71098C12.2025 9.71098 12.3389 9.84737 12.4753 9.84737H12.6117C12.8845 9.98377 13.0209 9.98377 13.2937 9.98377H21.7501C21.8865 9.98377 22.0229 9.98377 22.1593 9.84737C22.1593 9.84737 22.2957 9.84737 22.2957 9.71098C22.4321 9.71098 22.4321 9.57458 22.5685 9.57458L22.7049 9.43819C22.8413 9.43819 22.8413 9.3018 22.9776 9.1654L23.114 9.02901L23.3868 8.75622L23.5232 8.61983C23.5232 8.48343 23.6596 8.48343 23.6596 8.34704C23.6596 8.34704 23.6596 8.21064 23.796 8.21064C23.796 8.07425 23.9324 7.93786 23.9324 7.80146V7.66507C24.7508 8.07425 25.2963 9.02901 25.2963 10.1202V25.1235C25.2963 26.6238 24.0688 27.8514 22.5685 27.8514H11.6569C10.1566 27.8514 8.92905 26.6238 8.92905 25.1235V9.98377Z" fill="#00000082" opacity={50}/>
<path d="M13.0221 22.2588H15.75C16.5684 22.2588 17.114 21.7133 17.114 20.8949C17.114 20.0765 16.5684 19.531 15.75 19.531H13.0221C12.2038 19.531 11.6582 20.0765 11.6582 20.8949C11.6582 21.7133 12.2038 22.2588 13.0221 22.2588ZM13.0221 16.8031H21.2058C22.0242 16.8031 22.5697 16.2575 22.5697 15.4391C22.5697 14.6208 22.0242 14.0752 21.2058 14.0752H13.0221C12.2038 14.0752 11.6582 14.6208 11.6582 15.4391C11.6582 16.2575 12.2038 16.8031 13.0221 16.8031Z" fill="#7B1984"/>
</svg>
  <span style={{color:"#231F2082"}}>Board</span>
</div>
                <div></div>
            </div>
        </div>

      </div>
      <div className='nav-right' style={{padding:"10px"}}>
        <div style={{display:"flex", alignItems:"center", gap:"20px", paddingBottom:"10px"}}>
          <img  src="/favicon.ico"  style={{ borderRadius: "50%", width: "32px", height: "32px" }}/> 
          <div>Ankit</div>
        </div>
      
          <div style={{display:"flex", borderRadius:"12px", border:"1px", backgroundColor:"#7B198415", width:"108px" ,alignItems:"center", justifyContent:"center"}}>
            <span></span> Logout
          </div>
      </div>
    </nav>
    <nav className='navbar-bottom' style={{display:'flex' }}>
    <div style={{display:"flex", gap:10 , flex:1, fontSize:"12px", padding:"10px"}}>
    <div>Filter by:</div> 
     <div style={{width:"90px", height:"30px", borderRadius:"60px",borderStyle: "solid", borderWidth:"1px", borderColor:"#00000020", display:"flex", alignItems:"center", justifyContent:"center", gap:"5px"}}> <span>Category</span>
     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 34 34" fill="black">
<path d="M11.6569 30.4429H22.5685C25.5691 30.4429 28.0242 27.9878 28.0242 24.9871V9.98377C28.0242 7.25589 26.1147 5.07358 23.5232 4.6644C22.9776 3.70964 22.0229 3.16406 20.9317 3.16406H13.2937C12.2025 3.16406 11.2478 3.70964 10.7022 4.6644C8.11069 5.07358 6.20117 7.25589 6.20117 9.98377V24.9871C6.20117 27.9878 8.65627 30.4429 11.6569 30.4429ZM13.0209 6.02834C13.0209 6.02834 13.1573 5.89194 13.2937 5.89194H21.0681L21.2045 6.02834V6.9831C21.2045 7.11949 21.0681 7.25589 20.9317 7.25589H13.2937C13.1573 7.25589 13.0209 7.11949 13.0209 6.9831V6.02834ZM8.92905 9.98377C8.92905 8.89261 9.47463 8.07425 10.293 7.52867V7.66507C10.293 7.80146 10.4294 7.93786 10.4294 8.07425C10.4294 8.07425 10.4294 8.21064 10.5658 8.21064C10.5658 8.34704 10.7022 8.48343 10.7022 8.48343L10.8386 8.61983C10.8386 8.75622 10.975 8.75622 11.1114 8.89261L11.2478 9.02901L11.5205 9.3018L11.6569 9.43819C11.7933 9.43819 11.7933 9.57458 11.9297 9.57458C11.9297 9.57458 12.0661 9.57459 12.0661 9.71098C12.2025 9.71098 12.3389 9.84737 12.4753 9.84737H12.6117C12.8845 9.98377 13.0209 9.98377 13.2937 9.98377H21.7501C21.8865 9.98377 22.0229 9.98377 22.1593 9.84737C22.1593 9.84737 22.2957 9.84737 22.2957 9.71098C22.4321 9.71098 22.4321 9.57458 22.5685 9.57458L22.7049 9.43819C22.8413 9.43819 22.8413 9.3018 22.9776 9.1654L23.114 9.02901L23.3868 8.75622L23.5232 8.61983C23.5232 8.48343 23.6596 8.48343 23.6596 8.34704C23.6596 8.34704 23.6596 8.21064 23.796 8.21064C23.796 8.07425 23.9324 7.93786 23.9324 7.80146V7.66507C24.7508 8.07425 25.2963 9.02901 25.2963 10.1202V25.1235C25.2963 26.6238 24.0688 27.8514 22.5685 27.8514H11.6569C10.1566 27.8514 8.92905 26.6238 8.92905 25.1235V9.98377Z" fill="#000000" opacity={50}/>
<path d="M13.0221 22.2588H15.75C16.5684 22.2588 17.114 21.7133 17.114 20.8949C17.114 20.0765 16.5684 19.531 15.75 19.531H13.0221C12.2038 19.531 11.6582 20.0765 11.6582 20.8949C11.6582 21.7133 12.2038 22.2588 13.0221 22.2588ZM13.0221 16.8031H21.2058C22.0242 16.8031 22.5697 16.2575 22.5697 15.4391C22.5697 14.6208 22.0242 14.0752 21.2058 14.0752H13.0221C12.2038 14.0752 11.6582 14.6208 11.6582 15.4391C11.6582 16.2575 12.2038 16.8031 13.0221 16.8031Z" fill="#7B1984"/>
</svg>
     </div>
     <div style={{width:"90px", height:"30px", borderRadius:"60px",borderStyle: "solid", borderWidth:"1px", borderColor:"#00000020", display:"flex", alignItems:"center", justifyContent:"center", gap:"5px" , }}> <span>Due Date</span>
     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 34 34" fill="black">
<path d="M11.6569 30.4429H22.5685C25.5691 30.4429 28.0242 27.9878 28.0242 24.9871V9.98377C28.0242 7.25589 26.1147 5.07358 23.5232 4.6644C22.9776 3.70964 22.0229 3.16406 20.9317 3.16406H13.2937C12.2025 3.16406 11.2478 3.70964 10.7022 4.6644C8.11069 5.07358 6.20117 7.25589 6.20117 9.98377V24.9871C6.20117 27.9878 8.65627 30.4429 11.6569 30.4429ZM13.0209 6.02834C13.0209 6.02834 13.1573 5.89194 13.2937 5.89194H21.0681L21.2045 6.02834V6.9831C21.2045 7.11949 21.0681 7.25589 20.9317 7.25589H13.2937C13.1573 7.25589 13.0209 7.11949 13.0209 6.9831V6.02834ZM8.92905 9.98377C8.92905 8.89261 9.47463 8.07425 10.293 7.52867V7.66507C10.293 7.80146 10.4294 7.93786 10.4294 8.07425C10.4294 8.07425 10.4294 8.21064 10.5658 8.21064C10.5658 8.34704 10.7022 8.48343 10.7022 8.48343L10.8386 8.61983C10.8386 8.75622 10.975 8.75622 11.1114 8.89261L11.2478 9.02901L11.5205 9.3018L11.6569 9.43819C11.7933 9.43819 11.7933 9.57458 11.9297 9.57458C11.9297 9.57458 12.0661 9.57459 12.0661 9.71098C12.2025 9.71098 12.3389 9.84737 12.4753 9.84737H12.6117C12.8845 9.98377 13.0209 9.98377 13.2937 9.98377H21.7501C21.8865 9.98377 22.0229 9.98377 22.1593 9.84737C22.1593 9.84737 22.2957 9.84737 22.2957 9.71098C22.4321 9.71098 22.4321 9.57458 22.5685 9.57458L22.7049 9.43819C22.8413 9.43819 22.8413 9.3018 22.9776 9.1654L23.114 9.02901L23.3868 8.75622L23.5232 8.61983C23.5232 8.48343 23.6596 8.48343 23.6596 8.34704C23.6596 8.34704 23.6596 8.21064 23.796 8.21064C23.796 8.07425 23.9324 7.93786 23.9324 7.80146V7.66507C24.7508 8.07425 25.2963 9.02901 25.2963 10.1202V25.1235C25.2963 26.6238 24.0688 27.8514 22.5685 27.8514H11.6569C10.1566 27.8514 8.92905 26.6238 8.92905 25.1235V9.98377Z" fill="#000000" opacity={50}/>
<path d="M13.0221 22.2588H15.75C16.5684 22.2588 17.114 21.7133 17.114 20.8949C17.114 20.0765 16.5684 19.531 15.75 19.531H13.0221C12.2038 19.531 11.6582 20.0765 11.6582 20.8949C11.6582 21.7133 12.2038 22.2588 13.0221 22.2588ZM13.0221 16.8031H21.2058C22.0242 16.8031 22.5697 16.2575 22.5697 15.4391C22.5697 14.6208 22.0242 14.0752 21.2058 14.0752H13.0221C12.2038 14.0752 11.6582 14.6208 11.6582 15.4391C11.6582 16.2575 12.2038 16.8031 13.0221 16.8031Z" fill="#7B1984"/>
</svg>
     </div>
     
     
    </div>
     
     <div className="navbar-bottom-right" style={{display:"flex", gap:"12px", alignItems:"center", position:"relative"}}>
     <div style={{position:"absolute", top:"14px" , left: "10px"}}>
     <svg
  fill="#000000"
  height="18px"
  width="18px"
  version="1.1"
  id="Capa_1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 488.4 488.4"
>
  <g>
    <g>
      <path
        d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7S381.9,104.65,381.9,203.25z"
      />
    </g>
  </g>
</svg>
     </div>
   
     <div><input style={{width:"204px", height:"32px" , borderRadius:"60px",outline:"none", borderColor:"#00000042", boxSizing:"border-box", paddingLeft:"30px"}}type='text'></input></div>
     <div style={{width:"152px", height:"48px" , borderRadius:"41px", backgroundColor:"#7B1984", color:"white", display:"flex" , alignItems:"center",justifyContent:"center"}} className='add-task'> Add Task</div>
     </div>
    
     
    </nav>
    <div style={{paddingTop:"30px"}}>
    <hr></hr>
    </div>
   
    </>
  )
}

export default Dashboard
