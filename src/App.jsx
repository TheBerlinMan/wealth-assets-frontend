import { useEffect, useState } from "react";

import * as AssetService from "./Services/AssetService";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  console.log(assets);

  const totalAssetBalance = assets.reduce(
    (acc, asset) => acc + asset.balanceCurrent, 0
  );

  if (assets.length === 0) return <div>Loading...</div>;
  return (
    <div className="text-white m-6 pt-2 space-y-4 ">
      <h1 className="text-2xl font-bold">Account Dashboard</h1>
      <Card>
        <CardContent>
          <div className="flex justify-between text-lg font-bold">
            <h1>Total Assets</h1>
            <h1>{formatCurrency(totalAssetBalance)}</h1>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
