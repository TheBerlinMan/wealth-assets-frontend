import * as AssetService from './Services/AssetService'
import { useEffect, useState } from 'react'

function App() {
  const [assets, setAssets] = useState([])

  useEffect(() => {
    const fetchAssets = async () => {
      const assets = await AssetService.getAssets();
      setAssets(assets);
    };

    fetchAssets();
  }, []);

  console.log(assets)

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
