import React from 'react';
import './CSS/header.css'
import { Facebook,  Github,  Mailbox2,  Twitter } from 'react-bootstrap-icons';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Servieces from './Servieces';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

export default function Header() {
  return (
    <div>
    <BrowserRouter>
    <div className='Main-header'>
        <div className='sub-header'>
        <div className='row'>
            <div className='col-4'>
                    <span className='icon'><Facebook/></span>
                    <span  className='icon'><Twitter/></span>
                    <span className='icon'> <Github/></span>
            </div>
            <div className='col-8'>
            
                <div className='row'>
                    <div className='col-6 call'>Call Us:<span className='text-light'>+23-345-67890</span> </div>
                    <div className='col-6 mail'> <span><Mailbox2/></span> <span className='text-light'>supportus@gmail.com</span></div>
                </div>
            
            </div>
        </div>
        </div>
        <div className='menubar'>
                    <div className='row'>
                            <div className='col-5'>
                                <h3>Iprologic <span className='text-danger'>Solutions</span></h3>
                            </div>
                            <div className='col-7'>
                                <div className='row'>
                                        <div className='col-1'><Link to="/">HOME</Link></div>
                                        <div className='col-1'>
                                           <div className="dropdown">
                                                <p className="dropdown-toggle" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">ABOUT</p>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <li><a className="dropdown-item" href="#">OUR COMPANY</a></li>
                                                    <li><a className="dropdown-item" href="#">PRICING</a></li>
                                                    <li><a className="dropdown-item dropdown-toggle" href="#">SUB MENU</a>

                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                            <li><a className='dropdown-item' href='#'>SUB MENU1</a></li>
                                                            <li><a className='dropdown-item' href='#'>SUB MENU2</a></li>
                                                    </ul>
                                                    
                                                    </li>
                                                </ul>
                                                </div>

                                        </div>
                                        <div className='col-1'><Link to="/servieces">SERVIECES</Link></div>
                                        <div className='col-1'><Link to="/portfolio">PORTFOLIO</Link></div>
                                        <div className='col-1'><Link to="/blog">BLOG</Link></div>
                                        <div className='col-1'><Link to="/contact">CONTACT</Link></div>
                                        <div className='col-5'><button>GET A QUOTE</button></div>
                                </div>
                            </div>
                    </div>       
        </div>
    </div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/servieces' element={<Servieces/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>

        </Routes>
    </BrowserRouter>
        
    </div>
  )
}
