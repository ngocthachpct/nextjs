import * as Icon from 'react-feather';
import { useState } from 'react'
import { useRouter } from 'next/router';
import filterSearch from '../utils/filterSearch ';


export default function BranchFilter({ items }) {
  const cities = items.map(city => city.city)
  const provinces = items.map(province => {
    if (province.state_province == null) {
      return null; // or you can choose to return an empty string, or any other value that suits your use case
    }
    return province.state_province;
  }).filter(province => province !== null);

  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const router = useRouter()

  const handleCity = (e) => {
    setCity(e.target.value)
    filterSearch({ router, city: e.target.value })
  }


  const handleProvince = (e) => {
    setProvince(e.target.value)
    filterSearch({ router, province: e.target.value })
  }


  return (
    

    
      <div className="row">
      <div className="text-center">
  <div className="row align-items-start">
        <div className="col">
          <label className="employee_count">Provinces<select  className="form-control" value={province} onChange={handleProvince}>
            <option>All</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select></label>
        </div>
        <div className="col">
          <label className="employee_count">Cities
          <select id="inputDepartment" className="form-control" name="department" value={city} onChange={handleCity}>
            <option>All</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          </label>
        </div>
        </div>
        </div>
      </div>
    
    /*
    <form>
      <div className="row">
        <div className="form-group col-md-4">
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputDepartment">Province</label>
          <select id="inputDepartment" className="form-control" name="department" value={province} onChange={handleProvince}>
            <option select>All</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputDepartment">City</label>
          <select id="inputDepartment" className="form-control" name="department" value={city} onChange={handleCity}>
            <option select>All</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
    */
  );
}
