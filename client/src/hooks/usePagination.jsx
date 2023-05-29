import { useState } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

export function usePagination({ pageSize = 1, arrayLength = 1 }) {
  const [currentPage, setCurrentPage] = useState(1)

  const pagesCount = Math.ceil(arrayLength / pageSize)
  console.log(pagesCount)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  console.log(pages)

  const start = currentPage * pageSize
  const end = start + pageSize

  const renderPaginationNumbers = pages.map((number) => {
    return (
      <PaginationItem
        key={number}
        id={number}
        onClick={() => setCurrentPage(number)}
      >
        <PaginationLink
          className={`bg-${
            currentPage === number ? 'secondary' : 'primary'
          } text-${currentPage === number ? 'primary' : 'white'}`}
        >
          {number}
        </PaginationLink>
      </PaginationItem>
    )
  })

  const renderPagination = (
    <Pagination>
      {/* primer item */}
      <PaginationItem onClick={() => setCurrentPage(1)}>
        <PaginationLink
          first
          className={`text-white bg-${currentPage === 1 ? 'dark' : 'primary'}`}
          disabled={currentPage === 1}
        />
      </PaginationItem>
      {/* item anterior */}
      <PaginationItem>
        <PaginationLink
          previous
          onClick={() => setCurrentPage((page) => page - 1)}
          className={`text-white bg-${currentPage === 1 ? 'dark' : 'primary'}`}
          disabled={currentPage === 1}
        />
      </PaginationItem>
      {/* numeros de paginacion */}
      {renderPaginationNumbers}
      {/* item siguiente */}
      <PaginationItem>
        <PaginationLink
          next
          onClick={() => setCurrentPage((page) => page + 1)}
          className={`text-white bg-${
            currentPage === pagesCount ? 'dark' : 'primary'
          }`}
          disabled={currentPage === pagesCount}
        />
      </PaginationItem>
      {/* ultimo item */}
      <PaginationItem onClick={() => setCurrentPage(pagesCount)}>
        <PaginationLink
          last
          className={`text-white bg-${
            currentPage === pagesCount ? 'dark' : 'primary'
          }`}
          disabled={currentPage === pagesCount}
        />
      </PaginationItem>
    </Pagination>
  )

  return {
    start,
    end,
    renderPagination
  }
}
