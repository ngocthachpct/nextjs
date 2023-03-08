const filterSearch = ({router,department, id, name, province, city}) => {

    const path = router.pathname;
    const query = router.query;


    if(department) query.department = department;
    if(name) query.name = name;
    if(id) query.id = id;
    if(province) query.province = province;
    if(city) query.city = city;

    router.push({
        pathname: path,
        query: query
    })
}

export default filterSearch