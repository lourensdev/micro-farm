import { ToolType, useToolStore } from "../store/tool-store";

export const Tools = () => {
  const toolStore = useToolStore((state) => state);
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        onClick={() => toolStore.setTool(ToolType.PLANT)}
        disabled={toolStore.tool === ToolType.PLANT}
      >
        Plant
      </button>
      <button
        onClick={() => toolStore.setTool(ToolType.WATER)}
        disabled={toolStore.tool === ToolType.WATER}
      >
        Water
      </button>
      <button
        onClick={() => toolStore.setTool(ToolType.HARVEST)}
        disabled={toolStore.tool === ToolType.HARVEST}
      >
        Harvest
      </button>
      <button
        onClick={() => toolStore.setTool(ToolType.BUY)}
        disabled={toolStore.tool === ToolType.BUY}
      >
        Buy
      </button>
      <button
        onClick={() => toolStore.setTool(ToolType.CLEAR)}
        disabled={toolStore.tool === ToolType.CLEAR}
      >
        Clear
      </button>
    </div>
  );
};
