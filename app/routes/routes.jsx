import React from 'react';
import { Route, IndexRoute } from 'react-router';//route配置单个具体路由 indexRoute路由中展示默认组件
import { App, Home, About, Profile } from '../containers';

export default(
    <Route path = '/' component = { App }>
        <Route path = 'profile/:username' component = { Profile } />
        <IndexRoute component = { Home } />
        <Route path = 'about' component = { About } />
        </Route>
)