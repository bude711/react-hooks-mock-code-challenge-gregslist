import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

// remove a listing from page by clicking the trash can icon. This change should be persisted in the backend.

function App() {
  const [listings, setListings]=useState([])
  const [search, setSearch]=useState("")
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r=> r.json())
    .then(setListings)
  }, [])

  function removeListing(id){
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  }

  const displayedListings = listings.filter((listing) =>
  listing.description.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer listings={displayedListings} removeListing={removeListing}/>
    </div>
  );
}

export default App;
