const filterSearch = ({router,department, departmentName, id, name, province, city}) => {

    const path = router.pathname;
    const query = router.query;


    if(department) {query.department = department;}// else query.department ='All'
    if(departmentName) query.departmentName = departmentName;
    if(name){ query.name = name;} else {if(!department) {query.name = ''}}
    if(id) query.id = id;
    if(province) query.province = province;
    if(city) query.city = city;

    router.push({
        pathname: path,
        query: query
    })
}

export default filterSearch