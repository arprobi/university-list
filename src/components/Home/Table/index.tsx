import React, { useState, useEffect } from 'react'

import { ChevronDoubleUpIcon, ChevronDoubleDownIcon } from '@heroicons/react/solid'

interface DetailData {
  name: string
  country: string
  web_pages: string[]
}
interface TableProps {
  data: DetailData[]
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [sortingName, setSortingName] = useState<string>('asc')
  const [sortingCoutry, setSortingCoutry] = useState<string>('asc')
  const [list, setList] = useState<DetailData[]>(data)

  const isOdd = (number: number): boolean => {
    return number % 2 === 0
  }

  const handleSort = (type: 'asc' | 'desc', column: 'name' | 'country'): void => {
    if (column === 'name') {
      setSortingName(type)
    } else {
      setSortingCoutry(type)
    }
  }

  const renderSortIcon = (column: 'name' | 'country'): JSX.Element => {
    const parameter = column === 'name' ? sortingName : sortingCoutry
    if (parameter === 'asc') {
      return (
        <div>
          <ChevronDoubleUpIcon className="h-3 text-gray ml-2" onClick={() => handleSort('desc', column)}/>
        </div>
      )
    } else {
      return (
        <div>
          <ChevronDoubleDownIcon className="h-3 text-gray ml-2" onClick={() => handleSort('asc', column)}/>
        </div>
      )
    }
  }

  const sortingData = (data: DetailData[], type: string, column: 'name' | 'country'): DetailData[] => {
    if (type === 'asc') {
      data.sort((a: any, b: any) => {
        let fa = a[column].toLowerCase(),
            fb = b[column].toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      })
    } else {
      data.sort((a, b) => {
        let fa = a[column].toLowerCase(),
            fb = b[column].toLowerCase();

        if (fa < fb) {
            return 1;
        }
        if (fa > fb) {
            return -1;
        }
        return 0;
      })
    }
    return data
  }

  useEffect(() => {
    setList(
      sortingData(data, sortingName, 'name')
    )
  }, [])

  useEffect(() => {
    setList(
      sortingData(data, sortingName, 'name')
    )
  }, [sortingName])

  useEffect(() => {
    setList(
      sortingData(data, sortingCoutry, 'country')
    )
  }, [sortingCoutry])

  return (
    <div className="overflow-x-auto">
      <div className="align-middle inline-block min-w-full">
        <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg p-4 border border-zinc-300">
          <table className="min-w-full divide-y divide-gray-200 h-3/4 overflow-y-auto">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider"
                >
                  <div className="flex flex-wrap">Name { renderSortIcon('name') }</div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider"
                >
                  <div className="flex flex-wrap">Country { renderSortIcon('country') }</div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider"
                >
                  Website
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              { list.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center pt-4">
                    <span className="text-sm font-medium mt-4 text-primary">Data not found!</span>
                  </td>
                </tr>
              ) }
              {list.map((item, i) => (
                <tr key={`list-unv-${i}`} className={`${isOdd(i+1) ? 'bg-default-light hover:bg-gray-light' : 'hover:bg-gray-light'}`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">{item.country}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">{item.web_pages[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table;