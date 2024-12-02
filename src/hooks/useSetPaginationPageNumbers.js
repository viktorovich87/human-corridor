export const getPageNumber = (companiesList, postPerPage) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(companiesList.length / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return pageNumbers
}