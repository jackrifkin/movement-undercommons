import { useEffect, useState } from "react";
// TODO: should be fetched from db + stored in redux store
import portraits from "./../../temp_data/portraits.json";

const PORTRAITS_PER_PAGE = 12;

export default function usePortraitGallery() {
  const [hasMultiplePages, setHasMultiplePages] = useState(false);
  const [currentFilters, setCurrentFilters] = useState([]);
  const [currentPortraits, setCurrentPortraits] = useState(portraits);

  useEffect(() => {
    setCurrentPortraits(portraits);
    const needsMultiplePages = portraits?.length > PORTRAITS_PER_PAGE;
    setHasMultiplePages(needsMultiplePages);
  }, [portraits]);

  useEffect(() => {
    const filteredPortraits = portraits.filter((portrait) =>
      currentFilters.every((filter) => portrait.filters?.includes(filter)),
    );
    const needsMultiplePages = filteredPortraits.length > PORTRAITS_PER_PAGE;
    setHasMultiplePages(needsMultiplePages);
    setCurrentPortraits(filteredPortraits);
  }, [currentFilters]);

  const isFilterSelected = (filter) => {
    return currentFilters.includes(filter);
  };

  const isPortraitVisible = (portrait) => {
    return currentFilters.every((filter) =>
      portrait.filters?.includes(filter),
    );
  }

  const handleFilterSelect = (filter) => {
    if (isFilterSelected(filter)) {
      setCurrentFilters(currentFilters.filter((f) => f !== filter));
    } else {
      setCurrentFilters(currentFilters.concat(filter));
    }
  };

  return { hasMultiplePages, currentPortraits, handleFilterSelect, isFilterSelected, isPortraitVisible }
}