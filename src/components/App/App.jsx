import { useState, useEffect } from 'react';
import { Wrap, ErrorMessage } from './App.styled';
import Searchbar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImg } from 'api/api';

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export default function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const createGallery = async (page, query) => {
    try {
      setIsLoading(true);
      const backendFiles = await fetchImg(page, query);

      if (!images.length && backendFiles.totalHits) {
        toast.success(`We found ${backendFiles.totalHits} images for you! 😍`);
      }

      if (!backendFiles.totalHits) {
        return toast.error('Sorry, no results for your search. Try again! 😭');
      } else {
        setTotal(backendFiles.totalHits);
        setImages(prevState => [...prevState, ...backendFiles.hits]);
      }
    } catch {
      setErrorMessage('Oops, something is wrong 😭 please try again');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    createGallery(currentPage, query);
    // eslint-disable-next-line
  }, [currentPage, query]);

  function getQuery(newQuery) {
    if (newQuery === query) {
      toast.info('You already see pictures for this query 😊');
      return;
    }
    setQuery(newQuery);
    setCurrentPage(1);
    setTotal(0);
    setImages([]);
  }

  const loadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <Wrap>
      <Searchbar onSubmit={getQuery} toast={toast.warning} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {total > images.length && <Button onLoadMore={loadMore} />}
    </Wrap>
  );
}
