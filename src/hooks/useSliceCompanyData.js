export const sliceData = (currentPage, postPerPage, companiesList) => {
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentCompanies = companiesList.slice(indexOfFirstPost, indexOfLastPost)

    return currentCompanies
}