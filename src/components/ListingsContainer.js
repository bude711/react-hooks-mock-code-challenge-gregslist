import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, removeListing}) {

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} removeListing={removeListing}/>
        ))}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
