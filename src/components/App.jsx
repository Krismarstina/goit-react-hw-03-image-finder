import React, { Component } from 'react';
import { Wrap } from './App.styled';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from '../components/Services/imageApi';
import { ButtonLoadMore } from './Button/Button';
import { ColorRing } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    modal: {},
    showModal: false,
  };

  handleSearchImageSubmit = query => {
    this.setState({ query, page: 1, images: [], isLoading: true });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1, isLoading: true }));
  };

  openModal = e => {
    this.setState({
      modal: { alt: e.target.alt, url: e.currentTarget.dataset.large },
      showModal: true,
    });
  };

  closeModal = e => {
    this.setState({ showModal: false });
  };

  async componentDidUpdate(_, prevState) {
    if (!this.state.isLoading) {
      return;
    }
    const prevName = prevState.query;
    const nextName = this.state.query;

    try {
      const images = await getImages(this.state.page, nextName);
      if (prevName !== nextName || prevState.page !== this.state.page) {
        this.setState({ images: [...this.state.images, ...images] });
      }
    } catch (error) {
      console.log('error');
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <Wrap>
        <SearchBar onSubmit={this.handleSearchImageSubmit} />
        <ImageGallery images={this.state.images} onClick={this.openModal} />
        {this.state.isLoading && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        )}
        {this.state.images.length > 0 && (
          <ButtonLoadMore onClick={this.loadMore} />
        )}
        {this.state.showModal && (
          <Modal image={this.state.modal} onClose={this.closeModal} />
        )}
        <ToastContainer autoClose={1000} />
      </Wrap>
    );
  }
}
