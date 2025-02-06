import Navbar from './components/ui/header';
import Stats from './components/ui/stats';
import Table from './components/ui/table';
import database from './config/firebase-config';

import { onValue, ref } from 'firebase/database';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import './App.css'

// Setup firebase Real Time DB
onValue(ref(database, "vaina_colmados/situacion_general"), snapshot => {
  let data = snapshot.val()
  console.log(data)
})

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
      <Table />
      </main>
    </>
  )
}

export default App
