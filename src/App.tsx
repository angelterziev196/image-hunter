import './App.css';
import Header from './components/Header/Header';
import ImageCard from './components/ImageCard/Card';
import SearchInput from './components/SearchInput/Input';
import SideBar from './components/SideBar/SideBar';
import Pagination from './components/Pagination/Pagination';
import SortingMenu from './components/SortingMenu/SortingMenu';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import NotFound from './components/NotFound/NotFound';
import { UnsplashTypes } from './types/unsplashImage';
import { useSorterChange } from './hooks/useSorterChange/useSorterChange';
import { usePageCount } from './hooks/usePageCount/usePageCount';
import { useFilterValues } from './hooks/useFilterValues/useFilterValues';
import { useSearch } from './hooks/useSearch/useSearch';

function App(): JSX.Element {
  const { pageToShow, handlePageCount } = usePageCount();
  const { sorterValues, handleSorterChanges } = useSorterChange();
  const { filterValues, handleColorChange, handleOrientationChange } = useFilterValues();
  const { handleSearch, setInputValue, inputValue, images, pageCount, totalElements } = useSearch({
    filterValues,
    sorterValues,
    pageToShow
  });

  return (
    <div className="font-sans relative pb-20 dark:bg-ebony App">
      <Header text="Image Hunter" />
      <ThemeSwitch />

      <div className="max-w-1300 px-4 mx-auto">
        <div className="lg:flex gap-6">
          <div className="mt-5 self-start lg:sticky top-5">
            <SideBar
              handleFilter={handleSearch}
              onLandscapeChange={handleOrientationChange}
              onColorChange={handleColorChange}
            />
          </div>

          <div className="w-full">
            <div className="w-full md:flex md:justify-between">
              <SearchInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                onSearch={handleSearch}
              />
              <SortingMenu onHandleSorting={handleSorterChanges} />
            </div>

            {totalElements ? (
              <div className="grid grid-cols-1 mt-6 md:mt-0 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image: UnsplashTypes) => (
                  <ImageCard
                    key={image.id}
                    imageSrc={image.urls.regular}
                    author={image.user.name}
                    description={image.description}
                    likes={image.likes}
                  />
                ))}
              </div>
            ) : (
              <NotFound />
            )}

            {!!images.length && <Pagination totalPages={pageCount} handleClick={handlePageCount} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
