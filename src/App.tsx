import { useState } from 'react'
import Navbar from './components/ui/header';
import Stats from './components/ui/stats';
import Table from './components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <main className='container mx-auto p-4'>
      <Tabs defaultValue="o7" className='mb-5' >
        <TabsList>
          <TabsTrigger value="o7">Colmado O7</TabsTrigger>
          <TabsTrigger value="o9">Colmado O9</TabsTrigger>
          <TabsTrigger value="parqueo">Parqueo 10</TabsTrigger>
        </TabsList>
        <TabsContent value="o7">
          <Stats />
        </TabsContent>
        <TabsContent value="o9">
          <Stats />
        </TabsContent>
        <TabsContent value="parqueo">Change your password here.</TabsContent>
      </Tabs>
      <Table className="mt-5"/>
      </main>
    </>
  )
}

export default App
