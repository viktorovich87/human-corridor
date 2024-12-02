import cn from 'classnames';
import React, { useState, useRef, useEffect } from 'react';
import InputMask from 'react-input-mask';
import styles from './style.module.scss';
import FormInputProps from "./types"


const FormInput: React.FC<FormInputProps> = ({
  name,
  mask,
  id,
  type,
  placeholder,
  className,
  onClick,
  onChange,
  valueByDefault = "",
  imageBackground = "",
  insertedValue,
  cities
}) => {

  const [selectedValue, setSelectedValue] = useState(valueByDefault)
  const [showSearchContainer, setShowSearchContainer] = useState(false)
  const { input, setBackground, textFieldContainer, searchListContainer } = styles

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowSearchContainer(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const onChangeInput = (value: string) => {

    setShowSearchContainer(true)

    setSelectedValue(value)
    insertedValue(value)
    onChange(value)
  }

  const renderSearchList = () => {

    const content = cities.length === 0 ? renderEmptyCitiesList() : renderSearchListItems(cities)

    return (
      <div className={searchListContainer} ref={wrapperRef}>
        {content}
      </div>
    )
  }

  const renderEmptyCitiesList = () => {
    return (
      <div>
        No Results Found
      </div>
    )
  }

  const selectSearchResult = (city: string) => {
    setSelectedValue(city)
    insertedValue(city)
    setShowSearchContainer(false)
  }

  const renderSearchListItems = (cities: []) => {
    const content = (cities || []).map((city, index) => {
      const { cityName, stateName } = city
      return (
        <div key={index} onClick={() => selectSearchResult(cityName)}>{cityName}, {stateName}</div>
      )
    })

    return content
  }

  return (
    <div className={textFieldContainer}>
      <input
        className={cn(input, imageBackground.src && setBackground)}
        type={type}
        name={name}
        {...{ id }}
        onChange={(e) => onChangeInput(e.target.value)}
        value={selectedValue}
        style={{ backgroundImage: `url(${imageBackground.src})` }}
        placeholder={placeholder}
        autoComplete="off"
      />

      {showSearchContainer && renderSearchList()}
    </div>
  );
}

export default FormInput;