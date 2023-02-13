// Search Functionality
export function filterData(searchText, allRestaurantData) {
    const filteredData = allRestaurantData.filter((datas) =>
      datas?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    return filteredData;
  }

//  