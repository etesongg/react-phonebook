import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filterList, setFilterList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilterList(list);
    } else {
      setFilterList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div>
      <SearchBox />
      <div className="contact-list">
        결과: {filterList.length}
        {filterList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
