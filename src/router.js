import React from 'react'

const Home = React.lazy(()=>import('./views/home' ))
const Login = React.lazy(()=>import('./views/login' ))
const dailyRecomm = React.lazy(()=>import('./views/daily-recomm' ))
const recommList = React.lazy(()=>import('./views/recomm-list' ))
const playList = React.lazy(()=>import('./views/play-list' ))
const songList = React.lazy(()=>import('./views/song-list' ))


export default [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/Login',
        component:Login
    },
    {
        path:'/dailyRecomm',
        component:dailyRecomm
    },
    {
        path:'/recommList',
        component:recommList
    },
    {
        path:'/playList',
        component:playList
    },
    {
        path:'/songList',
        component:songList
    }
]

