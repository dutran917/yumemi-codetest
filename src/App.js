import { useEffect, useState } from 'react';
import api from './api';

import './App.css';
import HighCharts from './component/HighCharts';
import ListPrefectures from './component/ListPrefectures';



function App() {
  const [city,setCity] = useState([])
  const [report,setReport] = useState(null)
  const [selectedCity,setSelectedCity] = useState('')
  const [prefs,setPrefs] = useState([]) 
  const [categories,setCategory] = useState([])
  const  reportbyCity = async (selectedCity) => {
    let re = await api.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${selectedCity}`)
    console.log(re)
    if(re.data != '404')
    {
      setReport(re.data.result.data[0])
      
    }
}

  useEffect(()=>{
    api.get('https://opendata.resas-portal.go.jp/api/v1/prefectures')
    .then(
      (res)=> {
        console.log({res})
        setCity(res.data.result)
    }
      )
      
    },[])
    
      const [name,setName] = useState('')
      const [display,setDisplay] = useState(true)

  useEffect(()=>{
    console.log('report',report)
    if(report!=null)
    {
      setCategory(report.data.map((item) =>{ 
        return item.year
      }))
      prefs.push({
        name: name + 'の総人口',
        data: report.data.map((item)=> item.value),
      })
    }
  },[report])
  let name_tmp = ''
  const handleonChange = (e)=>{
    // console.log(e.target.checked)
    if(e.target.checked == true)
    {
      setSelectedCity(e.target.value)
      city.map((item)=> {if(item.prefCode == e.target.value) setName(item.prefName)})
      setDisplay(true)
    }
    else
    {
      setDisplay(false)
      // let name_tmp = ''
      city.map((item)=> {
        if(item.prefCode == e.target.value)
          name_tmp = item.prefName
      })
      // console.log(name_tmp)
      let index = prefs.findIndex((a) => (a.name ) == name_tmp+'の総人口')
      console.log('index',index)
      if(index != -1)
      {
        prefs.splice(index,1)
        // setPrefs(prefs)
      }
    }
  }
  
  useEffect(()=>{
    reportbyCity(selectedCity)
    
  },[selectedCity])
  return (
    <div className='container'>
      <div className='title'>
        <h1>日本の都道府県人口チャート</h1>
      </div>
      <div className='main'>
      <ListPrefectures list={city} value={selectedCity} handleonChange={handleonChange}></ListPrefectures>
      {report != null&&
      <div className='chart'><HighCharts  data={report} cate={categories} prefs={prefs}></HighCharts></div>
      }

      </div>
    </div>
  );
}

export default App;
