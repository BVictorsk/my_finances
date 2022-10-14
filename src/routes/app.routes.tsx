import React from "react";
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import List from '../pages/list'
import Layout from '../components/layout'

const AppRoutes: React.FC = () => (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list/:type" element={<List />} />
      </Routes>
    </Layout>
  );
  export default AppRoutes;