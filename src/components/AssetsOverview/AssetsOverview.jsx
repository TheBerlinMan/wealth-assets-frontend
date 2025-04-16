import React, { useState } from "react";
import { formatCurrency } from "../../lib/utils";
import { ChevronDown as Down, ChevronRight as Right } from "lucide-react";

const AssetOverview = ({ assets }) => {
  const [openPrimary, setOpenPrimary] = useState({});
  const [openWealth, setOpenWealth] = useState({});

  // Group assets by primary category and then by wealth asset type.
  const groupedAssets = assets.reduce((acc, asset) => {
    const { primaryAssetCategory, wealthAssetType, nickname, balanceCurrent } =
      asset;
    const numBalance = parseFloat(balanceCurrent) || 0;

    if (!acc[primaryAssetCategory]) {
      acc[primaryAssetCategory] = { total: 0, wealthAssetTypes: {} };
    }
    if (!acc[primaryAssetCategory].wealthAssetTypes[wealthAssetType]) {
      acc[primaryAssetCategory].wealthAssetTypes[wealthAssetType] = {
        total: 0,
        assets: [],
      };
    }

    acc[primaryAssetCategory].total += numBalance;
    acc[primaryAssetCategory].wealthAssetTypes[wealthAssetType].total +=
      numBalance;
    acc[primaryAssetCategory].wealthAssetTypes[wealthAssetType].assets.push({
      title: nickname,
      balance: numBalance,
    });

    return acc;
  }, {});

  const handleTogglePrimary = (category) => {
    setOpenPrimary({
      ...openPrimary,
      [category]: !openPrimary[category],
    });
  };

  const handleToggleWealth = (primaryCategory, wealthType) => {
    setOpenWealth({
      ...openWealth,
      [primaryCategory]: {
        ...openWealth[primaryCategory],
        [wealthType]: !(openWealth[primaryCategory]?.[wealthType] ?? false),
      },
    });
    console.log(openWealth);
  };

  return (
    <div>
      {Object.entries(groupedAssets).map(([primaryCat, primaryData]) => (
        <div key={primaryCat} className="mb-4">
          <div
            className="flex justify-between font-bold cursor-pointer"
            onClick={() => handleTogglePrimary(primaryCat)}
          >
            <div className="flex items-center">
              <span>
                {openPrimary[primaryCat] ? (
                  <Down size={16} />
                ) : (
                  <Right size={16} />
                )}
              </span>
              <h2 className="ml-2">{primaryCat}</h2>
            </div>
            <span>{formatCurrency(primaryData.total)}</span>
          </div>
          {openPrimary[primaryCat] &&
            Object.entries(primaryData.wealthAssetTypes).map(
              ([wealthType, wealthData]) => (
                <div key={wealthType} className="pl-4 pt-2 border-l ml-2">
                  <div
                    className="flex justify-between font-semibold text-md cursor-pointer text-gray-500"
                    onClick={() => handleToggleWealth(primaryCat, wealthType)}
                  >
                    <div className="flex items-center">
                      <span>
                        {openWealth[primaryCat]?.[wealthType] ? (
                          <Down size={16} />
                        ) : (
                          <Right size={16} />
                        )}
                      </span>
                      <h3 className="ml-2">{wealthType}</h3>
                    </div>
                    <span>{formatCurrency(wealthData.total)}</span>
                  </div>
                  {openWealth[primaryCat]?.[wealthType] &&
                    wealthData.assets.map((asset, index) => (
                      <div
                        key={index}
                        className="flex justify-between pl-4 text-sm my-1 text-gray-500"
                      >
                        <div className="ml-6">{asset.title}</div>
                        <div>{formatCurrency(asset.balance)}</div>
                      </div>
                    ))}
                </div>
              )
            )}
        </div>
      ))}
    </div>
  );
};

export default AssetOverview;
