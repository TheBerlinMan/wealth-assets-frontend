// react
import { useEffect, useState } from "react";
// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AssetOverview from "./components/AssetsOverview/AssetsOverview";
import { Assets } from "./components/AssetsRecursive/Assets";
// services & utils
import * as AssetService from "./Services/AssetService";
import { formatCurrency } from "./lib/utils";


function App() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const assets = await AssetService.getAssets();
      setAssets(assets);
    };

    fetchAssets();
  }, []);

  const totalAssetBalance = assets.reduce(
    (acc, asset) => acc + asset.balanceCurrent, 0
  );

  if (assets.length === 0) return <div className="text-white text-2xl font-bold m-6">Loading...</div>;
  return (
    <div className="text-white m-6 pt-2 space-y-4 ">
      <h1 className="text-2xl font-bold">Account Dashboard</h1>

      {/* Total Assets */}
      <Card>
        <CardContent>
          <div className="flex justify-between text-lg font-bold">
            <h1>Total Assets</h1>
            <h1>{formatCurrency(totalAssetBalance)}</h1>
          </div>
        </CardContent>
      </Card>

      {/* Assets by Category */}
      <Card>
        <CardHeader>
          <CardTitle>
            <h1 className="text-lg font-bold">Assets by Category</h1>
            <h1 className="text-sm font-bold text-gray-500 -mb-2">
              Category / Subcategory / Asset
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AssetOverview assets={assets} />
        </CardContent>
      </Card>

      {/* Attempt at recursive solution */}
      {/* <Assets assets={assets} /> */}
    </div>
  );
}

export default App;
