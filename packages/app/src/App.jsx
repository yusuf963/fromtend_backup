import React, { useEffect, useState } from 'react'
import Header from './Header'
// - The user must be presented with the following properties for all products:
//   - name
//   - description
//   - category
//   - color
//   - price
//   - inStock
const App = (props) => {
  const [state, setState] = useState({
    message: null,
    loading: true,
    error: false,
  })

  useEffect(() => {
    const request = async () => {
      setState({ ...state, loading: true })

      // 2. alternatively retrieve data directly from the api
      const response = await fetch('/api',{
        headers: {
          'content-type': 'application/json',
        }
      })

      const { data } = await response.json()

      setState({ ...state, ...data, loading: false })
    }

    request()
  }, props)

    return(
      <div>
        { state.message &&
        Object.values(state.message).map((product, index)=>{
          return(
            <div key={index}>
              <p>{product.name}</p>
              <p>{product.category}</p>
              <p>$ {product.price}</p>
              <p>{product.sku}</p>
              <p>{product.description}</p>
              <p>{product.url}</p>
              <p>{product.inStock ? "available" : "not available"} </p>
              <p style={{backgroundColor:`${product.color}`}}>{product.color}</p>
          </div>
          )
        })
        }
      </div>
    )
  }


export default App
