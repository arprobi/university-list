import { useState, useEffect } from 'react'
import axios from 'axios'

import Search from '../../components/Search'
import { Table } from '../../components/Home'
import { Spinner } from '../../components/Common'

import { ISearch } from '../../interfaces'

const UNIVERSITIES_API_URL = 'http://universities.hipolabs.com/search'

const Home = () => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<ISearch>({
    name: 'middle',
    country: ''
  })

  useEffect(() => {
    getListUniversities()
  }, [])

  const getListUniversities = async () => {
    setLoading(true)
    axios.get(`${UNIVERSITIES_API_URL}`, {
      params: search
    })
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        throw error
      })
  }

  const handleChangeSearch = (name: string, value: string): void => {
    setSearch((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmitSearch = (): void => {
    getListUniversities()
  }

  return (
    <div className="max-w-4xl m-auto mt-5 px-4">
      <h1 className="font-semibold text-lg mb-4 p-1">List of Universities</h1>

      <div className="my-8">
        <Search
          value={search}
          handleChange={(name: string, value: string) => handleChangeSearch(name, value)}
          handleSubmit={() => handleSubmitSearch()}
        />
      </div>
      <div className="my-8">
        {loading && (<Spinner />)}
        {!loading && (<Table data={data}/>)}
      </div>
    </div>
  )
}

export default Home
