import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import arrowRight from '../../../assets/images/arrow-right.svg';
import styles from './styles.module.scss';

export interface PaginateProps {
    pageNumbers: number[];
    paginate?: any;
    currentPage?: number
};

const Paginate: React.FC<PaginateProps> = ({
    pageNumbers,
    paginate,
    currentPage = 1
}) => {
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1

    return (
        <ul className={styles.pagination}>
            {pageNumbers.length !== 0 && 
            <li
                className={styles.pageItem}
                onClick={() => currentPage !== 1 ? paginate(prevPage) : {}}
            > 
                <Image src={arrowLeft} />
            </li>}
            {pageNumbers.map(number => (
                <li
                    key={number}
                    className={cn({
                        [styles.pageItem]: true,
                        [styles.activePage]: currentPage === number,
                    })}
                >
                    <div
                        onClick={() => paginate(number)}
                        className={styles.pageLink}>
                        {number}
                    </div>
                </li>
            ))}
            {pageNumbers.length !== 0 && 
                <li 
                    className={styles.pageItem}
                    onClick={() => currentPage !== pageNumbers.length ? paginate(nextPage) : {}}
            > 
                    <Image src={arrowRight} />
                </li>
            }
        </ul>
    );
};

export default Paginate;