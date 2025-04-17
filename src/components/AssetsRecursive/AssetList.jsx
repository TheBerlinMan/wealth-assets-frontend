import React from "react";
import { AssetItem } from "./AssetItem";

const AssetList = ({ assets, level = 0 }) => {
  return (
    <div className={level === 0 ? "p-2 " : "pl-4"}>
      {assets && assets.length > 0 &&
        assets.map((asset, index) => (
          <AssetItem key={index} asset={asset} level={level} />
        ))}
    </div>
  );
};

export { AssetList };
