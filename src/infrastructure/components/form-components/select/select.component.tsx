import cn from 'classnames';
import React, { useState, useRef, useEffect } from 'react';
import GlobalSubcategoryStructure from "../../../../interfaces"
import InputMask from 'react-input-mask';
import arrowDown from '../../../../assets/images/select-arrow-down.svg';
import arrowUp from '../../../../assets/images/select-arrow-up.svg';
import { setPageTitle, setGlobalSearchCategory } from "../../../../store/actionCreators/mainActionCreator";
import { useDispatch } from "react-redux";
// import { getGlobalPageTitle } from "../../../../store/selectors/mainSelector"
import styles from './style.module.scss';
export interface SelectProps {

  className?: string;
  onClick?: () => void;
  items?: GlobalSubcategoryStructure[];
  selectedItem?: any,
  defaultValue?: string
  blockElement?: boolean
  opacity?: boolean
  // defaultRequestByFirstSubCategory?: any
}

const Select: React.FC<SelectProps> = ({
  className,
  onClick,
  items,
  selectedItem,
  defaultValue,
  blockElement,
  opacity,
  // defaultRequestByFirstSubCategory = false
}) => {

  const [showSelectItems, onShowSelectItems] = useState(false)
  const [selectedValue, setSelectedValue] = useState(defaultValue || "All")

  const dispatch = useDispatch();

  // const globalPageTitle = useSelector(getGlobalPageTitle);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const onChangeSelectValue = (title: string, index: number, setInGlobal: boolean) => {
    setSelectedValue(title)
    setInGlobal && dispatch(setPageTitle(title, index))
    selectedItem({ title, index })
    !setInGlobal && dispatch(setGlobalSearchCategory(title))
  }


  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          onShowSelectItems(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const arrow = !showSelectItems ? arrowDown.src : arrowUp.src


  const renderItems = (items: GlobalSubcategoryStructure[]) => {
    let content

    if (!!items[0]?.title) {
      content = items.map(({ title, myCategoryId }, index) => {
        return (
          <div key={index} onClick={() => onChangeSelectValue(title, myCategoryId || 1, true)}  >{title}</div>
        )
      })

      return content
    } else {
      content = items.map((title, index) => {
        return (
          <div key={index} onClick={() => onChangeSelectValue(title.toString(), index + 1, false)} >{title?.toString()}</div>
        )
      })

      return content
    }

  }

  return (
    <div
      onClick={() => items && items[0] ? onShowSelectItems(!showSelectItems) : {}}

      className={cn({
        [styles.select]: true,
        [styles.opacity]: opacity,
      })}
    >
      <input
        value={defaultValue}
        disabled={blockElement}
        defaultValue={""}
        className={styles.input}
        style={{ backgroundImage: `url(${arrow})` }}
      />
      {items && items[0] && showSelectItems && <div className={styles.selectItems} ref={wrapperRef}>
        {renderItems(items || [])}
      </div>}

    </div>
  );
}

export default Select;