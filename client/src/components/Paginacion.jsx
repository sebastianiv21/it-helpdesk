import { useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginacion = ({pages, handleClick, currPage, setCurrPage}) => {
  const renderPageNumbers = pages.map((number) => {
    return (
      <PaginationItem
        key={number}
        id={number}
        onClick={() => handleClick(number)}
      >
        <PaginationLink
          className={`bg-${
            currPage === number ? 'secondary' : 'primary'
          } text-${currPage === number ? 'primary' : 'white'}`}
        >
          {number}
        </PaginationLink>
      </PaginationItem>
    );
  });

  return (
    <div className='mt-2 d-flex justify-content-center'>
      <Pagination>
        <PaginationItem onClick={() => setCurrPage(1)}>
          <PaginationLink
            first
            className={`text-white bg-${currPage === 1 ? 'dark' : 'primary'}`}
            disabled={currPage === 1}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            previous
            onClick={() => setCurrPage((curr) => curr - 1)}
            className={`text-white bg-${currPage === 1 ? 'dark' : 'primary'}`}
            disabled={currPage === 1}
          />
        </PaginationItem>

        {renderPageNumbers}

        <PaginationItem>
          <PaginationLink
            next
            onClick={() => setCurrPage((curr) => curr + 1)}
            className={`text-white bg-${
              currPage === pages.length ? 'dark' : 'primary'
            }`}
            disabled={currPage === pages.length}
          />
        </PaginationItem>

        <PaginationItem onClick={() => setCurrPage(pages.length)}>
          <PaginationLink
            last
            className={`text-white bg-${
              currPage === pages.length ? 'dark' : 'primary'
            }`}
            disabled={currPage === pages.length}
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default Paginacion;
