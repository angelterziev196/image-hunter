import glass from '../../static/images/magnifyingGlass.png';

const NotFound = (): JSX.Element => (
  <div className="text-center mt-10 mx-auto">
    <div className="mx-auto max-w-100 mb-4">
      <img src={glass} alt="magnifying glass" />
    </div>

    <div className="dark:text-white">
      <h3 className="text-xl font-bold">Sorry! No results found. :(</h3>
      <p className="font-semibold">Please try again with another keyword.</p>
    </div>
  </div>
);

export default NotFound;
