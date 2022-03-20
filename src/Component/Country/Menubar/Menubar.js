import React from 'react';
import './Menubar.css'
const Menubar = () => {
    return (
        <div className='container'>
          <div className="row">
              <div className="col-2 p-3">Logo</div>
              <div className="col-10 menu d-flex justify-content-end">
                  <li>Home</li>
                  <li>Produts</li>
                  <li>Cart</li>
                  <li>About</li>
              </div>
          </div>
        </div>
    );
};

export default Menubar;