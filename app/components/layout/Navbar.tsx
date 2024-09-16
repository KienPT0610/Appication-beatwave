import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAccount } from 'wagmi';
import { getAdmin } from '../utils/data';
import { Address } from 'viem';

export const Navbar = () => {

    const account = useAccount();
    const [admin, setAdmin] = useState<Address | null>(null);

    useEffect(() => {
        const fetchAdmin = async() => {
            const ad = await getAdmin();
            setAdmin(ad as Address);
        }
        fetchAdmin();
    }, [])

    console.log(admin);

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/manage">Manage</NavLink>
                </li>
                <li>
                    <NavLink to="/upload">Upload</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                {   admin === account.address &&
                    <li>
                        <NavLink to="/admin">Admin</NavLink>
                    </li>
                }
            </ul>
        </nav>
    )
}
