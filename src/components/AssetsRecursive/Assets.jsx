import React from "react";
import { AssetList } from "./AssetList";
const Assets = ({ assets }) => {
  const tree = [];

  assets.forEach((asset) => {
    const { primaryAssetCategory, wealthAssetType, nickname, balanceCurrent } =
      asset;

    // Find or create category
    let category = tree.find((cat) => cat.label === primaryAssetCategory);
    if (!category) {
      category = { label: primaryAssetCategory, children: [] };
      tree.push(category);
    }

    // Find or create asset type
    let assetType = category.children.find(
      (type) => type.label === wealthAssetType
    );
    if (!assetType) {
      assetType = { label: wealthAssetType, children: [], balanceCurrent: 0 };
      category.children.push(assetType);
    }

    // Add asset
    assetType.children.push({ label: nickname, balanceCurrent });
    assetType.balanceCurrent = assetType.children.reduce(
      (sum, child) => sum + (child.balanceCurrent || 0),
      0
    );
    category.balanceCurrent = category.children.reduce(
      (sum, child) => sum + (child.balanceCurrent || 0),
      0
    );
  });

  console.log(tree);

  return (
    <div>
      <AssetList assets={tree} />
    </div>
  );
};

export { Assets };
