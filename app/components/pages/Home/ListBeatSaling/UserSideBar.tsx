import React from 'react'
import './UserSideBar.css'
import { Avatar } from '@mui/material'

export const data = [
    { id: 4, name: 'KienPT', album: 'Album 1', followers: '1,000,000,000 Followers' },
    { id: 1, name: 'Son Tung MTP', album: 'Album 99', followers: '10,000,000 Followers' },
    { id: 2, name: 'Jack 5tr', album: 'Album 5', followers: '1 Followers' },
    { id: 3, name: 'Meme', album: 'Album 1', followers: '1 Followers' },
]

export const UserSideBar = () => {
    return (
        <div className="sideBar">
            <div className="stats">
                <div className="stats__item">
                    <span className="stats__item__title">Followers</span>
                    <span className="stats__item__value">10,000</span>
                </div>
                <div className="stats__item">
                    <span className="stats__item__title">Following</span>
                    <span className="stats__item__value">1,000</span>
                </div>
                <div className="stats__item">
                    <span className="stats__item__title">Tracks</span>
                    <span className="stats__item__value">1,000</span>
                </div>
            </div>
            <div className='artistModule'>
                <div className="fansTitle">
                    <span className='title'>Fans also like</span>
                    <span className='btn-refresh'>Refresh</span>
                </div>
                <hr />
                {
                    data.map((item, index) => (
                        <div className='artistItem' key={index}>
                            <Avatar src="https://thuthuatnhanh.com/wp-content/uploads/2023/06/hinh-nen-4k-cho-may-tinh.jpg" sx={{width: 100, height: 100, position: 'inherit'}}/>
                            <div className='artistItem__info'>
                                <span className='artistItem__info__name'>{item.name}</span>
                                <span className='artistItem__infor__album'>{item.album}</span>
                                <span className='artistItem__info__followers'>{item.followers}</span>
                                <button>Follow</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
