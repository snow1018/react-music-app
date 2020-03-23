import React,{createElement} from 'react'
import { Spin } from 'antd';
import Loadable from 'react-loadable';



const dynamicWrapper = component => {
    // () => import('module')
    return Loadable({
        loader: () => {
            console.log(111)
            return component().then(raw => {
                const Component = raw.view || raw.default;

                return props => {
                    return createElement(Component, {
                        ...props
                    });
                };
            });
        },
        loading: () => {
            return 111;
        }
    });
};
export default [
    {
        path:'/',
        exact:true,
        component:dynamicWrapper(()=>import('./views/home' ))
    },
    {
        path:'/Login',
        component:dynamicWrapper(()=>import('./views/login' ))
    },
    {
        path:'/dailyRecomm',
        component:dynamicWrapper(()=>import('./views/daily-recomm' ))
    },
    {
        path:'/recommList',
        component:dynamicWrapper(()=>import('./views/recomm-list' ))
    },
    {
        path:'/playList',
        component:dynamicWrapper(()=>import('./views/play-list' ))
    },
    {
        path:'/songList',
        component:dynamicWrapper(()=>import('./views/song-list' ))
    }
]

