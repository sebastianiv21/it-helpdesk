import { useState } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

export function usePagination({ pageSize = 1, arrayLength = 1 }) {
  const [currentPage, setCurrentPage] = useState(0)

  const pagesCount = Math.ceil(arrayLength / pageSize)

  const start = currentPage * pageSize
  const end = start + pageSize

  const RenderPaginationNumbers = () => {
    // handles pages numbers and its render
    const pages = []
    for (let i = 0; i < pagesCount; i++) {
      pages.push(
        <PaginationItem key={i} id={i} onClick={() => setCurrentPage(i)}>
          <PaginationLink
            className={`bg-${
              currentPage === i ? 'secondary' : 'primary'
            } text-${currentPage === i ? 'primary' : 'white'}`}
          >
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      )
    }
    return pages
  }

  const renderPagination = (
    <Pagination>
      {/* primer item */}
      <PaginationItem onClick={() => setCurrentPage(0)}>
        <PaginationLink
          first
          className={`text-white bg-${currentPage === 0 ? 'dark' : 'primary'}`}
          disabled={currentPage === 0}
        />
      </PaginationItem>
      {/* item anterior */}
      <PaginationItem>
        <PaginationLink
          previous
          onClick={() => setCurrentPage((page) => page - 1)}
          className={`text-white bg-${currentPage === 0 ? 'dark' : 'primary'}`}
          disabled={currentPage === 0}
        />
      </PaginationItem>
      {/* numeros de paginacion */}
      <RenderPaginationNumbers />
      {/* item siguiente */}
      <PaginationItem>
        <PaginationLink
          next
          onClick={() => setCurrentPage((page) => page + 1)}
          className={`text-white bg-${
            currentPage === pagesCount - 1 ? 'dark' : 'primary'
          }`}
          disabled={currentPage === pagesCount - 1}
        />
      </PaginationItem>
      {/* ultimo item */}
      <PaginationItem onClick={() => setCurrentPage(pagesCount)}>
        <PaginationLink
          last
          className={`text-white bg-${
            currentPage === pagesCount - 1 ? 'dark' : 'primary'
          }`}
          disabled={currentPage === pagesCount - 1}
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
