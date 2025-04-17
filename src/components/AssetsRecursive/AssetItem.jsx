import React from "react";
import { AssetList } from "./AssetList";
import { formatCurrency } from "../../lib/utils";
import { ChevronDown as Down, ChevronRight as Right } from "lucide-react";


const AssetItem = ({ asset, level }) => {
  return (
    <div className={`${level === 0 ? "font-bold" : "font-normal text-sm "} mb-2`}>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <div
            className={`${level === 0 ? "display" : "hidden"}`}
          >
            <Right size={16} />
          </div>
          <div>{asset.label}</div>
        </div>
        <div>{formatCurrency(asset.balanceCurrent)}</div>
      </div>
      {asset && asset.children && asset.children.length > 0 && (
        <AssetList assets={asset.children} level={level + 1} />
      )}
    </div>
  );
};

export { AssetItem };
