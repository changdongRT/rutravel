import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const data = [
  { id: "1", name: "서울" },
  { id: "2", name: "대구" },
  { id: "3", name: "대전" },
  { id: "4", name: "부산" },
  { id: "5", name: "경주" },
  { id: "6", name: "강릉" },
  { id: "7", name: "강화도" },
]; // 데이터 공간

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // 초기값을 빈문자열로 만듬
  const [filteredData, setFilteredData] = useState(data); // 초기값을 데이터로 설정
  const [recentSearches, setRecentSearches] = useState([]); // 최근 검색어 상태

  // 컴포넌트가 마운트될 때 localStorage에서 최근 검색어를 가져옴
  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem("recentSearches"));
    if (storedSearches) {
      setRecentSearches(storedSearches);
    }
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch} style={styles.icon} />
        <input
          style={styles.input}
          placeholder="검색"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <h3 style={styles.heading}>최근 검색어</h3>
      <ul style={styles.recentList}>
        {recentSearches.map((item, index) => (
          <li key={index} style={styles.recentItem}>
            {item}
          </li>
        ))}
      </ul>

      <h3 style={styles.heading}>검색 결과</h3>
      <ul style={styles.list}>
        {filteredData.map((item) => (
          <li key={item.id} style={styles.item}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "90%",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  searchContainer: {
    position: "relative",
    marginBottom: "20px",
  },
  icon: {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#000000",
  },
  input: {
    width: "100%",
    padding: "10px 40px 10px 30px",
    fontSize: "16px",
    borderRadius: "50px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  heading: {
    margin: "10px 0",
  },
  recentList: {
    listStyleType: "none",
    padding: 0,
    marginBottom: "20px",
  },
  recentItem: {
    padding: "5px 0",
    color: "#555",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  item: {
    padding: "10px",
    borderBottom: "1px solid #eee",
    fontSize: "16px",
  },
};

export default SearchPage;
