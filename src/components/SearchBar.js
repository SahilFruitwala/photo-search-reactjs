import React, { useState, useEffect } from "react";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar(props) {
  const { setImages } = props;
  const [searchText, setSearchText] = useState("");

  const fetchImages = () => {
    // console.log(searchText);
    let searchURL;

    if (searchText === "") {
        let randomPage = Math.floor((Math.random() * 100) + 1);
        searchURL = `https://api.pexels.com/v1/curated?per_page=30&page=${randomPage}`;
    }
    else {
        searchURL = `https://api.pexels.com/v1/search?query=${searchText}&per_page=30&page=1`;
    }
    fetch(
      searchURL,
      {
        headers: {
          Authorization: process.env.REACT_APP_PEXELS_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then(function (data) {
        console.log(data.photos);
        setImages(data.photos);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
      fetchImages();
  }, [])

  return (
    //   <div className="bg-info">
    <Container className="p-5">
      <InputGroup>
        <Input
          value={searchText}
          type="text"
          name="searchText"
          placeholder="What are you looking for today..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button color="secondary" onClick={fetchImages}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Container>
    // </div>
  );
}

export default SearchBar;
